import React, { useState } from "react";
import RegisterImage from "../images/reg7.jpg";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InputField from "./InputField";

const Register = () => {
    const employeesOptions = Array.from({ length: 30 }, (_, i) => i + 1);
    const hrOptions = Array.from({ length: 10 }, (_, i) => i + 1);

    const [selectedEmployees, setSelectedEmployees] = useState("");
    const [selectedHRs, setSelectedHRs] = useState("");

    const handleEmployeesChange = (e) => {
        setSelectedEmployees(e.target.value);
    };

    const handleHRsChange = (e) => {
        setSelectedHRs(e.target.value);
    };


    return (
        <div className="flex flex-col sm:flex-row w-full min-h-screen ">
            {/* Container with Image */}
            <div className="flex-1 justify-center items-center">
                <ArrowBackIcon className="cursor-pointer absolute top-8 left-8 text-black" />
                <img src={RegisterImage} alt="background" className="w-auto md:w-full md:mt-40 sm:mt-48" />
            </div>

            {/* Form Container */}
            <div className="flex-1 bg-bg-color p-8 shadow-md text-center">
                <h2 className="text-3xl font-bold mb-4 text-white mt-10 md:mt-8 sm:mt-6 mt-4">Register your Organization</h2>
                <p className="md:text-md sm:text-sm mb-4 text-white">Sign Up as a Super Admin of your organization</p>
                <form className="grid grid-cols-1 gap-6 md:gap-5 lg:gap-6 sm:mt-10 md:mt-14 lg:mt-16 mt-12 text-left sm:grid-cols-2">
                    {/* Organization Name */}
                    <InputField
                        label="Organization Name"
                        type="text"
                        id="organizationName"
                        name="organizationName"
                        autoComplete="off"
                    />

                    {/* Email */}
                    <InputField
                        label="Email"
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="off"
                    />

                    {/* Password */}
                    <InputField
                        label="Password"
                        type="password"
                        id="password"
                        name="password"
                        autoComplete="off"
                    />

                    {/* Confirm Password */}
                    <InputField
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        autoComplete="off"
                    />

                    {/* Address */}
                    <InputField
                        label="Address"
                        type="text"
                        id="address"
                        name="address"
                        autoComplete="off"
                    />

                    {/* Phone Number */}
                    <InputField
                        label="Phone Number"
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        autoComplete="off"
                    />

                    {/* Number of Employees
          <InputField
            label="No of Employees"
            type="select"
            id="numEmployees"
            name="numEmployees"
            autoComplete="off"
          /> */}

                   
          
            {/* Number of Employees */}
<div className="mb-4 relative">
  <label
    htmlFor="numEmployees"
    className={`absolute transition-all duration-300 ${
      selectedEmployees ? "text-sm text-white -top-6 left-1" : "top-2 left-3 text-gray-500 text-xs md:text-sm lg:text-sm"
    }`}
  >
    {selectedEmployees ? "No of Employees" : ""}
  </label>
  <select
    id="numEmployees"
    name="numEmployees"
    className={`p-2 border rounded w-full outline-none ${
      selectedEmployees ? "text-white" : "text-gray-500"
    } bg-white`}
    autoComplete="off"
    value={selectedEmployees}
    onChange={handleEmployeesChange}
  >
    <option value="" disabled hidden={!selectedEmployees}>
      Number of Employees
    </option>
    {employeesOptions.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
</div>

                    {/* Number of HRs
          <InputField
            label="No of HRs"
            type="select"
            id="numHRs"
            name="numHRs"
            autoComplete="off"
          /> */}


                 {/* Number of HRs */}
<div className="mb-4 relative">
  <label
    htmlFor="numHRs"
    className={`absolute transition-all duration-300 ${
      selectedHRs ? "text-sm text-white -top-6 left-1" : "top-2 left-3 text-gray-500 text-xs md:text-sm lg:text-sm"
    }`}
  >
    {selectedHRs ? "No of HRs" : ""}
  </label>
  <select
    id="numHRs"
    name="numHRs"
    className={`p-2 border rounded w-full outline-none ${
      selectedHRs ? "text-white" : "text-gray-500"
    } bg-white`}
    autoComplete="off"
    value={selectedHRs}
    onChange={handleHRsChange}
  >
    <option value="" disabled hidden={!selectedHRs}>
      Number of HRs
    </option>
    {hrOptions.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
</div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="flex justify-center sm:col-span-2 bg-sec-color text-white px-4 py-2 rounded cursor-pointer lg:mt-6 md:mt-4"
                    >
                        <ExitToAppOutlinedIcon className="mr-1"></ExitToAppOutlinedIcon>
                        <p className="text-1xl font-bold">Register</p>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
