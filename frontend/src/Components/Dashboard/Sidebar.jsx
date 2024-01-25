// src/components/Dashboard/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from '../../images/avi.jpg';

function Sidebar({ isOpen, onClose }) {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <aside
      className={`w-55 m-3 ${
        isOpen ? "block" : "hidden"
      } md:block bg-blue-500 p-3 h-90vh flex flex-col justify-center items-center rounded-xl shadow-md`}
    >
      {/* Organization Name */}
      <h1 className="text-white text-lg font-semibold mb-4">
        Your Organization
      </h1>

      {/* HR Profile */}
      <div className="flex items-center mb-6">
        <img
          src={logoImage}
          alt="HR Profile"
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <p className="text-white font-semibold">Sameer Ali</p>
          <p className="text-gray-300 text-sm">HR Manager</p>
        </div>
      </div>

      {/* Sidebar Menu */}
      <nav>
        <ul className="space-y-2">
          <SidebarItem to="/dashboard" icon="📊" label="Dashboard" isActive={isActive("/dashboard")} onClose={onClose} />
          <SidebarItem to="/dashboard/departments" icon="🏢" label="Departments" isActive={isActive("/dashboard/departments")} onClose={onClose} />
          <SidebarItem to="/dashboard/employees" icon="👥" label="Employees" isActive={isActive("/dashboard/employees")} onClose={onClose} />
          <SidebarItem to="/dashboard/attendance" icon="👋" label="Attendance" isActive={isActive("/dashboard/attendance")} onClose={onClose} />
          <SidebarItem to="/dashboard/leave" icon="📅" label="Leave" isActive={isActive("/dashboard/leave")} onClose={onClose} />
          <SidebarItem to="/dashboard/payroll" icon="💰" label="Payroll" isActive={isActive("/dashboard/payroll")} onClose={onClose} />
          <SidebarItem to="/dashboard/recruitment" icon="🎓" label="Recruitment" isActive={isActive("/dashboard/recruitment")} onClose={onClose} />
          <SidebarItem to="/dashboard/profile" icon="👤" label="Profile" isActive={isActive("/dashboard/profile")} onClose={onClose} />
          <SidebarItem to="/dashboard/settings" icon="⚙️" label="Settings" isActive={isActive("/dashboard/settings")} onClose={onClose} />
        </ul>
      </nav>
    </aside>
  );
}

// Sidebar Item Component
function SidebarItem({ to, icon, label, isActive, onClose }) {
  return (
    <li>
      <Link
        to={to}
        className={`flex items-center text-white p-2 rounded-xl hover:bg-blue-600 ${isActive ? 'bg-blue-600 border-l-4 ' : ''}`}
        onClick={onClose}
      >
        <span className="mr-2">{icon}</span>
        <span>{label}</span>
      </Link>
    </li>
  );
}

export default Sidebar;
