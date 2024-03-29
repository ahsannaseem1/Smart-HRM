// src/components/Dashboard/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from '../../images/avi.jpg';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import QueuePlayNextRoundedIcon from '@mui/icons-material/QueuePlayNextRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

function Sidebar({ isOpen, onClose }) {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <aside
      className={`w-60 m-3 ${
        isOpen ? "block" : "hidden"
      } md:block bg-bg-color p-3 h-90vh flex flex-col justify-center items-center rounded-3xl shadow-lg`}
    >
      {/* Organization Name */}
      <h1 className="text-white text-lg font-semibold mb-2 mt-4 text-center">
        DevTech Solutions
      </h1>

      {/* HR Profile */}
      <div className="flex flex-col items-center mb-5 mt-5">
        <img
          src={logoImage}
          alt="HR Profile"
          className="w-12 h-12 rounded-full mb-1"
        />
        <div className="text-center">
          <p className="text-white text-lg font-semibold mt-1">Sameer Ali</p>
          <p className="text-gray-300 text-sm">HR Manager</p>
        </div>
      </div>

      {/* Sidebar Menu */}
      <nav>
        <ul className="space-y-1">
          <SidebarItem to="/dashboard" label="Dashboard" isActive={isActive("/dashboard")} onClose={onClose} icon={<DashboardRoundedIcon style={{ color: 'white', fontSize: 20 }} />} />
          <SidebarItem to="/dashboard/departments" label="Departments" isActive={isActive("/dashboard/departments")} onClose={onClose} icon={<AccountBalanceRoundedIcon style={{ color: 'white', fontSize: 20 }} />} />
          <SidebarItem to="/dashboard/employees" label="Employees" isActive={isActive("/dashboard/employees")} onClose={onClose} icon={<GroupsRoundedIcon style={{ color: 'white', fontSize: 20 }} />} />
          <SidebarItem to="/dashboard/attendance" label="Attendance" isActive={isActive("/dashboard/attendance")} onClose={onClose} icon={<PermContactCalendarRoundedIcon style={{ color: 'white', fontSize: 20 }} />} />
          <SidebarItem to="/dashboard/leave" label="Leave" isActive={isActive("/dashboard/leave")} onClose={onClose} icon={<EventRoundedIcon style={{ color: 'white', fontSize: 20 }} />} />
          <SidebarItem to="/dashboard/payroll" label="Payroll" isActive={isActive("/dashboard/payroll")} onClose={onClose} icon={<PaidRoundedIcon style={{ color: 'white', fontSize: 20 }} />} />
          <SidebarItem to="/dashboard/recruitment" label="Recruitment" isActive={isActive("/dashboard/recruitment")} onClose={onClose} icon={<QueuePlayNextRoundedIcon style={{ color: 'white', fontSize: 20 }} />} />
          <SidebarItem to="/dashboard/profile" label="Profile" isActive={isActive("/dashboard/profile")} onClose={onClose} icon={<Person2RoundedIcon style={{ color: 'white', fontSize: 20 }} />} />
          <SidebarItem to="/dashboard/settings" label="Settings" isActive={isActive("/dashboard/settings")} onClose={onClose} icon={<SettingsRoundedIcon style={{ color: 'white', fontSize: 20 }} />} />
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
        className={`flex items-center justify-between text-white p-2 rounded-2xl hover:bg-blue-600 ${isActive ? 'bg-sec-color border-l-4 rounded-l-none pr-3' : ''}`}
        onClick={onClose}
      >
        <div className="flex items-center">
          <span className="mr-2">{icon}</span>
          <span className="text-md">{label}</span>
        </div>
      </Link>
    </li>
  );
}


export default Sidebar;
