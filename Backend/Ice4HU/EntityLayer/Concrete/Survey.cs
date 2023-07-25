using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class Survey
    {
        [Key]
        public int SurveyID { get; set; }
        public ICollection<Question> Questions { get; set; }


    }
}
