import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Logo from '../Images/Logo.png'
import '../StyleSheets/Dashboard.css'
import DashboardFooter from './DashboardFooter';

function DocotorDashboard() {
  return (
  <>
    <div> 
      {/* navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{ backgroundColor: "#e3f2fd" }}>
        <div className="container-fluid">
          <Link className="navbar-brand navbar-light bg-light text-primary" to="/doctordashboard">
            <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
          </Link>
          <Link className="navbar-brand text-primary" to="/doctordashboard">Dashboard  </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              {/* <li className="nav-item mx-2" >
                <Link className="nav-link active text-primary" aria-current="page" to="/doctordashboard/addfeedback">Add FeedBack</Link>
              </li> */}
              <li className="nav-item mx-2">
                <Link className="nav-link text-primary" to="/doctordashboard/appointmentlist"> Appointment List</Link>
              </li>
            </ul>
            <ul className="navbar-nav topnav-right">
            <li className="nav-item">
                <Link className="nav-link text-primary" to="/doctordashboard/changepassword">ChangePassword</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-danger" to="/"> LogOut</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Dashboard Contant */}
     
        <div className="bg-white" >
          <div className="container-fluid bg-primary py-5 "id='DashBoard'>
            <div className="container py-5">
              <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                  <h5 className="d-inline-block text-uppercase "> This is Doctor Dashboard </h5>
                  <h1 className="display-1 mb-md-4">Welcome To Clinic Management !</h1>
                  <p className="display-6 mb-md-4">To feedback and appointment selection</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
    <div>  <DashboardFooter/>
    </div> 
        </>

   )
}


export default DocotorDashboard

