import * as React from "react";

function Login(props) {
  return (
   <div>
    <div className="flex">
        <div className="flex flex-col gap-8 w-1/2 justify-center items-center py-12 bg-bg-color text-white">
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Login</h2>
                <p>Enter your Credentials to Login</p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-black"><p className="text-white pl-1">Email</p><input className="p-1 rounded-lg"placeholder="Enter Email"></input></div>
                <div className="text-black mt-6"><p className="text-white pl-1">Password</p><input className="p-1 rounded-lg"placeholder="Enter Password"></input></div>
            </div>
        </div>
        <div></div>
    </div>
   </div>
  );
}


export default Login;