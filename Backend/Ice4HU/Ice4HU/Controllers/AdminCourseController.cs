
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
using System.Security.Cryptography.X509Certificates;

namespace Ice4HU.Controllers
{
    public class AdminCourseController : Controller
    {

        CourseManager cm = new CourseManager(new EfCourseDal());

        [Authorize]
        public ActionResult Index()
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
                return RedirectToAction("Index");
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

        public ActionResult DeleteCourse(List<string> selectedCourses)
        {
            foreach (string courseCode in selectedCourses)
            {

                var course = cm.GetByID(courseCode);

                if (course != null)
                {
                    cm.CourseRemove(course);
                }
            }

            return RedirectToAction("Index");
        }

        [HttpGet]
        public ActionResult EditCourse(String CourseCode)
        {
            var coursevalue = cm.GetByID(CourseCode);
            return View(coursevalue);
        }

        [HttpPost]
        public ActionResult EditCourse(Course course)
        {
            CourseValidator validator = new CourseValidator();
            ValidationResult results = validator.Validate(course);
            if (results.IsValid)
            {
                cm.CourseUpdate(course); ;
                return RedirectToAction("Index");
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


    }
}