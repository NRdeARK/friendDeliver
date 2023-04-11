using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/post/[controller]")]
    [ApiController]
    public class StorePostItemsController : ControllerBase
    {
        private readonly StorePostContext _context;

        public StorePostItemsController(StorePostContext context)
        {
            _context = context;
        }

        // GET: api/StorePostItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StorePostItemDTO>>> GetStorePostItems()
        {
          if (_context.StorePostItems == null)
          {
              return NotFound();
          }
            return await _context.StorePostItems.Select(x => ItemToDTO(x)).ToListAsync();
        }

        // GET: api/StorePostItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StorePostItem>> GetStorePostItem(long id)
        {
          if (_context.StorePostItems == null)
          {
              return NotFound();
          }
            var storePostItem = await _context.StorePostItems.FindAsync(id);

            if (storePostItem == null)
            {
                return NotFound();
            }

            return storePostItem;
        }

        // PUT: api/StorePostItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStorePostItem(long id, StorePostItem storePostItem)
        {
            if (id != storePostItem.PostId)
            {
                return BadRequest();
            }

            _context.Entry(storePostItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StorePostItemExists(id))
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

        // POST: api/StorePostItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StorePostItem>> PostStorePostItem(StorePostItem storePostItem)
        {
          if (_context.StorePostItems == null)
          {
              return Problem("Entity set 'StorePostContext.StorePostItems'  is null.");
          }
            _context.StorePostItems.Add(storePostItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetStorePostItem), new { id = storePostItem.PostId }, storePostItem);
        }

        // DELETE: api/StorePostItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStorePostItem(long id)
        {
            if (_context.StorePostItems == null)
            {
                return NotFound();
            }
            var storePostItem = await _context.StorePostItems.FindAsync(id);
            if (storePostItem == null)
            {
                return NotFound();
            }

            _context.StorePostItems.Remove(storePostItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StorePostItemExists(long id)
        {
            return (_context.StorePostItems?.Any(e => e.PostId == id)).GetValueOrDefault();
        }
         private static StorePostItemDTO ItemToDTO(StorePostItem todoItem) =>
       new StorePostItemDTO
       {
           StoreId = todoItem.StoreId,
           StoreName = todoItem.StoreName,
           IsOpen = todoItem.IsOpen
       };
    }
}
