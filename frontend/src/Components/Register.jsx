import React, { useState } from "react";
import axios from "axios";
import validator from "validator";
import RegisterImage from "../images/reg7.jpg";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Register = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phoneNumber: "",
    numEmployees: "",
    numHRs: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
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
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters and include letters, numbers, and special characters";
      isValid = false;
    }

    // Other form field validations...

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
      const response = await axios.post("http://localhost:5000/SignUp", formData);
      console.log(response.data);
      // Handle success
    } catch (error) {
      console.error(error);
      // Handle error
    }
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
        <h2 className="text-3xl font-bold mb-4 text-white">Register your Organization</h2>
        <p className="md:text-md sm:text-sm mb-4 text-white">Sign Up as a Super Admin of your organization</p>
        <form
          className="grid grid-cols-1 xl:gap-6 lg:gap-3 md:gap-6 sm:gap-4 xl:mt-10 lg:mt-1 md:mt-5 sm:mt-2 text-left sm:grid-cols-2"
          onSubmit={handleRegister}
        >
          {/* Organization Name */}
          <div className="mb-4">
            <label htmlFor="organizationName" className="block text-white mb-1 sm:text-xs md:text-md lg:text-lg">
              Organization Name
            </label>
            <input
              type="text"
              id="organizationName"
              name="organizationName"
              className="p-2 border rounded w-full outline-none"
              autoComplete="off"
              value={formData.organizationName}
              onChange={handleInputChange}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-1 sm:text-xs md:text-md lg:text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`p-2 border rounded w-full outline-none ${errors.email ? "border-red-500" : ""}`}
              autoComplete="off"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-white mb-1 sm:text-xs md:text-md lg:text-lg">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`p-2 border rounded w-full outline-none ${errors.password ? "border-red-500" : ""}`}
              autoComplete="off"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* ... other form elements ... */}

          {/* Number of Employees */}
          <div className="mb-4">
            <label htmlFor="numEmployees" className="block text-white mb-1 sm:text-xs md:text-md lg:text-lg">
              No of Employees
            </label>
            <select
              id="numEmployees"
              name="numEmployees"
              className="p-2 border rounded w-full outline-none"
              autoComplete="off"
              value={formData.numEmployees}
              onChange={handleInputChange}
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
            <label htmlFor="numHRs" className="block text-white mb-1 sm:text-xs md:text-md lg:text-lg">
              No of HRs
            </label>
            <select
              id="numHRs"
              name="numHRs"
              className="p-2 border rounded w-full outline-none"
              autoComplete="off"
              value={formData.numHRs}
              onChange={handleInputChange}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
