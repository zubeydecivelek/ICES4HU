import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faL } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import '../styled/manage-course.css';

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
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);

  const handleAddNewCourse = () => {
    setShowAddCourseModal(true);
  }
  
  const handleAddCourse = () => {
    const courseName = document.getElementById('courseName').value;
    const courseCode = document.getElementById('courseCode').value;
    const credit = parseInt(document.getElementById('credit').value);
    const courseType = document.getElementById('courseType').value;
  
    if (!courseName || !courseCode || !credit || !courseType) {
      alert("Please fill in all fields.");
      return;
    }
  
    const newCourse = {
      id: items.length + 1,
      name: courseName,
      code: courseCode,
      credit: credit,
      type: courseType
    };

    fetch("/ICES4HU/Register", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCourse),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success", data.success);
        alert(data.Message);
        window.location.href = "/ICES4HU/Index";
      })
      .catch(error => {
        console.log("Error", error);
      });
  
    setItems([...items, newCourse]);
    setShowAddCourseModal(false);
  }
  
  const [items, setItems] = React.useState([
    {id: 1, name: 'Mathematics', code: 'MATH101', credit: 3, type: 'Elective'},
    {id: 2, name: 'Physics', code: 'PHYS101', credit: 3, type: 'Mandatory'},
    {id: 3, name: 'Computer Science', code: 'CS101', credit: 4, type: 'Elective'},
    {id: 4, name: 'Biology', code: 'BIO101', credit: 2, type: 'Mandatory'}
  ]);

  const handleRowSelection = (e, id) => {
    if (e.target.checked) {
      setSelectedRows([...selectedRows, id]);
    } else {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    }
  }

  const handleDelete = () => {
    if (selectedRows.length === 0) {
      alert("Please select at least one row to delete.");
      return;
    }

    setShowConfirmModal(true);
  }

  const deleteItems = () => {
    setItems(items.filter(item => !selectedRows.includes(item.id)));
    setSelectedRows([]);
    setShowConfirmModal(false);
  }

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Course Name</th>
            <th>Course Code</th>
            <th>Credit</th>
            <th>Course Type</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr className="table-row" key={item.id}>
              <td className="table-cell">
              <input type="checkbox" onChange={(e) => handleRowSelection(e, item.id)} 
                className="custom-checkbox"/>
                
              </td>
              <td className="table-cell">{item.name}</td>
              <td className="table-cell">{item.code}</td>
              <td className="table-cell">{item.credit}</td>
              <td className="table-cell">{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-buttons">
        <button className="delete-button" onClick={handleDelete}>Delete Selected Course</button>
        <button className="add-button" onClick={handleAddNewCourse}>Add New Course</button>

        <PopUp trigger={showConfirmModal} onClose={() => setShowConfirmModal(false)}>
          <p style={{color: 'black'}}>Are you sure you want to delete?</p>
          <div>
            <button className='buttonInPopUp' onClick={deleteItems}>Yes</button>
            <button className='buttonInPopUp' onClick={() => setShowConfirmModal(false)}>No</button>
          </div>
        </PopUp>


        <PopUp trigger={showAddCourseModal} onClose={() => setShowAddCourseModal(false)}>
        <div className='courseInfo'>
          <input type='text' placeholder='Course Name' id='courseName'></input>
          <input type='text' placeholder='Course Code' id='courseCode'></input>
          <input type='text' placeholder='Credit' id='credit'></input>
          <label htmlFor='courseType' style={{color:'black'}}>Course Type:</label>
          <select id='courseType'>
            <option value='Mandatory'>Mandatory</option>
            <option value='Elective'>Elective</option>
          </select>
        </div>
        <div className='buttonConfirm'>
          <button className='addButtons' onClick={handleAddCourse}>Confirm</button>
          <button className='addButtonsCancel' onClick={()=> setShowAddCourseModal(false)}>Cancel</button>
        </div>
      </PopUp>

      </div>
    </div>
  );
}


function App() {
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);

  return (
    <div className='App'>
      
      <Table />

    </div>
  );
}

export default App;