using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;
using System.Net;

namespace backend.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly PostContext _context;

        public PostController(PostContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PostItem>>> GetPostAll()
        {
            if (_context.PostItems == null)
            {
                return NotFound();
            }
            return await _context.PostItems.ToListAsync();
        }

        [HttpGet("{status}")]
        public async Task<ActionResult<IEnumerable<PostItem>>> Index(string status)
        {
            if (_context.PostItems == null)
            {
                return Problem("Entity set 'PostContext.PostItems'  is null.");
            }

            var recieves = from m in _context.PostItems
                           select m;

            if (!String.IsNullOrEmpty(status))
            {
                recieves = recieves.Where(x => x.status == status);
            }

            return await recieves.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<PostItem>> PostUserInfoItem(PostItem post)
        {
            if (_context.PostItems == null)
            {
                return Problem("Entity set 'PostContext.PostModels'  is null.");
            }
            _context.PostItems.Add(post);
            await _context.SaveChangesAsync();
            Guid guid = Guid.NewGuid();
            string str = guid.ToString();

            return CreatedAtAction(nameof(GetPostAll), new { id = str }, post);
        }

    }



}