//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Ice4HU.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Questions_
    {
        public int QuestionId { get; set; }
        public Nullable<int> QuestionPoint { get; set; }
        public string QuestionText { get; set; }
        public int SurveyId { get; set; }
        public int Answer { get; set; }
        public virtual Survey_ Survey_ { get; set; }
    }
}