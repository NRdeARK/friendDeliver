using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class OrderUpdateStatus
    {
        [Key]
        public long orderId;
        public string? status;
    }
}