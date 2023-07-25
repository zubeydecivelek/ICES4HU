
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
    [AllowAnonymous]
    public class UserEnrollmentRequestController : Controller
    {

        EnrollmentRequestManager em = new EnrollmentRequestManager(new EfEnrollmentRequest());


        public ActionResult Index() { 
            return View(); 
        }

        [HttpGet]
        public ActionResult EnrollmentRequestSend()
        {
            return View();
        }

        [HttpPost]
        public ActionResult EnrollmentRequestSend(EnrollmentRequest enrollmentRequest)
        {   
             em.SendEnrollmentRequest(enrollmentRequest);
             return RedirectToAction("Index","Login");
        }


    }
}