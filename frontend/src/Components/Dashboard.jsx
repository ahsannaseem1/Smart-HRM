import React from "react";
import Sidebar from "./Dashboard/Sidebar";
import DashboardContent from "./Dashboard/DashboardContent";

function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden bg-color">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
