using BusinessLayer.Abstract;
using DataAccessLayer.Abstract;
using DataAccessLayer.EntityFramework;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Concrete
{
    public class EnrollmentRequestManager : IEnrollmentRequest
    {
        IEnrollmentRequestDal _enrollmentRequestDal;

        public EnrollmentRequestManager(IEnrollmentRequestDal enrollmentRequestDal)
        {
            _enrollmentRequestDal = enrollmentRequestDal;
        }

        public void SendEnrollmentRequest(EnrollmentRequest enrollmentrequest)
        {
            _enrollmentRequestDal.Insert(enrollmentrequest);
        }

        public void DeleteEnrollmentRequest(EnrollmentRequest enrollmentrequest)
        {
            _enrollmentRequestDal.Delete(enrollmentrequest);
        }
        public EnrollmentRequest GetByID(int LoginID)
        {
            return _enrollmentRequestDal.Get(x => x.LoginID == LoginID);
        }

        public List<EnrollmentRequest> GetList()
        {
            return _enrollmentRequestDal.List();
        }

    }
}
