using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Abstract
{
    public interface IUserService
    {
        List<User> GetList();
        void InstructorAdd(Instructor instructor);

        User GetByID(int LoginID);
        void UserRemove(User user);
        void UserUpdate(User user);

        void StudentAdd(Student student);

        void DepartmentManagerAdd(DepartmentManager departmentManager);
    }
}
