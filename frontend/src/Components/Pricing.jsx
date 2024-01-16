import React from "react";
import DoneIcon from '@mui/icons-material/Done';

function Pricing(props) {
  const handleButtonClick = (option) => {
    // Handle button click event here
    console.log(`Button ${option} clicked`);
  };

  return (
    <div className="text-center">
     <h1 className="text-black text-4xl font-bold whitespace-nowrap my-12">
        Our Pricing
      </h1>
      <div className='w-full flex justify-center    '>
    <div className="w-1/4 bg-white flex flex-col justify-center items-center py-4 border-2 border-black rounded-lg">
     
      <h2 className="text-black text-3xl font-semibold self-center whitespace-nowrap">
        Free
      </h2>
      <hr className="border-1 border-black w-full mt-2"></hr>
      <h3 className="text-black text-6xl font-bold mt-8 max-md:text-4xl">
        $0
      </h3>
      <p className="text-black text-base font-medium whitespace-nowrap my-4">
        per employee, per month
      </p>
      <div className="cta-button">
              <button
                className="bg-bg-color text-white text-2xl font-extrabold self-center grow whitespace-nowrap my-auto rounded-2xl my-8 py-1 px-6 cursor-pointer active:bg-white active:text-bg-color-950"
              >
                Get Started
              </button>
            </div>
            <div className="flex flex-col gap-4 items-start my-8">
            <p className="text-black text-lg">
             <DoneIcon></DoneIcon> Smart HRM on Desktop
            </p>
            <p className="text-black text-lg">
            <DoneIcon></DoneIcon>Mobile App for Employee
            </p>
            <p className="text-black text-lg">
            <DoneIcon></DoneIcon>Mobile App for Super Admin
            </p>
            <p className="text-black text-lg">
            <DoneIcon></DoneIcon>HR Management System
            </p>
            <p className="text-black text-lg">
            <DoneIcon></DoneIcon>Leave And Payroll System
            </p>
            </div>
    </div>
    </div>
    </div>
  );
}

export default Pricing;
