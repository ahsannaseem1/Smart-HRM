




import React from "react";
import LoginImage from "../images/log1.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

const Login = () => {
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

          <form className="grid grid-cols-1 gap-6 mt-20">
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-left text-white">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="p-2 border rounded w-full outline-none mt-2"
                placeholder="Enter Email"
                style={{ fontSize: "14px" }}
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-left text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="p-2 border rounded w-full outline-none mt-2"
                placeholder="Enter Password"
                style={{ fontSize: "14px" }}
              />
              <div className="flex justify-end">
                <p className="text-sm underline text-white mt-2 cursor-pointer">
                  Forgot password?
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mb-4">
              <button className="flex justify-center bg-sec-color text-white p-1 rounded cursor-pointer w-full mt-10">
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
