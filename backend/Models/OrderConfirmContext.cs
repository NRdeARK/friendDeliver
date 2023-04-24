using Microsoft.EntityFrameworkCore;
namespace backend.Models
{
    public class OrderConfirmContext : DbContext{
        public OrderConfirmContext (DbContextOptions<OrderConfirmContext> options)
        : base (options) { }
        public DbSet<OrderConfirm> OrderConfirms{ get; set; } = null!;
    }
}