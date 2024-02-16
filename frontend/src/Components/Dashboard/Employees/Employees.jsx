import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { useSelector } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import EmployeeCard from "../../Styles/EmployeeCard";
import DashboardOverview from "../DashboardOverview";
import InputField from "../../Styles/InputField";
import EnhancedTable from "../../Styles/Table";
import { Link } from "react-router-dom";

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

          <div className="flex justify-between rounded-md w-full ">
            <div className="w-1/3">
              <InputField
                label="Search Employee"
                type="text"
                id="Search"
                name="Search"
                value={searchTerm}
                autoComplete="off"
                onChange={(e) => setSearchTerm(e.target.value)}
                top="3"
              ></InputField>
            </div>
            <div className="">
            <Link to="/dashboard/Employees/AddEmployee">
            <button className="flex justify-center bg-bg-color text-white p-2 rounded cursor-pointer w-full active:text-sec-color active:bg-white">
                <AddIcon className="mr-2" />
                <p className="text-md font-bold">Add Employee</p>
              </button>
                </Link>
             
            </div>
          </div>
        </div>
        
        
<div className="flex justify-center gap-6 h-full w-full p-4 flex-wrap">
  {filteredEmployees.length > 0 ? (
    filteredEmployees.map((employee, index) => (
      <div className="w-72" key={index}>
        <EmployeeCard
          Id={index + 1}
          Name={employee.name}
          Department={employee.department}
          Contact={employee.contact}
          EmailText={employee.email}
          // Image={employee.image}
        />
      </div>
    ))
  ) : (
    <p>No employees found</p>
  )}
</div>

        {/* <div className="mr-4">
       
          <EnhancedTable employeeData={filteredEmployees}></EnhancedTable>
        </div> */}
      </div>
    </div>
  );
}

export default Employees;
