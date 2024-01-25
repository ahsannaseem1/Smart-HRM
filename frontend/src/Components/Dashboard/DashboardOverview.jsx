// src/components/Dashboard/DashboardOverview.jsx
import React, { useState, useEffect } from "react";

function DashboardOverview() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Get the current date
    const today = new Date();

    // Format the date as desired (e.g., "Friday 26th Jan, 2024")
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    // Update the state with the formatted date
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="flex justify-between items-center border-b-2 mb-8">
      <h1 className="text-3xl font-extrabold">Dashboard</h1>
      <p className="text-gray-500">{currentDate}</p>
    </div>
  );
}

export default DashboardOverview;
