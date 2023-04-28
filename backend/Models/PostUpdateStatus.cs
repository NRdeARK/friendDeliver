namespace backend.Models
{
    using System.ComponentModel.DataAnnotations;
    public class PostUpdateStatus
    {
        [Key]
        public long postId { get; set; }
        public string? status { get; set; }
    }
}