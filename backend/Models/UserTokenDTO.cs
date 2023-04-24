namespace backend.Models
{
    using System.ComponentModel.DataAnnotations;
    public class UserTokenDTO
    {
        [Key]
        public string? username {get; set;}
        public string? nickname {get; set;}
        public string? realname {get; set;}
        public string? accessToken { get; set;}
    }
}