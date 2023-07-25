using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer
{
    public interface ICourseService
    { 
        List<Course> GetList();
        void CourseAdd(Course course);

        Course GetByID(String id);
        void CourseRemove(Course course);
        void CourseUpdate(Course course);
    }
}
