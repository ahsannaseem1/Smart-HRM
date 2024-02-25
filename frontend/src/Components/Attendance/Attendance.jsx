// Components/Dashboard/Attendance.jsx
import React, { useState, useEffect } from "react";
import DashboardOverview from "../Dashboard/DashboardOverview";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import ReactApexChart from "react-apexcharts";

const Attendance = () => {
  const [employeeID] = useState("EMP001");
  const [attendancePercentage] = useState(70); // Hardcoded attendance percentage
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [sidebarDate, setSidebarDate] = useState(new Date());

  const attendanceDetails = [
    {
      date: "2024-01-01",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      status: "Present",
    },
    {
      date: "2024-01-02",
      checkIn: "09:15 AM",
      checkOut: "05:45 PM",
      status: "Present",
    },
    {
      date: "2024-01-01",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      status: "Absent",
    },
    {
      date: "2024-01-02",
      checkIn: "09:15 AM",
      checkOut: "05:45 PM",
      status: "Present",
    },
    // Add more details for other days
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const pieChartData = {
    labels: ["Present", "Absent"],
    series: [attendancePercentage, 100 - attendancePercentage],
  };

  const pieChartOptions = {
    labels: ["Present", "Absent"],
    colors: ["#02ed2d", "#f73e3e"],
    legend: {
      position: "left",
    },
  };

  return (
    <div className="flex flex-col h-full p-4 mt-2">
      {/* Include DashboardOverview for page name and date */}
      <DashboardOverview pageName="Attendance" />

      {/* Upper Section */}
      <div className="flex flex-row mt-4 w-full">
        <div className="flex flex-col justify-center items-center w-1/3 rounded-xl mr-6 border border-gray-200 shadow-md shadow-gray-300 hover:shadow-blue-300 cursor-pointer">
          <p className="text-2xl font-extrabold text-center p-2 rounded-md">
            <EventAvailableIcon /> {employeeID}
          </p>
          <p className="text-md text-center text-gray-500">Employee ID</p>
        </div>

        <div className="w-1/3 p-1 bg-transparent rounded-xl mr-6 border border-gray-200 shadow-md shadow-gray-300 hover:shadow-blue-300 cursor-pointer">
          {/* Attendance Percentage Section */}
          <div className="w-1/2">
            <p className="text-xl p-1 font-extrabold text-center rounded-md">
              {attendancePercentage}%
            </p>
            <p className="text-sm text-center mb-[-10px] text-gray-500">Attendance</p>
          </div>

          {/* Pie Chart Section */}
          <div className="flex items-center justify-center">
            <ReactApexChart
              type="donut"
              height={90}
              options={pieChartOptions}
              series={pieChartData.series}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-1/3 p-4 rounded-xl mr-4 border border-gray-200 shadow-md shadow-gray-300 hover:shadow-blue-300 cursor-pointer">
          <div className="flex text-xl font-extrabold p-2">
            <CalendarTodayIcon /> 
            <p className="ml-2">Month</p>
          </div>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="border border-gray-300 text-center p-2 rounded-lg w-10/12 mt-2"
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Bottom Section - Attendance Details */}
      <p className="text-xl font-semibold mb-4 mt-8">
        Attendance Details for {selectedMonth}
      </p>
      <div className="flex flex-col border border-gray-200 rounded-xl shadow-md shadow-gray-300 w-full">
        {/* Headings */}
        <div className="flex flex-row font-semibold p-3 border-b border-gray-200 w-full">
          <div className="w-1/4 flex justify-center items-center">
            <CalendarTodayIcon /> <p className="ml-2">Date</p>
          </div>
          <div className="w-1/4 flex justify-center items-center">
            <AccessTimeIcon /> 
            <p className="ml-2">Check In</p>
          </div>
          <div className="w-1/4 flex justify-center items-center">
            <AccessTimeIcon /> <p className="ml-2">Check Out</p>
          </div>
          <div className="w-1/4 flex justify-center items-center">
            <CheckIcon /> <p className="ml-2">Status</p>
          </div>
        </div>

        {/* Attendance Details Data */}
        {attendanceDetails.map((detail) => (
          <div key={detail.date} className="flex flex-row mb-2 p-1 mt-1">
            <div className="w-1/4 text-center">{detail.date}</div>
            <div className="w-1/4 text-center">{detail.checkIn}</div>
            <div className="w-1/4 text-center">{detail.checkOut}</div>
            <div className="w-1/4 text-center">
              {detail.status === "Present" ? (
                <CheckIcon style={{ color: "#4caf50" }} />
              ) : (
                <CloseIcon style={{ color: "#f44336" }} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendance;
