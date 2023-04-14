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

        [HttpPost]
        public async Task<ActionResult<PostItem>> PostUserInfoItem(PostItem post)
        {
            if (_context.PostItems == null)
            {
                return Problem("Entity set 'PostContext.PostModels'  is null.");
            }
            _context.PostItems.Add(post);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPostAll), new { id = post.id }, post);
        }

    }



}