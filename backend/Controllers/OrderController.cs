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

        [HttpGet("{postId}")]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrderByPostId(long postId)
        {
            if (_context.Orders == null)
            {
                return NotFound();
            }
            var recieves = from m in _context.Orders
                           select m;

            if (postId.Equals(null))
            {
                return BadRequest("post ID is null");
            }
            recieves = recieves.Where(x => x.postId == postId);
            return Ok(await recieves.ToListAsync());
        }

        [HttpGet("username/{username}")]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrderByUsername(string username)
        {
            if (_context.Orders == null)
            {
                return NotFound();
            }
            var recieves = from m in _context.Orders
                           select m;

            if (username.Equals(null))
            {
                return BadRequest("post ID is null");
            }
            recieves = recieves.Where(x => x.username == username);
            return Ok(await recieves.ToListAsync());
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
            var newMenuname = new Order
            {
                username = request.username,
                nickname = request.nickname,
                realname = request.realname,
                postId = request.postId,
                menuname = request.menuname,
                amount = request.amount,
                orderStatus = "รอยืนยัน",
                timeCreated = DateTime.Now,
                isConfirmed = "-",
                isReceived = "-"
            };

            _context.Orders.Add(newMenuname);
            await _context.SaveChangesAsync();
            return Ok("Create Order success");
        }

        [HttpPut("confirmed/{orderId}")]
        public async Task<ActionResult<Order>> PutUpdateConfirm(long orderId, OrderUpdateLogic request)
        {
            if(orderId != request.orderId){
                return BadRequest();
            }
            if (_context.Orders == null)
            {
                return Problem("Entity set 'PostContext.OrderModels'  is null.");
            }
            if (!OrderExists(request.orderId))
            {
                return NotFound();
            }
            var selectOrder = _context.Orders.Where(e => e.orderId == request.orderId).FirstOrDefault();
            if (selectOrder == null)
            {
                return NotFound();
            }
            selectOrder.isConfirmed = request.logic;
            _context.Update(selectOrder);
            await _context.SaveChangesAsync();
            return Ok("order Update");
        }

        [HttpPut("received/{orderId}")]
        public async Task<ActionResult<Order>> PutUpdateReceived(long orderId, OrderUpdateLogic request)
        {
            if(orderId != request.orderId){
                return BadRequest();
            }
            if (_context.Orders == null)
            {
                return Problem("Entity set 'PostContext.OrderModels'  is null.");
            }
            if (!OrderExists(request.orderId))
            {
                return NotFound();
            }
            var selectOrder = _context.Orders.Where(e => e.orderId == request.orderId).FirstOrDefault();
            if (selectOrder == null)
            {
                return NotFound();
            }
            selectOrder.isReceived = request.logic;
            _context.Update(selectOrder);
            await _context.SaveChangesAsync();
            return Ok("order Update");
        }

        private bool OrderExists(long? orderId)
        {
            return (_context.Orders?.Any(e => e.orderId == orderId)).GetValueOrDefault();
        }
    }
}
