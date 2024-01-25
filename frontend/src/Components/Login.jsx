import React, { useState } from "react";
import LoginImage from "../images/log1.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import InputField from "./InputField";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    // Handle form submission, e.g., make an API call
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Add your logic for form submission here
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-4 h-full">
        <ArrowBackIcon className="cursor-pointer absolute top-8 left-8 text-black" />
        <img src={LoginImage} alt="login" className="w-full h-full object-cover" />
      </div>

      {/* Right Section */}
      <div className="bg-bg-color w-full md:w-1/2 p-4 flex items-center justify-center h-full">
        <div className="bg-bg-color p-8 text-center max-w-md mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-white">Login</h2>
          <p className="text-lg text-white mb-6">Enter your credentials to login</p>

          <form className="grid grid-cols-1 gap-6 mt-20" onSubmit={handleSubmit}>
            {/* Email */}
            <InputField
              label="Email"
              type="text"
              id="email"
              name="email"
              autoComplete="off"
              value={email}
              onChange={handleEmailChange}
              className={email ? "has-value" : ""}
            />

            {/* Password */}
            <InputField
              label="Password"
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              value={password}
              onChange={handlePasswordChange}
            />

            {/* Submit Button */}
            <div className="mb-4">
              <button type="submit" className="flex justify-center bg-sec-color text-white p-1 rounded cursor-pointer w-full mt-10">
                <LoginOutlinedIcon className="mr-2" />
                <p className="text-lg font-bold">Login</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
