import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Testimonial = () => {
  return (
    <div className="bg-bg-color mt-12">
    <div className="text-white text-center text-3xl font-bold pt-12">
    <h1>What Our Customer Say About Us ...</h1>
    </div>
      <div className=" flex justify-center gap-12 py-32">
        <div className="flex flex-col gap-6 items-start bg-bg-color w-1/4 text-white rounded-lg border border-gray-300 py-4 ">
          <div className=" pl-4">
            <p>Used Daily</p>
          </div>
          <hr className="border-1 border-white w-full"></hr>
          <div className="pl-4">
            <p>
              “The Smart HRM is really in line with our culture and we see our
              people use it pretty much everyday”
            </p>
          </div>
     
            <div className="flex gap-2 pl-4 mt-8">
              <AccountCircleIcon className="self-center"></AccountCircleIcon>
              <div>
                <p>Wasim Khan</p>
                <p>CEO PCB</p>
              </div>
       
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start bg-bg-color w-1/4 text-white rounded-lg border border-gray-300 py-4 ">
          <div className=" pl-4">
            <p>Used Daily</p>
          </div>
          <hr className="border-1 border-white w-full"></hr>
          <div className="pl-4">
            <p>
              “The Smart HRM is really in line with our culture and we see our
              people use it pretty much everyday”
            </p>
          </div>
     
            <div className="flex gap-2 pl-4 mt-8">
              <AccountCircleIcon className="self-center"></AccountCircleIcon>
              <div>
                <p>Wasim Khan</p>
                <p>CEO PCB</p>
              </div>
       
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start bg-bg-color w-1/4 text-white rounded-lg border border-gray-300 py-4 ">
          <div className=" pl-4">
            <p>Used Daily</p>
          </div>
          <hr className="border-1 border-white w-full"></hr>
          <div className="pl-4">
            <p>
              “The Smart HRM is really in line with our culture and we see our
              people use it pretty much everyday”
            </p>
          </div>
     
            <div className="flex gap-2 pl-4 mt-8">
              <AccountCircleIcon className="self-center"></AccountCircleIcon>
              <div>
                <p>Wasim Khan</p>
                <p>CEO PCB</p>
              </div>
       
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Testimonial;
