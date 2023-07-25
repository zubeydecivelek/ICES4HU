
using BusinessLayer.Concrete;
using BusinessLayer.ValidationRules;
using DataAccessLayer.EntityFramework;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using FluentValidation.Results;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ice4HU.Controllers
{
    public class CourseController : Controller
    {

        CourseManager cm = new CourseManager(new EfCourseDal());

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetCourseList()
        {
            var coursevalues = cm.GetList();
            return View(coursevalues);
        }

        [HttpGet]
        public ActionResult AddCourse()
        {
            return View();
        }

        [HttpPost]
        public ActionResult AddCourse(Course course)
        {
            CourseValidator validator = new CourseValidator();
            ValidationResult results = validator.Validate(course);
            if (results.IsValid)
            {
                cm.CourseAdd(course);
                return RedirectToAction("GetCourseList");
            }
            else
            {
                foreach (var item in results.Errors)
                {
                    ModelState.AddModelError(item.PropertyName, item.ErrorMessage);
                }
            }
            return View();
        }


        [HttpGet]
        public ActionResult UpdateCourse(int? CourseCode)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public ActionResult UpdateCourse(Course course)
        {
            throw new NotImplementedException();
        }


        public ActionResult DeleteCourse(int? CourseCode)
        {
            throw new NotImplementedException();
        }
    }
}