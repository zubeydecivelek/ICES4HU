using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class Question
    {
        [Key]
        public int QuestionId { get; set; }
        public int QuestionPoint { get; set; }
        public int Answer { get; set; }

        public int SurveyId {get; set; }
        public Survey Survey { get; set; }
    }
}
