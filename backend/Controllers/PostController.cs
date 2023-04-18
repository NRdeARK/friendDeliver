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
        public async Task<ActionResult<IEnumerable<Post>>> GetPostAll()
        {
            if (_context.Posts == null)
            {
                return NotFound();
            }
            return await _context.Posts.ToListAsync();
        }

        [HttpGet("status/{status}")]
        public async Task<ActionResult<IEnumerable<Post>>> Index(string status)
        {
            if (_context.Posts == null)
            {
                return Problem("Entity set 'PostContext.Posts'  is null.");
            }

            var recieves = from m in _context.Posts
                           select m;

            if (!String.IsNullOrEmpty(status))
            {
                recieves = recieves.Where(x => x.status == status);
            }

            return await recieves.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Post>> CreatePost(PostCreateDTO post)
        {
            if (_context.Posts == null)
            {
                return Problem("Entity set 'PostContext.PostModels'  is null.");
            }
            var newPost = new Post{
                postId = post.postId,
                username = post.username,
                storename = post.storename,
                amount = post.amount,
                location = post.location,
                reserved = post.reserved,
                date = post.date,
                timeCreated = DateTime.Now,
                status= "receiving",
                orderList= ""
            };
            _context.Posts.Add(newPost);
            await _context.SaveChangesAsync();
            return CreatedAtAction("CreatePost", new { id = post.postId }, post);
        }

    }
}