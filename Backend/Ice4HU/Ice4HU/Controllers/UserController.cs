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

    public class UserController : Controller
    {

        UserManager um = new UserManager(new EFUserDal());

        public ActionResult Index()
        {
            var uservalues = um.GetList();

            return View(uservalues);
        }

        [HttpGet]
        public ActionResult AddInstructor()
        {
            return View();
        }


        [HttpPost]
        public ActionResult AddInstructor(Instructor instructor)
        {
            UserValidator validator = new UserValidator();
            ValidationResult results = validator.Validate(instructor);
            if (results.IsValid)
            {
                instructor.UserType = "Instructor";
                um.InstructorAdd(instructor);
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

        public ActionResult DeleteUser(int LoginID)
        {
            var user = um.GetByID(LoginID);
        
           um.UserRemove(user);

            return RedirectToAction("Index");
        }

        [HttpGet]
        public ActionResult EditUser(int? LoginID)
        {
            if (LoginID == null)
            {
                return RedirectToAction("Index");
            }

            var uservalue = um.GetByID(LoginID.Value);
            return View(uservalue);
        }

        [HttpPost]
        public ActionResult EditUser(User user)
        {
            UserValidator validator = new UserValidator();
            ValidationResult results = validator.Validate(user);
            if (results.IsValid)
            {
                um.UserUpdate(user);
                return RedirectToAction("Index");
            }
            else
            {
                foreach (var item in results.Errors)
                {
                    ModelState.AddModelError(item.PropertyName, item.ErrorMessage);
                }
            }
            return RedirectToAction("Index");
        }
    }
}