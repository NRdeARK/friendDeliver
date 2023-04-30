namespace backend.Models
{
    using System.ComponentModel.DataAnnotations;
    public class OrderUpdateLogic
    {
        [Key]
        public long orderId { get; set; }
        public string? logic { get; set; }
    }
}