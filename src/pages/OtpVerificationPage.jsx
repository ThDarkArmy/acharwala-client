import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from '../config/AxiosInterceptor';
import { toast } from "react-toastify";
import Building3 from "../assets/building3.png";

const OTPVerificationPage = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const handleChange = (e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value) && value.length <= 6) {
      setOtp(value);
      setError("");
    } else {
      setError("OTP must be a 6-digit number.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp) {
      setError("OTP is required.");
    } else if (otp.length !== 4) {
      setError("OTP must be exactly 4 digits.");
    } else {
      try {
        const response = await axios.post('/users/verify-otp', { otp, email });
        toast.success("Email verified successfully. You got 5000 points on signup.");
        navigate("/login");
      } catch (error) {
        toast.error("Invalid or expired OTP");
        console.error('OTP verification error:', error);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Form Section */}
      <div className="md:w-1/2 flex justify-center items-center bg-white p-6">
        <div className="w-full max-w-md min-h-[400px]">
          <h2 className="text-2xl font-bold mb-2">Verify Your Account</h2>
          <p className="text-gray-600 mb-4">
            Enter the 4-digit OTP sent to your email/phone.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="otp"
              value={otp}
              onChange={handleChange}
              placeholder="Enter OTP"
              maxLength={6}
              className="w-full border rounded px-3 py-2"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              Verify OTP
            </button>

            <p className="text-center text-sm mt-3 text-gray-600">
              Didn’t receive the OTP?{' '}
              <a href="/resend-otp" className="text-blue-500 hover:underline">Resend</a>
            </p>
          </form>
        </div>
      </div>

      {/* Right Image Section */}
      <div
        className="hidden md:flex md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${Building3})` }}
      >
        <div className="flex flex-col justify-end w-full h-full p-10">
          <h3 className="text-white text-3xl font-bold mb-3">Secure Your Account</h3>
          <div className="bg-white bg-opacity-80 rounded-lg p-4 max-w-md">
            <p className="text-black text-sm">
              Verify your email or phone number to proceed with secure access to your account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerificationPage;