namespace backend.Models
{
    using System.ComponentModel.DataAnnotations;
    public class PostItem
    {
        public string? username { get; set; }
        public string? storename { get; set; }
        public int? amount { get; set; }
        public string? location { get; set; }
        public string? reserved { get; set; }
        public DateTime? date { get; set; }
        public string? status { get; set; }
        public string? orderList { get; set; }
        [Key]
        public DateTime? timeCreated { get; set; }
    }
}