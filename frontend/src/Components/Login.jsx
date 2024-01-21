import React from "react";
import LoginImage from "../images/log1.jpg";
<<<<<<< HEAD


function Login(props) {
=======

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

const Login = () => {
>>>>>>> dc4ef7676895adf7114936c078d777bea0a6bc56
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side */}
      <div className="flex w-1/2 border-black-100 border-5">
        <div className="flex flex-col gap-8 p-8 bg-bg-color text-white w-full">
       
          <div className="flex flex-col gap-5">
            <h2 className="text-5xl font-bold">Login</h2>
            <p className="text-2xl">Enter your Credentials to Login</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-black">
              <p className="text-white pl-1">Email</p>
              <input
                className="p-2 rounded-lg w-full"
                placeholder="Enter Email"
              />
            </div>
            <div className="text-black mt-4">
              <p className="text-white pl-1">Password</p>
              <input
                className="p-2 rounded-lg w-full"
                placeholder="Enter Password"
              />
            </div>
          </div>
          <button className="bg-blue-500 text-white p-2 rounded-lg w-full">
            Login
          </button>
        </div>
      </div>

      {/* Right side */}
      <div className="w-1/2 border-gray-100 border-5">
        <img src={LoginImage} alt="login" className="w-full h-full object-cover" />
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
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

>>>>>>> dc4ef7676895adf7114936c078d777bea0a6bc56

export default Login;