namespace backend.Models
{
    using System.ComponentModel.DataAnnotations;
    public class UserInfoItem
    {
        [Key]
        public string? username {get; set;}
        public string? nickname {get; set;}
        public string? realname {get;set;}
        public string? tel {get; set;}
        public string? password { get; set;}
    }
}