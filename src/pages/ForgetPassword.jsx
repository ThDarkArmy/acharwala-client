import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../config/AxiosInterceptor';
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleResetPassword = async () => {
    const data = { email, password };

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    try {
      const response = await axios.put("/users/reset-password", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        toast.success("Password reset successful");
        navigate("/login");
      } else {
        throw new Error("Error occurred");
      }
    } catch (err) {
      const errorMsg = err.response?.data?.errorMessage || "Something went wrong";
      toast.error(errorMsg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-semibold mb-6 text-center">Reset Password</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <button
            onClick={handleResetPassword}
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 mt-4"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
