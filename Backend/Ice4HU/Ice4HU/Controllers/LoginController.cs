
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
using DataAccessLayer.Concrete;
using System.Web.Security;

namespace Ice4HU.Controllers
{
    
    public class LoginController : Controller
    {

        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(User p)
        {
            Context c = new Context();
            var adminuserinfo = c.Users.FirstOrDefault(x => x.Email == p.Email && x.Password == p.Password);
            if (adminuserinfo != null)
            {
                FormsAuthentication.SetAuthCookie(adminuserinfo.Email, false);
                Session["Email"] = adminuserinfo.Email;
                


                if (adminuserinfo.GetType() == typeof(Admin))
                {
                    //Bunu oluşturcam
                    return RedirectToAction("Index", "AdminCourse");
                }
                else if (adminuserinfo.GetType() == typeof(Instructor))
                {
                    //Ayse iremden alcam
                    return RedirectToAction("Index", "Survey");
                }
                else
                {
                    return RedirectToAction("Index");
                }
            }
            else
            {
                return RedirectToAction("Index");
            }
        }

        

    }
}