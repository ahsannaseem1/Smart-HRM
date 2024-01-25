// src/components/Dashboard/DashboardContent.jsx
import React, { useState } from "react";
import DashboardStat from "./DashboardCard";

function DashboardContent() {
  const [toDoList, setToDoList] = useState([
    "Complete Monthly Payroll",
    "Schedule Team Building",
    // Add more initial to-do items as needed
  ]);
  const [newTask, setNewTask] = useState("");

  const handleAddToDo = () => {
    if (newTask.trim() !== "") {
      // Add a new item to the to-do list
      setToDoList([...toDoList, newTask.trim()]);
      setNewTask("");
    }
  };

  const handleDeleteToDo = (index) => {
    // Remove the item at the specified index from the to-do list
    const updatedToDoList = [...toDoList];
    updatedToDoList.splice(index, 1);
    setToDoList(updatedToDoList);
  };

  return (
    <div className="p-6 mt-6">
      <h1 className="text-2xl font-extrabold mb-4">Dashboard Overview</h1>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 gap-4">
        <DashboardStat label="Total Employees" value="150" />
        <DashboardStat label="Departments" value="10" />
        <DashboardStat label="Leave Requests" value="5" />
        <DashboardStat label="Loan Requests" value="2" />
      </div>

      {/* Notifications and To-Do List Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 p-4">
        {/* Notifications Section */}
        <div>
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
            {/* Add more notifications as needed */}
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
                <button
                  onClick={() => handleDeleteToDo(index)}
                  className="ml-2 text-red-500"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <div className="flex mt-4">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter new task..."
              className="mr-2 p-2 border rounded-md"
            />
            
            <button
              onClick={handleAddToDo}
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default DashboardContent;
