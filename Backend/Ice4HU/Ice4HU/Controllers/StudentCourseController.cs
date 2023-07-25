using BusinessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using System.Web.UI.WebControls;

namespace Ice4HU.Controllers
{
    public class StudentCourseController:Controller
    {
        CourseManager courseManager = new CourseManager(new EfCourseDal());
        UserManager userManager = new UserManager(new EFUserDal());

        public ActionResult CourseList()
        {
            var courselist =courseManager.GetList();

            return View(courselist);
        }


        public ActionResult StudentCourseRequest(String CourseCode)
        {
            Course course=courseManager.GetByID(CourseCode);
            // Studentın kim olduğunu nerden bilcem bak
            
        }
    }
}
