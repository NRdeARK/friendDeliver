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


        [HttpGet("GetAll")]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrder()
        {
          if (_context.Orders == null)
          {
              return NotFound();
          }
            return Ok(await _context.Orders.ToListAsync());
        }

        [HttpPost("Order")]
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

// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Mvc;

// namespace backend.Controllers
// {
//     public class orderController
//     {
//          public class StudentController : ControllerBase
//     {
//         private readonly ApplicationDB db;

//         public StudentController(ApplicationDB dbb)
//         {
//             db = dbb;
//         }

//         public IActionResult Index()
//         {
//             IEnumerable <order> alloder = db.Orders;
//             return View(alloder);
 
//         }

//         //GET METHOd
//         public IActionResult Detail()
//         {
//             return View();
//         }


//         [HttpPost]
//         [ValidateAntiForgeryToken]
//         public IActionResult Detail(order obj)
//         {

//                 db.Orders.Add(obj);
//                 db.SaveChanges();
//             return View(obj);
//         }

//         public IActionResult confirm(string? menuname)
//         {
//             if(menuname==null){
//                 return NotFound();
//             }
//             var obj=db.Orders.Find();
//             return View(obj);
//         }

        
//         public IActionResult confirm(order obj)
//         {
//             db.Orders.Update(obj);
//             db.SaveChanges();

//             return View(obj);
//         }

//         public IActionResult Delete(int? orderId)
//         {
//             if(orderId==null){
//                 return NotFound();
//             }
            
//             var obj=db.Orders.Find(orderId);

//             db.Orders.Remove(obj);
            
//             db.SaveChanges();
//             return RedirectToAction("Index");
//         }

//     }
// }