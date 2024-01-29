import Sidebar from "../Sidebar";
import DashboardOverview from "../DashboardOverview";
import { useSelector } from "react-redux";
import DashboardStat from "../DashboardCard";
import { useState, useEffect } from "react";

function Department() {
  const [departments, setDepartments] = useState([]);
  const employeeData = useSelector((state) => state.EmployeeData);

  useEffect(() => {
    const uniqueDepartments = [
      ...new Set(
        employeeData.employeeData.map((employee) => employee.department)
      ),
    ];
    setDepartments(uniqueDepartments);
  }, [employeeData.employeeData]);

  console.log(departments);

  const countEmployeesByDepartment = (department) => {
    return employeeData.employeeData.filter(
      (employee) => employee.department === department
    ).length;
  };

  return (
    <div>
      <Sidebar></Sidebar>
      <DashboardOverview pageName="Departments"></DashboardOverview>
      <div className="p-6 mt-2">
      <div className="grid grid-cols-2 gap-4">
        {departments &&
          departments.map((dept) => (
            <DashboardStat
              label={dept}
              value={`${dept} (${countEmployeesByDepartment(dept)})`}
            ></DashboardStat>
          ))}
      </div>
        </div>
    </div>
  );
}

export default Department;
