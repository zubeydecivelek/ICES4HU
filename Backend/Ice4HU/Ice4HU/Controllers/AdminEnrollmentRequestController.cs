
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
    public class AdminEnrollmentRequestController : Controller
    {

        EnrollmentRequestManager em = new EnrollmentRequestManager(new EfEnrollmentRequest());
        UserManager um = new UserManager(new EFUserDal());

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult EnrollmentRequestGetList()
        {
            var enrollmentrequests = em.GetList();

            return View(enrollmentrequests);
        }

        public ActionResult ApproveEnrollmentRequest(int LoginID)
        {
            EnrollmentRequest enrollmentRequest= em.GetByID(LoginID);
            if(enrollmentRequest != null)
            {
                em.DeleteEnrollmentRequest(enrollmentRequest);
                if (enrollmentRequest.UserType == "Student")
                {
                    Student student = new Student();
                    student.LoginID = LoginID;
                    student.Email = enrollmentRequest.Email;
                    student.Surname = enrollmentRequest.Surname;
                    student.Name = enrollmentRequest.Name;
                    student.UserType = enrollmentRequest.UserType;
                    student.Password = enrollmentRequest.Password;
                    um.StudentAdd(student);
                }
                else if(enrollmentRequest.UserType =="Department Manager")
                {
                    
                    DepartmentManager departmentmanager = new DepartmentManager();
                    departmentmanager.LoginID = LoginID;
                    departmentmanager.Email = enrollmentRequest.Email;
                    departmentmanager.Surname = enrollmentRequest.Surname;
                    departmentmanager.Name = enrollmentRequest.Name;
                    departmentmanager.UserType = enrollmentRequest.UserType;
                    departmentmanager.Password = enrollmentRequest.Password;
                    um.DepartmentManagerAdd(departmentmanager);
                }

                return RedirectToAction("EnrollmentRequestGetList");
            }

            return View();
        }

        public ActionResult RejectEnrollmentRequest(int LoginID)
        {
            EnrollmentRequest enrollmentRequest = em.GetByID(LoginID);
            if (enrollmentRequest != null)
            {
                em.DeleteEnrollmentRequest(enrollmentRequest);
                return RedirectToAction("EnrollmentRequestGetList");
            }

            return View();
        }
    }
}