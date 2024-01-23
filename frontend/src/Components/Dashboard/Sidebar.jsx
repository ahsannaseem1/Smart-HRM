import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 p-4">
      {/* Organization Name */}
      <h1 className="text-white text-lg font-semibold mb-4">Your Organization</h1>

      {/* HR Profile */}
      <div className="flex items-center mb-6">
        <img
          src="./images/log1.jpg"
          alt="HR Profile"
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <p className="text-white font-semibold">John Doe</p>
          <p className="text-gray-300 text-sm">HR Manager</p>
        </div>
      </div>

      {/* Sidebar Menu */}
      <nav>
        <ul className="space-y-2">
          <SidebarItem to="/dashboard" icon="📊" label="Dashboard" />
          <SidebarItem to="/dashboard/departments" icon="🏢" label="Departments" />
          <SidebarItem to="/dashboard/employees" icon="👥" label="Employees" />
          <SidebarItem to="/dashboard/attendance" icon="👋" label="Attendance" />
          <SidebarItem to="/dashboard/leave" icon="📅" label="Leave" />
          <SidebarItem to="/dashboard/payroll" icon="💰" label="Payroll" />
          <SidebarItem to="/dashboard/recruitment" icon="🎓" label="Recruitment" />
          <SidebarItem to="/dashboard/profile" icon="👤" label="Profile" />
          <SidebarItem to="/dashboard/settings" icon="⚙️" label="Settings" />
        </ul>
      </nav>
    </aside>
  );
}

// Sidebar Item Component
function SidebarItem({ to, icon, label }) {
  return (
    <li>
      <Link
        to={to}
        className="flex items-center text-white p-2 rounded-md hover:bg-gray-700"
      >
        <span className="mr-2">{icon}</span>
        <span>{label}</span>
      </Link>
    </li>
  );
}

export default Sidebar;