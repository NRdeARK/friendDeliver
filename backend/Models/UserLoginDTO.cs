namespace backend.Models
{
    using System.ComponentModel.DataAnnotations;
    public class UserLoginDTO
    {
        [Key]
        public string? username {get; set;}
        public string? password { get; set;}
    }
}