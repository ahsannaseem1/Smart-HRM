import React from "react";
import Sidebar from "../Sidebar";
import DashboardOverview from "../DashboardOverview";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import axios from "axios";

function Payroll() {
  const [employees, setEmployees] = useState([]);
  const data = useSelector((state) => state.EmployeeData);

  useEffect(() => {
    console.log("employees");
    console.log(data.employeeData);
    setEmployees(data.employeeData);
  }, [data.employeeData]);

  const handleViewClick = (employeeId) => {
    // Handle view click logic here
    console.log(`View button clicked for employeeId: ${employeeId}`);
  };

  const handleGeneratePayrollClick = () => {
    const confirmGenerate = window.confirm("Are you sure you want to generate payroll?");
    if (confirmGenerate) {
      // Make Axios call here
      axios.post('your_generate_payroll_api_endpoint', /* payload if needed */)
        .then(response => {
          // Handle success
          console.log('Payroll generated successfully!', response.data);
        })
        .catch(error => {
          // Handle error
          console.error('Error generating payroll:', error.message);
        });
    }
  };

  return (
    <div className="flex w-full gap-4">
      <Sidebar></Sidebar>
      <div className="w-full m-4">
        <DashboardOverview pageName="Payroll"></DashboardOverview>
        <div className="my-4">
          <button
            onClick={handleGeneratePayrollClick}
            className="p-2 bg-sec-color active:bg-white active:text-sec-color text-white rounded-lg"
          >
            Generate Payroll
          </button>
        </div>
        <TableContainer
          component={Paper}
          style={{
            maxHeight: "53%",
            overflowY: "auto",
            border: "1px solid black", // 1-pixel black border
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Employee Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Department</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Salary</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((employee, index) => (
                <TableRow
                  key={employee.id}
                  sx={{
                    backgroundColor: index % 2 === 1 ? "#f5f5f5" : "inherit",
                  }}
                >
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.salary}</TableCell>
                  <TableCell>
                    <button
                      onClick={() => handleViewClick(employee.id)}
                      className="bg-sec-color text-white p-2 px-4 rounded-lg cursor-pointer active:text-sec-color active:bg-white"
                    >
                      View
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Payroll;
