import React from "react";
import QueuePlayNextRoundedIcon from "@mui/icons-material/QueuePlayNextRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";

const WhyUs = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center mt-2">
      <div className="w-2/3 md:w-2/4">
        <h1 className="text-3xl text-black font-bold mb-2 text-center">
          The older <span className="text-bg-color">HR software</span> is ineffective.
        </h1>
        <h1 className="text-3xl text-black font-bold mb-10 text-center">Why Smart HRM?</h1>
      </div>

      <div className="container mx-auto justify-center items-center flex flex-col md:flex-row p-4 md:p-8">
        {/* Left Card */}
        <div className="w-full md:w-2/5 bg-white text-black p-4 md:p-8 rounded-lg cursor-pointer hover:shadow-md hover:shadow-bg-color border-2 border-black-400 mb-4 md:mb-0 mx-5 transition-transform transform origin-center hover:scale-105">
          <div className="flex items-center mb-4">
            <QueuePlayNextRoundedIcon style={{ color: "black", fontSize: 22 }} />
            <h2 className="text-2xl font-bold ml-4">Smart Recruitment</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Right Card */}
        <div className="w-full md:w-2/5 bg-sec-color text-white p-4 md:p-8 rounded-lg cursor-pointer hover:shadow-md hover:shadow-bg-color mx-5 transition-transform transform origin-center hover:scale-105">
          <div className="flex items-center mb-4">
            <PaidRoundedIcon style={{ color: "white", fontSize: 22 }} />
            <h2 className="text-2xl font-bold ml-4">Payroll Process</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
