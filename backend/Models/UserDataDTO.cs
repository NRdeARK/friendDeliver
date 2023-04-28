namespace backend.Models
{
    using System.ComponentModel.DataAnnotations;
    public class UserDataDTO
    {
        [Key]
        public string? username { get; set; } = string.Empty;
        public string? nickname { get; set; } = string.Empty;
        public string? realname { get; set; } = string.Empty;
        public string? tel { get; set; } = string.Empty;

    }
}