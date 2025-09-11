import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from '../config/AxiosInterceptor';
import Building2 from "../assets/building2.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post('/users/login', formData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('name', response.data.user.name);
      localStorage.setItem('role', response.data.user.role);
      toast.success('Login successful');
      navigate('/');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'An error occurred during login';
      toast.error(errorMessage);
      console.error('Login error:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Form Section */}
      <div className="md:w-2/3 flex justify-center items-center bg-white p-6">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
          <p className="text-gray-600 mb-4">Please enter your details</p>

          <button className="w-full border border-gray-300 text-black py-2 mb-4 flex justify-center items-center gap-2">
            <img
              src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png"
              alt="Google Logo"
              className="w-5"
            />
            Sign in with Google
          </button>

          <div className="text-center text-sm my-3 text-gray-500">— or —</div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border rounded px-3 py-2"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full border rounded px-3 py-2"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                Remember for 30 days
              </label>
              <a href="/reset-password" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              Sign in
            </button>

            <p className="text-center text-sm mt-3 text-gray-600">
              Don’t have an account?{' '}
              <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
            </p>
          </form>
        </div>
      </div>

      {/* Right Image Section */}
      <div
        className="hidden md:flex md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${Building2})` }}
      >
        <div className="flex flex-col justify-end w-full h-full p-10">
          <h3 className="text-white text-3xl font-bold mb-3">
            Your First Step to buy delicious achar here!
          </h3>
          <div className="bg-white bg-opacity-80 rounded-lg p-4 max-w-md">
            <p className="text-black text-sm">
              Sign up for free, unlock all features and earn bonus rewards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;