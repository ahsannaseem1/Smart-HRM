import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { useSelector } from "react-redux";
import EmployeeCard from "../../Styles/EmployeeCard";
import DashboardOverview from "../DashboardOverview";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const data = useSelector((state) => state.EmployeeData);

  useEffect(() => {
    console.log("employees");
    console.log(data.employeeData);
    setEmployees(data.employeeData);
  }, [data.employeeData]);

  const filteredEmployees = employees.filter((employee) => {
    const nameMatch = employee.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const departmentMatch = employee.department
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return nameMatch || departmentMatch;
  });

  return (
    <div className="flex">
      <div className="fixed">
        <Sidebar />
      </div>
      <div className="flex flex-col md:ml-72 w-full">
        <div className="sm:ml-20 md:ml-0 w-full pr-8">
          <DashboardOverview pageName="Employees" />
          <div className="w-1/4">
            <input
              type="text"
              placeholder="Search by name or department"
              className="p-2 border border-gray-300 rounded mt-4 mb-4 w-full"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center gap-6 h-full w-full p-4 flex-wrap">
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee, index) => (
              <div className="w-72" key={index}>
                <EmployeeCard
                  Id={index + 1}
                  Name={employee.name}
                  Salary={employee.salary}
                  Contact={employee.contact}
                  EmailText={employee.email}
                />
              </div>
            ))
          ) : (
            <p>No employees found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Employees;
