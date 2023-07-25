using BusinessLayer.Abstract;
using DataAccessLayer.Abstract;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Concrete
{
    public class UserManager : IUserService
    {
        IUserDal _userDal;

        public UserManager(IUserDal userDal)
        {
            _userDal = userDal;
        }

        public User GetByID(int LoginID)
        {
            return _userDal.Get(x => x.LoginID == LoginID);
        }

        public List<User> GetList()
        {
            return _userDal.List();
        }

        public void InstructorAdd(Instructor instructor)
        {
            _userDal.Insert(instructor);
        }

        public void UserRemove(User user)
        {
            _userDal.Delete(user);
        }

        public void UserUpdate(User user)
        {
            _userDal.Update(user);
        }

        public void StudentAdd(Student student)
        {
            _userDal.Insert(student);
        }

        public void DepartmentManagerAdd(DepartmentManager departmentManager)
        {
            _userDal.Insert(departmentManager);
        }
    }
}
