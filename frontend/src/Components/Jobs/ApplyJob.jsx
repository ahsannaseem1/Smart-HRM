import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InputField from '../Styles/InputField';
import validator from 'validator';
import axios from 'axios';

function ApplyJob() {
  const { orgId,jobId, jobTitle, jobDescription, orgName } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    cv: null,
    jobId:jobId,
    orgId:orgId
  });

  const [expanded, setExpanded] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null); // New state for API error

  useEffect(() => {
    console.log(jobId)
  }, [orgId,jobId]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      cv: e.target.files[0],
    });
  };

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const validateForm = () => {
    let newErrors = {};

    if (validator.isEmpty(formData.name)) {
      newErrors = { ...newErrors, name: 'Name is required' };
    }

    if (!validator.isEmail(formData.email)) {
      newErrors = { ...newErrors, email: 'Invalid email address' };
    }

    if (!validator.isLength(formData.password, { min: 6 })) {
      newErrors = {
        ...newErrors,
        password: 'Password must be at least 6 characters',
      };
    }

    if (!validator.isMobilePhone(formData.phoneNumber, 'any', { strictMode: false })) {
      newErrors = { ...newErrors, phoneNumber: 'Invalid phone number' };
    }

    // Check if CV is empty
    if (!formData.cv) {
      newErrors = { ...newErrors, cv: 'CV is required' };
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('')

    if (validateForm()) {
      const formDataToSend = new FormData();
      formDataToSend.append('pdf', formData.cv);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('phoneNumber', formData.phoneNumber);
      formDataToSend.append('jobId', formData.jobId);
      formDataToSend.append('orgId', formData.orgId);

      try {
        const response = await axios.post('http://localhost:5000/AddApplicant', formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Form submitted successfully');
        console.log(response);
        // Add your logic for successful form submission
      } catch (error) {
        console.error('Error submitting form:', error.response.data.error);
        setApiError(error.response.data.error); // Set API error message
      }
    }
  };

  return (
    <div className="bg-sec-color min-h-screen text-white pb-12">
      <div className="w-9/12 m-auto pt-12">
        <h2 className="text-3xl font-bold mb-4">{jobTitle} at {orgName}</h2>
        <p className="text-lg mb-4">Job Description:</p>
        <div className="mb-8">
          {expanded ? (
            <>
              <p>{jobDescription}</p>
              <button
                className="text-white underline cursor-pointer"
                onClick={toggleDescription}
              >
                Read Less
              </button>
            </>
          ) : (
            <>
              <p>{jobDescription.split('\n').slice(0, 5).join('\n')}</p>
              <button
                className="text-white underline cursor-pointer"
                onClick={toggleDescription}
              >
                Read More
              </button>
            </>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Name"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              focusColor="white"
              top="6"
              error={errors.name}
            />

            <InputField
              label="Email"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              focusColor="white"
              top="6"
              error={errors.email}
            />

            <InputField
              label="Password"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              focusColor="white"
              top="6"
              error={errors.password}
            />

            <InputField
              label="Phone Number"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              focusColor="white"
              top="6"
              error={errors.phoneNumber}
            />

            <div className="mb-4">
              <label className="block text-sm font-medium text-white">CV</label>
              <input
                type="file"
                id="cv"
                name="cv"
                onChange={handleFileChange}
                className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.cv&&(<p className='text-red-500'>{errors.cv}</p>)}
            </div>
          </div>

          {apiError && (
            <div className="text-red-500 mb-4">{apiError}</div>
          )}

          <button
            type="submit"
            className="bg-white text-sec-color p-2 rounded-lg mt-8 active:bg-sec-color active:text-white hover:shadow-xl"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplyJob;
