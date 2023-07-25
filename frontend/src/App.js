// App.js
import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import ChangePersonalInfo from './components/ChangePersonalInfo';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminMenu from './components/admin-menu.js'
import ManageCourse from './components/manage-course.js';
import UserList from './components/user-list.js'
import CreateSurvey from './components/CreateSurvey';
import SurveyPage from "./components/SurveyPage";
import EditSurvey from "./components/EditSurvey";
import { courses, questionBank, surveys } from './utils/data';
import HomePage from './components/HomePage';

const App = () => {
  const questions =[];
  return (
   <Router>
    <Routes>
      <Route path ="/" element = {<Login/>}/>
      <Route path ='/register' element = {<Register/>}/>
      <Route path ='/changepersonalinfo' element = {<ChangePersonalInfo/>}/>
      <Route path ='/adminmenu' element = {<AdminMenu/>}/>
      <Route path ='/user-list' element = {<UserList/>}/>
      <Route path ='/homepage' element = {<HomePage/>}/>
      <Route path ='/manage-course' element = {<ManageCourse/>}/>
      <Route path="create-survey" element={<CreateSurvey questionBank={questionBank} questions={questions}  />} />
      <Route path="my-surveys" element={<SurveyPage surveys={surveys} />} />
      <Route path="edit-survey/:code" element={<EditSurvey surveyID={surveys} />} />


    </Routes>
   </Router>

  );
};

export default App;
