using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.IdentityModel.Tokens.Jwt;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        public static User user = new User();
        private readonly UserContext _context;
        private readonly IConfiguration _configuration;

        public AuthController(UserContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUserInfoItems()
        {
          if (_context.Users == null)
          {
              return NotFound();
          }
            return await _context.Users.ToListAsync();
        }

        [HttpPost("register")]
        public async Task<ActionResult<User>> Register(UserRegisterDTO request)
        {
            if (_context.Users == null)
            {
                return Problem("Entity set 'UserContext.Users'  is null.");
            }
            if (UserExists(request.username))
            {
                return Conflict();
            }
            var newUser = new User{
                username = request.username,
                passwordHashed = BCrypt.Net.BCrypt.HashPassword(request.password),
                nickname = request.nickname,
                realname = request.realname,
                tel = request.tel,
                timeCreated = DateTime.Now
            };
            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();
            return Ok("Register success");
        }


        [HttpGet("{username}")]
        public ActionResult<IEnumerable<User>> IndexUser(string username)
        {
            if (_context.Users == null)
            {
                return Problem("Entity set 'PostContext.Posts'  is null.");
            }

            var recieves = from m in _context.Users
                           select m;

            if (String.IsNullOrEmpty(username))
            {
                BadRequest();
            }
            User request = recieves.First(x => x.username == username);
            var userData = new UserDataDTO
            {
                username = request.username,
                nickname = request.nickname,
                realname = request.realname,
                tel = request.tel,
            };
            return Ok(userData);
        }


        [HttpPost("login")]
        public ActionResult<User> Login(UserLoginDTO request)
        {
            if (_context.Users == null)
            {
                return Problem("Entity set 'UserContext.Users'  is null.");
            }
            var queryUser = _context.Users
                       .Where(s => s.username == request.username)
                       .FirstOrDefault<User>();
            if (queryUser is null)
            {
                return BadRequest();
            }
            if (request.username == "" || request.password == ""){
                return BadRequest();
            }
            if (!UserExists(request.username)){
                return Unauthorized("username or password is invalid");
            }
            if (!BCrypt.Net.BCrypt.Verify(request.password, queryUser.passwordHashed))
            {
                return Unauthorized("username or password is invalid");
            }

            var token = CreateToken(queryUser);

            return Ok(new UserTokenDTO { username = request.username , nickname = queryUser.nickname, realname = queryUser.realname, accessToken = token});
            //return Ok("Register success");
        }

        private bool UserExists(string? username)
        {
            return (_context.Users?.Any(e => e.username == username)).GetValueOrDefault();
        }

        private string? CreateToken(User user)
        {
            if(user?.username is null){
                return null;
            }
            List<Claim> claims = new List<Claim>{
                new Claim(ClaimTypes.Name,user.username)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                _configuration.GetSection("AppSettings:Token").Value!
            ));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds
            );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }
    }
}