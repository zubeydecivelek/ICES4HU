using DataAccessLayer.Abstract;
using DataAccessLayer.Concrete.Repositories;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace BusinessLayer.Concrete
{
    public class CourseManager:ICourseService
    {

        ICourseDal _courseDal;

        public CourseManager(ICourseDal courseDal)
        {
            _courseDal = courseDal;
        }

        public List<Course> GetList()
        {
            return _courseDal.List();
        }

        public Course GetByID(String id)
        {
            return _courseDal.Get(x=>x.CourseCode==id);
        }

        public void CourseAdd(Course course)
        {
            _courseDal.Insert(course);
        }

        public void CourseRemove(Course course)
        {
            _courseDal.Delete(course);
        }

        public void CourseUpdate(Course course)
        {
            _courseDal.Update(course);
        }
    }
}
