namespace backend.Models
{
    using System.ComponentModel.DataAnnotations;
    public class UserTokenDTO
    {
        [Key]
        public string? username {get; set;}
        public string? accessToken { get; set;}
    }
}