namespace backend.Models

{    
    using System.ComponentModel.DataAnnotations;
    public class StorePostItem
    {   
        [Key]
        public long PostId { get; set; } //this is the key
        public long StoreId { get; set;}
        public string? StoreName { get; set; }
        public long UserId { get; set; }
        public long  Username { get; set;}
        public string? Date { get; set; }
        public string? PickupPlace { get; set; }
        public DateTime EndDate { get; set; }
        public int MaxOrder { get; set; }
        public bool IsOpen { get; set; }
    }
}