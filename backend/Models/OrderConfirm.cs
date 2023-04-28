using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class OrderConfirm
    {
        [Key]
        public long orderId { get; set; }
        public long postId { get; set; }
        public string? username { get; set; }
        public string? menuname { get; set; }
        public int? amount { get; set; }
        public string? orderStatus { get; set; }
        public DateTime? timeCreated { get; set; }
    }
}
