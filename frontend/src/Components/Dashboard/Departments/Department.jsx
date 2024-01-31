import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar";
import DashboardOverview from "../DashboardOverview";
import InputField from "../../Styles/InputField";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Department() {
  const [departments, setDepartments] = useState([]);
  const [newDepartment, setNewDepartment] = useState("");
  const employeeData = useSelector((state) => state.EmployeeData);

  useEffect(() => {
    const uniqueDepartments = [
      ...new Set(
        employeeData.employeeData.map((employee) => employee.department)
      ),
    ];
    setDepartments(uniqueDepartments);
  }, [employeeData.employeeData]);

  const countEmployeesByDepartment = (department) => {
    return employeeData.employeeData.filter(
      (employee) => employee.department === department
    ).length;
  };

  const handleAddDepartment = () => {
    setDepartments([...departments, newDepartment]);
    setNewDepartment("");
  };

  const handleEditDepartment = (department) => {
    // Implement edit functionality
    console.log(`Editing ${department}`);
  };

  const handleDeleteDepartment = (department) => {
    // Implement delete functionality
    console.log(`Deleting ${department}`);
  };

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="flex-1 p-6">
        <DashboardOverview pageName="Departments"></DashboardOverview>
        <div className="flex flex-col gap-12 justify-center items-center">
          <div className="w-10/12 md:w-11/12">
            <TableContainer component={Paper} className="border border-black">
              <Table className="min-w-full">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="subtitle1" fontWeight="bold">Department</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="subtitle1" fontWeight="bold">Number of Employees</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle1" fontWeight="bold">Edit</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle1" fontWeight="bold">Delete</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {departments.map((dept) => (
                    <TableRow key={dept} className="text-center">
                      <TableCell>
                        <Typography variant="body1">{dept}</Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant="body1">{countEmployeesByDepartment(dept)}</Typography>
                      </TableCell>
                      <TableCell>
                        <IconButton color="primary" onClick={() => handleEditDepartment(dept)}>
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <IconButton color="primary" onClick={() => handleDeleteDepartment(dept)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="flex lg:w-10/12 md:w-11/12 sm:gap-4 flex-wrap justify-between border-black border rounded-lg p-10">
            <div className="w-full lg:w-8/12">
              <InputField
                label="New Department"
                type="text"
                id="department"
                name="department"
                value={newDepartment}
                autoComplete="off"
                onChange={(e) => setNewDepartment(e.target.value)}
              />
            </div>
            <div className="text-center">
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddDepartment}
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Department;
