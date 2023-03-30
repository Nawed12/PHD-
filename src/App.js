import './App2.css';
import './fonts/font.ttf';
import './fonts/monotype_font.ttf';
import './fonts/Rakkas.ttf';
// import $ from 'jquery'
import React from 'react';
import Front_center from  './Component/Home/Front_center'
import About from  './Component/Home/About'
import News from  './Component/Home/News'
// import Student from './Component/Placement'
import Placement from './Component/Home/Placement'
import Gallery from './Component/Home/Gallery'
import Contact from  './Component/Home/Contact'
import registration from './Component/Home/registration';
import FacultyLogin from './Component/Login/FacultyLogin';
import AdminLogin from './Component/Login/AdminLogin';
import StudentLogin from './Component/Login/StudentLogin';

import AdminAddAdmin from './Pages/Admin/AdminAddAdmin';
import AdminGetAllFaculty from './Pages/Admin/AdminGetAllFaculty'
import AdminGetAllStudent from './Pages/Admin/AdminGetAllStudents'
import AdminGetAllSubject from './Pages/Admin/AdminGetAllSubjects'
import AdminHome from './Pages/Admin/AdminHome'

import AdminAddFaculty from './Pages/AdminAddFaculty';
import AdminAddStudent from './Pages/AdminAddStudent';
import AdminAddSubject from './Pages/AdminAddSubject';


import {NavLink , Route, Switch } from 'react-router-dom';
// import { render } from '@testing-library/react';
 

function App() {

  return (
   <div>
        <main>
            <Switch>
                <Route path="/" component={Front_center} exact/>
                <Route path="/about" component={About}/>
                <Route path="/news" component={News}/>
                <Route path="/placement" component={Placement}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/contact" component={Contact}/>
                 <Route path="/registraion"component={registration}/>
                <Route path="/FacultyLogin" component={FacultyLogin}/>
                <Route path="/AdminLogin" component={AdminLogin}/>
                <Route path="/StudentLogin" component={StudentLogin}/>
                <Route exact path='/admin' component={AdminHome} />
          <Route exact path="/admin/addStudent" component={AdminAddStudent} />
          <Route exact path="/admin/addFaculty" component={AdminAddFaculty} />
          <Route exact path="/admin/addSubject" component={AdminAddSubject} />
          <Route exact path="/admin/addAdmin" component={AdminAddAdmin} />
          <Route exact path="/admin/allFaculties" component={AdminGetAllFaculty} />
          <Route exact path="/admin/allStudents" component={AdminGetAllStudent} />
          <Route exact path="/admin/allSubject" component={AdminGetAllSubject} />

            </Switch>
        </main>
  <div>
  
  </div>
    </div>
  );
}






export default App;