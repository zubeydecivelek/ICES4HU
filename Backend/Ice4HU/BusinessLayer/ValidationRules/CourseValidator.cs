using EntityLayer.Concrete;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.ValidationRules
{
    public class CourseValidator:AbstractValidator<Course>
    {
       public CourseValidator() 
       {
            RuleFor(x => x.CourseName).NotEmpty().WithMessage("Course Name cannot be empty or null.");
            RuleFor(x => x.CourseCode).NotEmpty().WithMessage("Course Code cannot be empty or null.")
                .Matches(@"^BBM\d{3}$").WithMessage("Invalid Course Code format. It should start with 'BBM' followed by three digits.");
            RuleFor(x => x.Credit).NotEmpty().WithMessage("Credit cannot be empty or null.")
                .GreaterThan(0).WithMessage("Credit should be a positive integer.");
            RuleFor(x => x.CourseType).Must(x => x == "Mandatory" || x == "Elective").NotEmpty().WithMessage("Course Code cannot be empty or null.")
                .WithMessage("Invalid Course Type. It should be either 'Mandatory' or 'Elective'.");
        }
    }
}
