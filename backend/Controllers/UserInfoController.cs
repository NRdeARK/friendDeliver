using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;
using System.Net;
using BCrypt.Net;


namespace backend.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class UserInfoController : ControllerBase
    {
        private readonly UserInfoContext _context;

        public UserInfoController(UserInfoContext context)
        {
            _context = context;
        }

        // GET: api/UserInfo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserInfoItem>>> GetUserInfoItems()
        {
          if (_context.UserInfoItems == null)
          {
              return NotFound();
          }
            return await _context.UserInfoItems.ToListAsync();
        }

        // GET: api/UserInfo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserInfoItem>> GetUserInfoItem(long id)
        {
          if (_context.UserInfoItems == null)
          {
              return NotFound();
          }
            var userInfoItem = await _context.UserInfoItems.FindAsync(id);

            if (userInfoItem == null)
            {
                return NotFound();
            }

            return userInfoItem;
        }

        // PUT: api/UserInfo/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{username}")]
        public async Task<IActionResult> PutUserInfoItem(string? username, UserInfoItem userInfoItem)
        {
            if (username != userInfoItem.username)
            {
                return BadRequest();
            }

            _context.Entry(userInfoItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserInfoItemExists(username))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/UserInfo
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("register")]
        public async Task<ActionResult<UserInfoItem>> PostUserInfoItem(UserInfoItem userInfoItem)
        {
          if (_context.UserInfoItems == null)
          {
              return Problem("Entity set 'UserInfoContext.UserInfoItems'  is null.");
          }
          if (UserInfoItemExists(userInfoItem.username)){
            return Conflict();
          }
            userInfoItem.password = BCrypt.Net.BCrypt.HashPassword(userInfoItem.password);
            _context.UserInfoItems.Add(userInfoItem);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetUserInfoItem", new { id = userInfoItem.username }, userInfoItem);
        }

        // DELETE: api/UserInfo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserInfoItem(long id)
        {
            if (_context.UserInfoItems == null)
            {
                return NotFound();
            }
            var userInfoItem = await _context.UserInfoItems.FindAsync(id);
            if (userInfoItem == null)
            {
                return NotFound();
            }

            _context.UserInfoItems.Remove(userInfoItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserInfoItemExists(string? username)
        {
            return (_context.UserInfoItems?.Any(e => e.username == username)).GetValueOrDefault();
        }
    }
}
