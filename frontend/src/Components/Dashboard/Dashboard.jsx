import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import DashboardContent from "./DashboardContent";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'; // Import the useSelector hook


function Dashboard() {
  const employeeData = useSelector(state => state.EmployeeData);
  console.log(employeeData);

  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userData, setUserData] = useState('');
  const [organizationData, setOrganizationData] = useState(null);

  useEffect(() => {
    setUserData(location.state?.data);
    if (location.state?.data) {
      setOrganizationData({
        totalEmployees: location.state.data.employeeData.length,
        totalDepartments: location.state.data.departments?.uniqueDepartmentsCount || 0,
        totalLeaveRequest: location.state.data.totalLeavesRequestPending || 0,
      });
    }
  }, [location.state?.data]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleSidebar}
          className="bg-gray-100 text-black mt-5 ml-5 p-2 rounded-full"
        >
          {isSidebarOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
        </button>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col overflow-hidden bg-color ${
          isSidebarOpen ? "md:ml-64" : "" // Adjust the margin when the sidebar is open
        }`}
      >
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          {/* Conditional rendering based on organizationData */}
          {organizationData && <DashboardContent data={organizationData} />}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
