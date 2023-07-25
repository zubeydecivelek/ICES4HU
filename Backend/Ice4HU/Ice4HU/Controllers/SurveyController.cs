using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Ice4HU.Models;

namespace Ice4HU.Controllers
{
    public class SurveyController : Controller
    {
        DbICE4HUEntities4 db = new DbICE4HUEntities4();

        // GET: Survey
        public ActionResult Index()
        {
            var surveys = db.Survey_.ToList();
            return View(surveys);
        }

        [HttpGet]
        public ActionResult AddNewSurvey()
        {
            return View();
        }
        [HttpPost]
        public ActionResult AddNewSurvey(Survey_ p1)
        {
            db.Survey_.Add(p1);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        public ActionResult DeleteSurvey(List<int> selectedSurveys)
        {
            foreach (int id in selectedSurveys)
            {
                var survey = db.Survey_.Find(id);
                if (survey != null)
                {
                    db.Survey_.Remove(survey);
                }                  
            }
            db.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}