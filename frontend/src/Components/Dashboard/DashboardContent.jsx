import React from "react";

function DashboardContent() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Dashboard Overview</h1>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 gap-4">
        <DashboardStat label="Total Employees" value="150" />
        <DashboardStat label="Departments" value="10" />
        <DashboardStat label="Leave Requests" value="5" />
        <DashboardStat label="Loan Requests" value="2" />
      </div>

      {/* Notifications Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <ul>
          <li className="flex items-center mb-2">
            <span className="bg-green-500 w-4 h-4 mr-2 rounded-full"></span>
            New Employee Joined
          </li>
          <li className="flex items-center mb-2">
            <span className="bg-yellow-500 w-4 h-4 mr-2 rounded-full"></span>
            Upcoming Meeting
          </li>
        </ul>
      </div>

      {/* To-Do List Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">To-Do List</h2>
        <ul>
          <li className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            Complete Monthly Payroll
          </li>
          <li className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            Schedule Team Building
          </li>
        </ul>
      </div>
    </div>
  );
}

// Dashboard Stat Component
function DashboardStat({ label, value }) {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <p className="text-lg font-semibold mb-2">{value}</p>
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

export default DashboardContent;
