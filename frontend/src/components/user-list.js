import React, { useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import '../styled/user-list.css'

/**/

const [items] = [
  { id: 1, name: 'Ayşe İrem', role: 'Instructor', id: 1234, password: 'selam' },
  { id: 2, name: 'Ayça Akyol', role: 'Department Manager', id: 1235, password: 'selam' },
  { id: 3, name: 'Şura Nur Ertürkmen', role: 'Instructor', id: 1236, password: 'selam' },
  { id: 4, name: 'Zübeyde Civelek', role: 'Student', id: 1237, password: 'selam' },
];
/** */




function PopUp(props) {
  return props.trigger ? (
    <div className='sure'>
      <div className='sure-inner'>
        {props.children}
      </div>
    </div>
  ) : null;
}

function Table() {
  const [showAddInstructorModal, setShowAddInstructorModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);

  const handleAddNewInstructor = () => {
    setShowAddInstructorModal(true);
  }
  
  const handleAddInstructor = () => {

    const userName = document.getElementById('userName').value;
    const role = 'Instructor'
    const id = parseInt(document.getElementById('id').value);
    const password = document.getElementById('password').value;

    if (!userName || !role || !id || !password) {
      alert("Please fill in all fields.");
      return;
    }
  
    const newCourse = {
      id: items.length + 1,
      name: userName,
      role: role,
      id: id,
      password: password
    };
  
    setItems([...items, newCourse]);
    setShowAddInstructorModal(false);
  }

  const handleDeleteRow = (itemId) => {
    
    setDeleteItemId(itemId);
    setShowConfirmModal(true);
  };

  const handleDeleteConfirmed = () => {
    // Silme işlemini gerçekleştir ve pop-up'ı kapat
    setItems((prevItems) => prevItems.filter((item) => item.id !== deleteItemId));
    setShowConfirmModal(false);
  };

  const handleRoleChange = (itemId, selectedRole) => {
    // Rol değişikliğini gerçekleştir
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, role: selectedRole };
        }
        return item;
      });
      return updatedItems;
    });
  };

  const [items, setItems] = useState([
    { id: 1, name: 'Ayşe İrem', role: 'Instructor', id: 1234, password: 'selam' },
    { id: 2, name: 'Ayça Akyol', role: 'Department Manager', id: 1235, password: 'selam' },
    { id: 3, name: 'Şura Nur Ertürkmen', role: 'Instructor', id: 1236, password: 'selam' },
    { id: 4, name: 'Zübeyde Civelek', role: 'Student', id: 1237, password: 'selam' },
  ]);
  
  return (
    <div className='table-wrapper'>
      <table className='table'>
        <thead className='table-header'>
          <tr>
            <th className='table-header-value'>User Name</th>
            <th className='table-header-value'>Role</th>
            <th className='table-header-value'>ID</th>
            <th className='table-header-value'>Password</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr className='table-row' key={item.id}>
              <td className='table-cell'>{item.name}</td>
              <td className='table-cell-role'>{item.role}</td>
              <td className='table-cell'>{item.id}</td>
              <td className='table-cell'>*******</td>
              <td>
                <div className='trashButton' onClick={() => handleDeleteRow(item.id)}>
                  <BsTrash />
                </div>
              </td>
              <td className='table-cell'>
                <select
                  id='changeRole'
                  defaultValue='Change Role'
                  onChange={e => handleRoleChange(item.id, e.target.value)}
                >
                  <option disabled>Change Role</option>
                  <option value='Student'>Student</option>
                  <option value='Teaching Assistant'>Teaching Assistant</option>
                  <option value='Instructor'>Instructor</option>
                  <option value='Stakeholder'>Stakeholder</option>
                  <option value='Team Member'>Team Member</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='table-buttons'>
        <button className='add-instructor' onClick={handleAddNewInstructor}>Add Instructor</button>
      </div>
      
      <PopUp trigger={showAddInstructorModal} onClose={() => setShowAddInstructorModal(false)}>
        <div className='courseInfo'>
          <input type='text' placeholder='User Name' id='userName' />
          <input type='text' placeholder='ID' id='id' />
          <input type='text' placeholder='Password' id='password' />
        </div>
        <div className='buttonConfirm'>
          <button className='addButtons' onClick={handleAddInstructor}>Confirm</button>
          <button className='addButtonsCancel' onClick={() => setShowAddInstructorModal(false)}>Cancel</button>
        </div>
      </PopUp>

      <PopUp trigger={showConfirmModal} onClose={() => setShowConfirmModal(false)}>
        <div className='deleteConfirm'>
          <p className='pAre-you-sure'>Are you sure you want to delete this item?</p>
          <div className='buttonConfirm'>
            <button className='deleteButton' onClick={handleDeleteConfirmed}>Delete</button>
            <button className='cancel-button' onClick={() => setShowConfirmModal(false)}>Cancel</button>
          </div>
        </div>
      </PopUp>
    </div>
  );
}

function Table2() {
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleApproveRequest = () => {
    setShowAddCourseModal(true);
  }

  const handleRejectRequest = () => {
    setShowConfirmModal(true);
  }

  const handleApprove = () => {
    
    // const username = document.getElementById('userName').value;
    // const role = document.getElementById('roleHead').value;
    // const emailElement = document.getElementById('email');
    // const id = emailElement ? parseInt(emailElement.value.split('@')[0]) : null;
    // const password = document.getElementById('password').value;

    const username = 'User1';
    const role = 'Student';
    const id = 132; 
    const password = '123';

    setShowAddCourseModal(false);
  }

  const handleConfirmDelete = () => {
    const updatedItems = items.filter(item => !selectedItems.includes(item.id));
    setItems(updatedItems);
    setSelectedItems([]);
    setShowConfirmModal(false);
  }

  const handleToggleCheckbox = (itemId) => {
    const selected = [...selectedItems];
    const index = selected.indexOf(itemId);

    if (index === -1) {
      selected.push(itemId);
    } else {
      selected.splice(index, 1);
    }

    setSelectedItems(selected);
  }

  const [items, setItems] = useState([
    { id: 1, name: 'User1', role: 'Student', email: '1234@hacettepe.edu.tr', password: 'selam' },
    { id: 2, name: 'User2', role: 'Department Manager', email: '3456@hacettepe.edu.tr', password: 'selam' },
    { id: 3, name: 'User3', role: 'Student', email: '4642@hacettepe.edu.tr', password: 'selam' },
  ]);

  return (
    <div className='table-wrapper'>
      <table className='table'>
        <thead className='table-header'>
          <tr>
            <th></th>
            <th className='table-header-value' >User Name</th>
            <th className='table-header-value' >Role</th>
            <th className='table-header-email' >E-Mail</th>
            <th className='table-header-value' >Password</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr className='table-row' key={item.id}>
              <td className='table-cell'>
                <input
                  type='checkbox'
                  className='custom-checkbox-user-list'
                  onChange={() => handleToggleCheckbox(item.id)}
                />
              </td>
              <td className='table-cell' id='userName'>{item.name}</td>
              <td className='table-cell-role'>{item.role}</td>
              <td className='table-cell'>{item.email}</td>
              <td className='table-cell'>*******</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='table-buttons-app-rej'>
        <button className='approve-course' onClick={handleApproveRequest}>Approve Selected Requests</button>
        <button className='reject-course' onClick={handleRejectRequest}>Reject Selected Requests</button>
      </div>

      <PopUp trigger={showAddCourseModal} onClose={() => setShowAddCourseModal(false)}>
        <div className='buttonConfirm'>
          <button className='addButtons' onClick={handleApprove}>Confirm</button>
          <button className='addButtonsCancel' onClick={() => setShowAddCourseModal(false)}>Cancel</button>
        </div>
      </PopUp>

      <PopUp trigger={showConfirmModal} onClose={() => setShowConfirmModal(false)}>
        <div className='confirmMessage'>
          <div className='buttonConfirm'>
            <button className='addButtons' onClick={handleConfirmDelete}>Confirm</button>
            <button className='addButtonsCancel' onClick={() => setShowConfirmModal(false)}>Cancel</button>
          </div>
        </div>
      </PopUp>
    </div>
  );
}


function App() {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  return (
    <div className='App'>
      <Table />
      <div className='separator'></div>
      <Table2 />
    </div>
  );
}

export default App;