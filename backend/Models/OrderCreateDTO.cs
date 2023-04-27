namespace backend.Models
{
    using System.ComponentModel.DataAnnotations;
    public class OrderCreateDTO
    {
        [Key]
        public long orderId { get; set; }
        public string? username { get; set; }
        public string? nickname { get; set; }
        public string? realname { get; set; }
        public string? menuname { get; set; }  
        public int? amount { get; set; }
    }
}