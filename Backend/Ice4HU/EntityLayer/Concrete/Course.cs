using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class Course
    {
        [Key]
        public String CourseCode { get; set; }
        [StringLength(500)]
        public String CourseName { get; set; }
        
        public int Credit { get; set; }
        [StringLength(500)]
        public string CourseType { get; set; }
    }
}
