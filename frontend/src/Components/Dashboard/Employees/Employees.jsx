import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { useSelector } from "react-redux";
import EmployeeCard from "../../Styles/EmployeeCard";
import DashboardOverview from "../DashboardOverview";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const data = useSelector((state) => state.EmployeeData);

  useEffect(() => {
    console.log("employees");
    console.log(data.employeeData);
    setEmployees(data.employeeData);
  }, [data.employeeData]);

  return (
    <div className="flex">
      <div className="fixed"><Sidebar></Sidebar></div>
      <div className="flex flex-col md:ml-72">
      <div className="sm: ml-20 md:ml-0"><DashboardOverview pageName="Employees"></DashboardOverview></div>

      <div className="flex justify-center gap-6 h-full w-full p-4 flex-wrap">
        {employees && employees.length > 0 ? (
          employees.map((employee, index) => (
            <div className="w-72">
            <EmployeeCard
              key={index}
              Id={index + 1}
              Name={employee.name}
              Department={employee.department}
              Contact={employee.contact}
              EmailText={employee.email}
            ></EmployeeCard>
            </div>
          ))
        ) : (
          <p>No employees found</p>
        )}
        {employees && employees.length > 0 ? (
          employees.map((employee, index) => (
            <div className="w-72">
            <EmployeeCard
              key={index}
              Id={index + 1}
              Name={employee.name}
              Department={employee.department}
              Contact={employee.contact}
              EmailText={employee.email}
            ></EmployeeCard>
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
