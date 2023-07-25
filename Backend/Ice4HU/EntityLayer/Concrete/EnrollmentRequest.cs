using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class EnrollmentRequest
    {
        [Key]
        public int LoginID { get; set; }

        public String Name { get; set; }

        public String Surname { get; set; }

        public String Email { get; set; }

        public String Password { get; set; }

        public String UserType { get; set; }
    }
}
