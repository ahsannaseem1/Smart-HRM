// src/components/Dashboard.jsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardContent from "./DashboardContent";

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
          className="bg-gray-100 text-black font-extrabold m-2 p-2 rounded-full"
        >
          {isSidebarOpen ? "✕" : "☰"}
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
          <DashboardContent />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
