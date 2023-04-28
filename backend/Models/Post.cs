namespace backend.Models
{
    using System.ComponentModel.DataAnnotations;
    public class Post
    {
        [Key]
        public long postId { get; set; }
        public string? username { get; set; }
        public string? nickname { get; set; }
        public string? realname { get; set; }
        public string? storename { get; set; }
        public int? amount { get; set; }
        public string? location { get; set; }
        public string? reserved { get; set; }
        public string? date { get; set; }
        public string? status { get; set; }
        public string? orderList { get; set; }
        public DateTime? timeCreated { get; set; }
    }
}