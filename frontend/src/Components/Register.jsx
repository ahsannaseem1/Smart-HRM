import React, { useState,useEffect } from "react";
import axios from "axios";
import validator from "validator";
import RegisterImage from "../images/reg7.jpg";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Register = () => {
  const [formData, setFormData] = useState({
    orgName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phoneNumber: "",
    numberOfEmployees: "",
    numberOfHrs: "",
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(''); 


  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setApiError(null); // New state for API error

  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Email validation
    if (!validator.isEmail(formData.email)) {   
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters and include letters, numbers, and special characters";
      isValid = false;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    // Check for empty fields
    for (const key in formData) {
      if (formData[key].trim() === "") {
        newErrors[key] = "This field is required";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Form validation
    if (!validateForm()) {
      return;
    }

    // Make axios call
    try {
      const response = await axios.post(
        "http://localhost:5000/SignUp",
        formData
      );

      console.log(response.data);
      // Handle success
    } catch (error) {
      setApiError(error.response.data.error)
      console.error(error.response.data.error);
      // Handle error
    }
  };
useEffect(()=>{

},[apiError])
  return (
    <div className="flex flex-col sm:flex-row w-full min-h-screen ">
      {/* Container with Image */}
      <div className="flex-1 justify-center items-center">
        <ArrowBackIcon className="cursor-pointer absolute top-8 left-8 text-black" />
        <img
          src={RegisterImage}
          alt="background"
          className="w-auto md:w-full md:mt-40 sm:mt-48"
        />
      </div>

      {/* Form Container */}
      <div className="flex-1 bg-bg-color p-8 shadow-md text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Register your Organization
        </h2>
        <p className="md:text-md sm:text-sm mb-4 text-white">
          Sign Up as a Super Admin of your organization
        </p>
        <form
          className="grid grid-cols-1 xl:gap-6 lg:gap-3 md:gap-6 sm:gap-4 xl:mt-10 lg:mt-1 md:mt-5 sm:mt-2 text-left sm:grid-cols-2"
          onSubmit={handleRegister}
        >
          {/* Organization Name */}
          <div className="mb-4">
            <label
              htmlFor="orgName"
              className="block text-white mb-1 sm:text-xs md:text-md lg:text-lg"
            >
              Organization Name
            </label>
            <input
              type="text"
              id="orgName"
              name="orgName"
              className={`p-2 border rounded w-full outline-none ${
                errors.orgName ? "border-red-500" : ""
              }`}
              autoComplete="off"
              value={formData.orgName}
              onChange={handleInputChange}
            />
              {errors.orgName && (
              <p className="text-red-800 font-bold  text-xs mt-1">{errors.orgName}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white mb-1 sm:text-xs md:text-md lg:text-lg"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`p-2 border rounded w-full outline-none ${
                errors.email ? "border-red-500" : ""
              }`}
              autoComplete="off"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="text-red-800 font-bold  text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-white mb-1 sm:text-xs md:text-md lg:text-lg"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`p-2 border rounded w-full outline-none ${
                errors.password ? "border-red-500" : ""
              }`}
              autoComplete="off"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && (
              <p className="text-red-800 font-bold  text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-white mb-1 sm:text-xs md:text-md lg:text-lg"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className={`p-2 border rounded w-full outline-none ${
                errors.confirmPassword ? "border-red-500" : ""
              }`}
              autoComplete="off"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-800 font-bold  text-xs mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Address */}
          <div className="mb-4">
          <label
              htmlFor="address"
              className="block text-white mb-1 sm:text-xs md:text-md lg:text-lg"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className={`p-2 border rounded w-full outline-none ${
                errors.address ? "border-red-500" : ""
              }`}
              autoComplete="off"
              value={formData.address}
              onChange={handleInputChange}
            />
            {errors.address && (
              <p className="text-red-800 font-bold  text-xs mt-1">{errors.address}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-white mb-1 sm:text-xs md:text-md lg:text-lg"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className={`p-2 border rounded w-full outline-none ${
                errors.phoneNumber ? "border-red-500" : ""
              }`}
              autoComplete="off"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            {errors.phoneNumber && (
              <p className="text-red-800 font-bold  text-xs mt-1">{errors.phoneNumber}</p>
            )}
          </div>

          {/* Number of Employees */}
          <div className="mb-4">
            <label
              htmlFor="numberOfEmployees"
              className="block text-white mb-1 sm:text-xs md:text-md lg:text-lg"
            >
              No of Employees
            </label>
            <select
              id="numberOfEmployees"
              name="numberOfEmployees"
              className={`p-2 border rounded w-full outline-none ${
                errors.numberOfEmployees ? "border-red-500" : ""
              }`}
              autoComplete="off"
              value={formData.numberOfEmployees}
              onChange={handleInputChange}
            >
              {Array.from({ length: 30 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            {errors.numberOfEmployees && (
              <p className="text-red-800 font-bold  text-xs mt-1">{errors.numberOfEmployees}</p>
            )}
          </div>

          {/* Number of HRs */}
          <div className="mb-4">
            <label
              htmlFor="numberOfHrs"
              className="block text-white mb-1 sm:text-xs md:text-md lg:text-lg"
            >
              No of HRs
            </label>
            <select
              id="numberOfHrs"
              name="numberOfHrs"
              className={`p-2 border rounded w-full outline-none ${
                errors.numberOfHrs ? "border-red-500" : ""
              }`}
              autoComplete="off"
              value={formData.numberOfHrs}
              onChange={handleInputChange}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            {errors.numberOfHrs && (
              <p className="text-red-800 font-bold  text-xs mt-1">{errors.numberOfHrs}</p>
            )}
          </div>

          {/* Register Button */}
          {apiError && (
            <p className="text-red-800 font-bold text-xs mt-3 w-full">{apiError}</p>
          )}
          <button
            type="submit"
            disabled={!Object.keys(errors).every((key) => !errors[key])}
            className="flex justify-center sm:col-span-2 bg-sec-color text-white px-4 py-2 rounded cursor-pointer mt-5 sm:mt-2 active:text-sec-color active:bg-white"
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