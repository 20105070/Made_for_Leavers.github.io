/*University.cs - Daniel Syrén (20105070)*/
using System.ComponentModel.DataAnnotations;

namespace Made_for_LeaversApi.Entities
{
    public class University
    {
        [Key]
        public string Name { get; set; }
        public string WebPage { get; set; }
    }

}
