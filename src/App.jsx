import React from "react";
import {Route, Routes, BrowserRouter as Router}  from 'react-router-dom'

import ForgetPassword from "./pages/ForgetPassword";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Landing from "./pages/Landing";
import Header from "./components/Header";
import OTPVerificationPage from "./pages/OtpVerificationPage";


const App = ()=> {
  return (
    <React.Fragment>
    <Router>
      <Header/>
      <div className="mt-10">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/otp-verification" element={<OTPVerificationPage/>}/>
        <Route path="/reset-password" element={<ForgetPassword/>}/>
      </Routes>
      </div>
     
    </Router>
    <Footer/>
    <ToastContainer />
    </React.Fragment>
  );
}

export default App;
