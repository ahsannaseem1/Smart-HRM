import React from "react";
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

function Pricing(props) {
  return (
    <div className="text-center mt-12">
      <h1 className="text-black text-4xl font-bold">Our Pricing</h1>
      <div className='w-full flex justify-center mt-14'>
        <div className="w-full md:w-2/4 lg:w-1/3 xl:w-1/4 cursor-pointer mx-4 bg-white flex flex-col justify-center items-center py-6 border-2 border-black rounded-xl shadow-lg shadow-sec-color">

          <h2 className="text-bg-color text-3xl font-extrabold self-center mb-4">
            Free
          </h2>
          <hr className="border-1 border-black w-full mt-1 mb-8"></hr>
          <h3 className="text-black text-4xl lg:text-6xl font-bold mt-4">
            $0
          </h3>
          <p className="text-gray-500 text-base font-medium whitespace-nowrap my-4">
            per employee, per month
          </p>
          <div className="flex justify-center items-center mt-4">
            <button
              className="bg-bg-color px-3 py-1.5 rounded-3xl border-none font-bold text-center cursor-pointer transition duration-400 hover:shadow-lg hover:shadow-gray-400 active:transform active:scale-97 active:shadow-lg"
            >
              <ArrowCircleRightRoundedIcon className="inline-block" style={{ color: 'white' }} />
              <span className="ml-2 text-white">Start for Free</span>
            </button>
          </div>
          <div className="flex flex-col gap-4 items-start mt-10 mb-6">
            <p className="text-black text-lg">
              <DoneRoundedIcon className="mr-4"></DoneRoundedIcon> Smart HRM on Desktop
            </p>
            <p className="text-black text-lg">
              <DoneRoundedIcon className="mr-4"></DoneRoundedIcon> Mobile App for Employee
            </p>
            <p className="text-black text-lg">
              <DoneRoundedIcon className="mr-4"></DoneRoundedIcon> Mobile App for Super Admin
            </p>
            <p className="text-black text-lg">
              <DoneRoundedIcon className="mr-4"></DoneRoundedIcon> HR Management System
            </p>
            <p className="text-black text-lg">
              <DoneRoundedIcon className="mr-4"></DoneRoundedIcon> Leave And Payroll System
            </p>
            <p className="text-black text-lg">
              <DoneRoundedIcon className="mr-4"></DoneRoundedIcon> Smart Recruitment Process
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
