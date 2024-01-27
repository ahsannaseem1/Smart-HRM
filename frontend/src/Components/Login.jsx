import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginImage from "../images/log1.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import InputField from "./InputField";
import validator from "validator";

const Login = () => {
  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    email: "muhammad@devsinc.com",
    password: "123456",
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [user, setUser] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setApiError("");
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!validator.isEmail(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }
    if (validator.isEmpty(formData.email)) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (validator.isEmpty(formData.password)) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/Login",
        formData
      );

      if (response.data) {
        setUser(response.data);
        console.log(response.data);
        navigate(`/HR/dashboard/id=${response.data.user._id}`, {state: { data:response.data} });
      }
    } catch (error) {
      console.log(error);
      setApiError(error.response.data.error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-4 h-full">
        <ArrowBackIcon className="cursor-pointer absolute top-8 left-8 text-black" />
        <img
          src={LoginImage}
          alt="login"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="bg-bg-color w-full md:w-1/2 p-4 flex items-center justify-center h-full">
        <div className="bg-bg-color p-8 text-center max-w-md mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-white">Login</h2>
          <p className="text-lg text-white mb-6">
            Enter your credentials to login
          </p>

          <form className="grid grid-cols-1 gap-6 mt-20" onSubmit={handleLogin}>
            {/* Email */}
            <div>
              <InputField
                label="Email"
                type="text"
                id="email"
                name="email"
                value={formData.email}
                autoComplete="off"
                onChange={handleInputChange}
              />
              {errors.email && (
                <p className="text-red-800 font-bold text-xs text-left">
                  {errors.email}
                </p>
              )}
            </div>
            {/* Password */}
            <div>
              <InputField
                label="Password"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                autoComplete="off"
                onChange={handleInputChange}
              />
              {errors.password && (
                <p className="text-red-800 font-bold text-xs text-left">
                  {errors.password}
                </p>
              )}
            </div>
            {apiError && (
              <p className="text-red-800 font-bold text-xs text-left w-full">
                {apiError}
              </p>
            )}

            {/* Submit Button */}
            <div className="mb-4">
              <button className="flex justify-center bg-sec-color text-white p-1 rounded cursor-pointer w-full mt-4 active:text-sec-color active:bg-white">
                <LoginOutlinedIcon className="mr-2" />
                <p className="text-lg font-bold">Login</p>
              </button>
            </div>
          </form>

          {/* API Error */}
        </div>
      </div>
    </div>
  );
};

export default Login;
