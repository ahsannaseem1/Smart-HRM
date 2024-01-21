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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

function Login(props) {
    return (
        <div className="flex flex-col h-screen md:flex-row">
            {/* left side */}
            <div className="w-full md:w-1/2 border-gray-100 border-5 md:border-r-0 flex items-center justify-center">
                <ArrowBackIcon className="cursor-pointer absolute top-8 left-8 text-black" />
                <img src={LoginImage} alt="login" className="w-full h-full object-cover" />
            </div>

            {/* right side */}
            <div className="flex w-full md:w-1/2 border-black-100 border-5">
                <div className="flex flex-col gap-8 p-8 bg-bg-color text-white w-full justify-center">

                    <form className="flex flex-col gap-5 items-center">
                        <h2 className="text-5xl font-bold text-left">Login</h2>
                        <p className="text-1xl text-left">Enter your Credentials to Login</p>

                        <div className="text-black mt-20">
                            <p className="text-white pl-1">Email</p>
                            <input
                                className="p-2 rounded-lg w-full md:w-80 min-w-[300px] mt-2"
                                placeholder="Enter Email"
                                style={{ fontSize: "14px" }}
                            />
                        </div>

                        <div className="text-black mt-4">
                            <p className="text-white pl-1">Password</p>
                            <input
                                className="p-2 rounded-lg w-full md:w-80 min-w-[300px] mt-2"
                                placeholder="Enter Password"
                                style={{ fontSize: "14px" }}
                            />
                             <div className="flex justify-end w-full md:w-80">
                            <p className="text-sm underline text-white mt-3">Forgot password?</p>
                        </div>
                        </div>

                       
                        <div>
                            <button className="flex justify-center bg-white text-black p-2 rounded-lg w-full md:w-80  min-w-[300px] mt-6">
                                <LoginOutlinedIcon className="mr-2" />
                                <p className="text-1xl font-bold">Login</p>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}


export default Login;