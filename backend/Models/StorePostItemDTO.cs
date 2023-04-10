namespace backend.Models
{
    public class StorePostItemDTO
    {
        public long StoreId { get; set; }
        public string? StoreName { get; set; }
        public bool IsOpen { get; set; }
    }
}