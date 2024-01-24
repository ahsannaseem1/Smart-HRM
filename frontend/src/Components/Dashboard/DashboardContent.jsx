// src/components/Dashboard/DashboardContent.jsx
import React, { useState } from "react";

function DashboardContent() {
  const [dashboardStats] = useState([
    { label: "Total Employees", value: "150" },
    { label: "Departments", value: "10" },
    { label: "Leave Requests", value: "5" },
    { label: "Loan Requests", value: "2" },
  ]);

  const [notifications] = useState([
    "New Employee Joined",
    "Upcoming Meeting",
    // Add more notifications as needed
  ]);

  const [toDoList] = useState([
    "Complete Monthly Payroll",
    "Schedule Team Building",
    // Add more to-do items as needed
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Dashboard Overview</h1>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardStats.map((stat, index) => (
          <DashboardStat key={index} label={stat.label} value={stat.value} />
        ))}
      </div>

      {/* Notifications and To-Do List Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Notifications Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          <ul>
            {notifications.map((notification, index) => (
              <li key={index} className="flex items-center mb-2">
                <span className="bg-green-500 w-4 h-4 mr-2 rounded-full"></span>
                {notification}
              </li>
            ))}
          </ul>
        </div>

        {/* To-Do List Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">To-Do List</h2>
          <ul>
            {toDoList.map((item, index) => (
              <li key={index} className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
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