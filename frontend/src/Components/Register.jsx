import React from "react";
import RegisterImage from "../images/reg7.jpg";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Register = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full h-screen">
      {/* Container with Image */}
      <div className="flex-1 justify-center items-center">
        <ArrowBackIcon className="cursor-pointer absolute top-8 left-8 text-black" />
        <img src={RegisterImage} alt="background" className="w-auto md:w-full md:mt-40 sm:mt-72" />
      </div>

      {/* Form Container */}
      <div className="flex-1 bg-bg-color p-8 shadow-md text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Register as Super Admin</h2>
        <form className="grid grid-cols-1 gap-6 mt-12 text-left sm:grid-cols-2">

          {/* Organization Name */}
          <div className="mb-4">
            <label htmlFor="organizationName" className="block text-white mb-1">
              Organization Name
            </label>
            <input
              type="text"
              id="organizationName"
              name="organizationName"
              className="p-2 border rounded w-full outline-none"
              autoComplete="off"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 border rounded w-full outline-none"
              autoComplete="off"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-white mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="p-2 border rounded w-full outline-none"
              autoComplete="off"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-white mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="p-2 border rounded w-full outline-none"
              autoComplete="off"
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-white mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="p-2 border rounded w-full outline-none"
              autoComplete="off"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-white mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="p-2 border rounded w-full outline-none"
              autoComplete="off"
            />
          </div>

          {/* Number of Employees */}
          <div className="mb-4">
            <label htmlFor="numEmployees" className="block text-white mb-1">
              No of Employees
            </label>
            <select
              id="numEmployees"
              name="numEmployees"
              className="p-2 border rounded w-full outline-none"
              autoComplete="off"
            >
              {Array.from({ length: 30 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Number of HRs */}
          <div className="mb-4">
            <label htmlFor="numHRs" className="block text-white mb-1">
              No of HRs
            </label>
            <select id="numHRs" name="numHRs" className="p-2 border rounded w-full outline-none" autoComplete="off">
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex justify-center sm:col-span-2 bg-sec-color text-white px-4 py-2 rounded cursor-pointer mt-6"
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
