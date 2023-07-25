using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concreate
{
    public class User
    {
        [Key]
        public int LoginID { get; set; }

        [StringLength(50)]
        public String Name { get; set; }

        [StringLength(20)]
        public String Surname { get; set; }

        [StringLength(20)]
        public String Email { get; set; }

        [StringLength(20)]
        public String Password { get; set; }
    }
}
