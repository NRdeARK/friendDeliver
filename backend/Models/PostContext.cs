using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public class PostContext : DbContext
    {
        public PostContext(DbContextOptions<PostContext> options) : base(options) { }
        public DbSet<Post> Posts { get; set; } = null!;
    }
}