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
    public class OrderConfirmController : ControllerBase
    {
        public static OrderConfirm order = new OrderConfirm();
        private readonly OrderConfirmContext _context;
        
        public OrderConfirmController(OrderConfirmContext context)
        {
            _context = context;
        }


        [HttpGet("GetPost")]
        public async Task<ActionResult<IEnumerable<OrderConfirm>>> GetOrder()
        {
          if (_context.OrderConfirms == null)
          {
              return NotFound();
          }
            return await _context.OrderConfirms.ToListAsync();
        }


        [HttpDelete("orderConfirm/{orderId}")]
        public async Task<ActionResult<OrderConfirm>> removeOrder(long? orderId)
        {
            if (_context.OrderConfirms == null)
            {
                return Problem("Entity set 'OrderConfirmContext.OrderConfirms'  is null.");
            }
            if (!OrderExists(orderId))
            {
                return Conflict();
            }

            var queryOrder = _context.OrderConfirms
                       .Where(s => s.orderId == orderId)
                       .FirstOrDefault<OrderConfirm>();

            if (queryOrder is null)
            {
                return BadRequest();
            }
            _context.OrderConfirms.Remove(queryOrder);
            await _context.SaveChangesAsync();
            return Ok("Remove success");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrder(long orderId, OrderConfirmDTO OrderConfirmDTO)
        {
            if (orderId != OrderConfirmDTO.orderId)
            {
                return BadRequest();
            }

            var ordersave = await _context.OrderConfirms.FindAsync(orderId);
            if (ordersave == null)
            {
                return NotFound();
            }

            ordersave.orderStatus =  OrderConfirmDTO.orderStatus;
            ordersave.orderStatus = OrderConfirmDTO.orderStatus;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) when (!OrderExists(orderId))
            {
                return NotFound();
            }

            return NoContent();
        }

        // [HttpPut("confirm")]
        // public async Task<IActionResult> PutOrder(long orderId, OrderConfirmDTO OrderConfirmDTO)
        // {
        //     if (orderId != OrderConfirmDTO.orderId)
        //     {
        //         return BadRequest();
        //     }

        //     var ordersave = await _context.OrderConfirms.FindAsync(orderId);
        //     if (ordersave == null)
        //     {
        //         return NotFound();
        //     }

        //     ordersave.orderStatus =  OrderConfirmDTO.orderStatus;
        //     ordersave.orderStatus = OrderConfirmDTO.orderStatus;

        //     try
        //     {
        //         await _context.SaveChangesAsync();
        //     }
        //     catch (DbUpdateConcurrencyException) when (!OrderExists(orderId))
        //     {
        //         return NotFound();
        //     }

        //     return NoContent();
        // }

        // [HttpPut("cancel")]
        // public async Task<IActionResult> PutOrder(long orderId, OrderConfirmDTO OrderConfirmDTO)
        // {
        //     if (orderId != OrderConfirmDTO.orderId)
        //     {
        //         return BadRequest();
        //     }

        //     var ordersave = await _context.OrderConfirms.FindAsync(orderId);
        //     if (ordersave == null)
        //     {
        //         return NotFound();
        //     }

        //     ordersave.orderStatus =  OrderConfirmDTO.orderStatus;
        //     ordersave.orderStatus = OrderConfirmDTO.orderStatus;

        //     try
        //     {
        //         await _context.SaveChangesAsync();
        //     }
        //     catch (DbUpdateConcurrencyException) when (!OrderExists(orderId))
        //     {
        //         return NotFound();
        //     }

        //     return NoContent();
        // }

        private bool OrderExists(long? orderId)
        {
            return (_context.OrderConfirms?.Any(e => e.orderId == orderId)).GetValueOrDefault();
        }


    }
}

        // [HttpPost("Order")]
        // public async Task<ActionResult<OrderConfirm>> CreateOrder(OrderConfirm request)
        // {
        //     if (_context.OrderConfirms == null)
        //     {
        //         return Problem("Entity set 'OrderConfirmContext.OrderConfirms'  is null.");
        //     }
        //     if (OrderExists(request.orderId))
        //     {
        //         return Conflict();
        //     }
        //     var neworderStatus = new OrderConfirm{
        //         orderStatus = request.,
        //     };

        //     _context.OrderConfirms.Add(neworderStatus);
        //     await _context.SaveChangesAsync();
        //     return Ok("Create Order success");
        // }