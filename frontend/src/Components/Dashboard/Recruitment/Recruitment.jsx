import React, { useState, useEffect } from 'react';
import Sidebar from "../Sidebar";
import DashboardOverview from "../DashboardOverview";
import axios from 'axios';
import { useSelector } from 'react-redux';

function Recruitment() {
    const employeeData = useSelector(state => state.EmployeeData);

    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/GetJobs/${employeeData.user.organizationId}`);
                setJobs(response.data);
                setError(null);
            } catch (error) {
                console.error('Error fetching jobs:', error);
                setError('Error fetching jobs. Please try again.');
            }
        };

        fetchData();
    }, [employeeData.user.organizationId]); // Include employeeData.user.organizationId in the dependency array

    return (
        <div className="flex gap-4">
            <Sidebar></Sidebar>
            <div className="w-full p-4">
                <DashboardOverview pageName="Recruitment"></DashboardOverview>
                <div className="flex mt-4">
                    {jobs.map((job) => (
                        <div key={job.jobId} className="flex flex-col gap-4 w-[40%] p-4 rounded-lg border border-black shadow-lg">
                            <h1 className="font-bold text-xl">{job.jobTitle}</h1>
                            <p className="text-sm">{job.jobDescription.split('\n').slice(0, 3).join('\n')}...</p>
                            <button className="p-2 self-end rounded-md bg-sec-color text-white">View</button>
                        </div>
                    ))}
                </div>
                {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
        </div>
    );
}

export default Recruitment;