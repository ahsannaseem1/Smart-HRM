import React from "react";
import DashboardOverview from "../DashboardOverview";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function EmployeeProfile() {
  // Sample employee data
  const employeeData = {
    id: "01",
    name: "Ahsan Naseem",
    department: "Design",
    employeeType: "Full Time",
    position: "Software Engineer",
  };

  return (
    <div className="flex flex-col md:flex-row ">
      {/* Back button */}
      <Link to='/dashboard/Employees'>
        <ArrowBackIcon className="cursor-pointer absolute top-8 left-8 " />
      </Link>
      
      {/* Main content */}
      <div className="w-full p-16">
        {/* Dashboard overview */}
        <DashboardOverview pageName="Employee Profile" />

        {/* Employee profile details */}
        <div className="overflow-x-auto flex justify-center items-center mt-10">
          <table className="w-10/12 rounded-lg border border-gray-300 shadow-lg shadow-gray-300 cursor-pointer hover:shadow-blue-300 ">
            <tbody>
              <tr className="border border-gray-300"> 
                <h1 className="text-lg pl-8 font-bold p-3">Employee Details</h1>
              </tr>
              <tr>
                <th className="p-3 pl-8 text-left text-md text-gray-500">Employee ID</th>
                <td className="p-3 text-md font-bold">{employeeData.id}</td>
              </tr>
              <tr>
                <th className="p-3 pl-8 text-left text-md text-gray-500">Employee Name</th>
                <td className="p-3 text-md font-bold">{employeeData.name}</td>
              </tr>
              <tr>
                <th className="p-3 pl-8 text-left text-md text-gray-500">Department</th>
                <td className="p-3 text-md font-bold">{employeeData.department}</td>
              </tr>
              <tr>
                <th className="p-3 pl-8 text-left text-md text-gray-500">Employee Type</th>
                <td className="p-3 text-md font-bold">{employeeData.employeeType}</td>
              </tr>
              <tr>
                <th className="p-3 pl-8 text-left text-md text-gray-500">Position</th>
                <td className="p-3 text-md font-bold">{employeeData.position}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeProfile;
