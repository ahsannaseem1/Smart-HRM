// src/components/Dashboard.jsx
import React, { useState } from "react";
import Sidebar from "./Dashboard/Sidebar";
import DashboardContent from "./Dashboard/DashboardContent";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleSidebar}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          {isSidebarOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col overflow-hidden bg-color ${
          isSidebarOpen ? "md:ml-64" : "" // Adjust the margin when the sidebar is open
        }`}
      >
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
