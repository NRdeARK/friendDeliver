namespace backend.Models
{
    using System.ComponentModel.DataAnnotations;
    public class OrderUpdateStatus

    {
        [Key]
        public long orderId;
        public string? status;
    }
}