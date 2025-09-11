import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Building1 from "../assets/building1.png";
import axios from "../config/AxiosInterceptor";
import { toast } from "react-toastify";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    userAgreement: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.userAgreement) {
      alert("Please accept the User Agreement.");
      valid = false;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0 && valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("/users/signup", formData);
        navigate("/otp-verification", { state: { email: formData.email } });
      } catch (error) {
        toast.error(error.response.data.errorMessage)
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Form Section */}
      <div className="md:w-1/2 flex justify-center items-center bg-white p-6">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2">Welcome to Acharwala</h2>
          <p className="text-gray-600 mb-4">Please enter your details</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border rounded px-3 py-2"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full border rounded px-3 py-2"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border rounded px-3 py-2"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full border rounded px-3 py-2"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Select Role</option>
              <option value="ADMIN">Admin</option>
              <option value="SERVICE">Service</option>
            </select>

            <label className="flex items-center">
              <input
                type="checkbox"
                name="userAgreement"
                checked={formData.userAgreement}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              I agree to the User Agreement
            </label>

            <details className="text-sm text-blue-600">
              <summary className="cursor-pointer">View Terms & Conditions</summary>
              <div className="text-gray-600 mt-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Joining bonus of ₹5000 on first home purchase.</li>
                  <li>Earn reward points by scanning real bills.</li>
                  <li>No misuse or fake transactions allowed.</li>
                  <li>First-Buy may verify bills and cancel fraud points.</li>
                  <li>Points redeemable only for listed properties.</li>
                  <li>No home loan guarantee, only partnered assistance.</li>
                </ul>
              </div>
            </details>

            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              Sign Up
            </button>

            <p className="text-center text-sm mt-3 text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-blue-500">Login</a>
            </p>
          </form>
        </div>
      </div>

      {/* Right Image Section */}
      <div
        className="hidden md:flex md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${Building1})` }}
      >
        <div className="flex flex-col justify-end w-full h-full p-10">
          <h3 className="text-white text-3xl font-bold mb-3">
            Your First Step to buy delicious achar here!
          </h3>
          <div className="bg-white bg-opacity-70 rounded-lg p-4 max-w-md">
            <p className="text-black text-sm">
              Sign up for free, unlock all features and earn bonus rewards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
