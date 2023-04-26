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
    public class OrderController : ControllerBase
    {
        public static Order order = new Order();
        private readonly OrderContext _context;

        public OrderController(OrderContext context)
        {
            _context = context;
        }


        [HttpGet()]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrder()
        {
          if (_context.Orders == null)
          {
              return NotFound();
          }
            return Ok(await _context.Orders.ToListAsync());
        }

        [HttpPost()]
        public async Task<ActionResult<OrderCreateDTO>> CreateOrder(OrderCreateDTO request)
        {
            if (_context.Orders == null)
            {
                return Problem("Entity set 'OrderContext.Orders'  is null.");
            }
            if (OrderExists(request.orderId))
            {
                return Conflict();
            }
            var newMenuname = new Order{
                username = request.username,
                nickname = request.nickname,
                realname = request.realname,
                menuname = request.menuname,
                amount = request.amount,
                orderStatus= "waiting"
            };

            _context.Orders.Add(newMenuname);
            await _context.SaveChangesAsync();
            return Ok("Create Order success");
        }

        

        private bool OrderExists(long? orderId)
        {
            return (_context.Orders?.Any(e => e.orderId == orderId)).GetValueOrDefault();
        }


    }
}
