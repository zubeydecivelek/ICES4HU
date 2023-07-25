using Ice4HU.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ice4HU.Controllers
{
    public class QuestionController : Controller
    {
        // GET: Question
        DbICE4HUEntities4 db = new DbICE4HUEntities4();

        // GET: Survey
        public ActionResult Index()
        {
            var questions = db.Questions_.ToList();
            return View(questions);
        }

        [HttpGet]
        public ActionResult AddNewQuestion()
        {
            return View();
        }
        [HttpPost]
        public ActionResult AddNewQuestion(Questions_ p1)
        {
            
            db.Questions_.Add(p1);
            db.SaveChanges();
            return RedirectToAction("ListSurveyQuestion", new { id = p1.SurveyId});

        }

        public ActionResult DeleteQuestion(List<int> selectedQuestions)
        {
            int surveyId=0;
            foreach (int id in selectedQuestions)
            {
                var question = db.Questions_.Find(id);
                if (question != null)
                {
                    surveyId = question.SurveyId;
                    db.Questions_.Remove(question);
                }
            }
            db.SaveChanges();
            return RedirectToAction("ListSurveyQuestion", new { id = surveyId });
        }


        public ActionResult ListSurveyQuestion(int? id)
        {
            List<Questions_> selected = new List<Questions_>();
            if (id != null)
            {
               
                foreach (Questions_ q in db.Questions_)
                {
                    if (q.SurveyId == id)
                    {
                        selected.Add(q);
                    }
                }
                
            }
            return View(selected);
        }
        //hatali
        public ActionResult CourseSurvey(string CourseCode)
        {
            List<Survey_> selected = new List<Survey_>();
            
            foreach (Survey_ s in db.Survey_.ToList())
            {
                if (s.CourseCode == CourseCode)
                {
                    selected.Add(s);
                }
            }
            selected = db.Survey_.ToList();
            return View(selected);
        }
        [HttpGet]
        public ActionResult FillSurveys(int? surveyid)
        {
            List<Questions_> selected = new List<Questions_>();
            foreach (Questions_ q in db.Questions_)
            {
                if (q.SurveyId == surveyid)
                {
                    selected.Add(q);
                }
            }
            selected = db.Questions_.ToList();
            return View(selected);
        }
        [HttpPost]
        public ActionResult FillSurveys( List<Questions_> questions)
        {
            
            
            for (int i = 0; i < questions.Count; i++)
            {
                int answer = questions[i].Answer;

                questions[i].QuestionPoint += answer;

            }

            return RedirectToAction("CourseSurvey");
        }

    }
}