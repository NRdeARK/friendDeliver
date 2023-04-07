using Microsoft.EntityFrameworkCore;

namespace backend.Models {
    public class StorePostContext : DbContext {
        public StorePostContext (DbContextOptions<StorePostContext> options) : base (options) { }
        public DbSet<StorePostItem> StorePostItems     { get; set; } = null!;
    }
}