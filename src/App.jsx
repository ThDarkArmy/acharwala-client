import React from "react";
import {Route, Routes, BrowserRouter as Router}  from 'react-router-dom'

import ForgetPassword from "./pages/ForgetPassword";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Landing from "./pages/Landing/Landing";
import Header from "./components/Header";
import OTPVerificationPage from "./pages/OtpVerificationPage";
import ProductPage from "./pages/product/ProductPage";
import ProductListPage from "./pages/product-list/ProductList";
import Cart from "./pages/cart/Cart";


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
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/collections/:category" element={<ProductListPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </div>
     
    </Router>
    <Footer/>
    <ToastContainer />
    </React.Fragment>
  );
}

export default App;
