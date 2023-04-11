using Microsoft.EntityFrameworkCore;
namespace backend.Models
{
    public class UserInfoContext : DbContext{
        public UserInfoContext (DbContextOptions<UserInfoContext> options)
        : base (options) { }
        public DbSet<UserInfoItem> UserInfoItems { get; set; } = null!;
    }
}