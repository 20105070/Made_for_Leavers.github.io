/*University.cs - Daniel Syrén (20105070)*/
using System.ComponentModel.DataAnnotations;

namespace Made_for_LeaversApi.Entities
{
    public class University
    {
        [Key]
        public int Id { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string WebPage { get; set; }
    }

}
