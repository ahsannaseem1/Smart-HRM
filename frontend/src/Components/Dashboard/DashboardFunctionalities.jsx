// src/components/Dashboard/DashboardFunctionalities.jsx
import React from "react";
import DashboardStat from "./DashboardStat";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import InputField from "../InputField";


function DashboardFunctionalities({ toDoList, newTask, setNewTask, handleAddToDo, handleDeleteToDo }) {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 rounded-lg p-4">
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
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">To-Do List</h2>
        <ul>
          {toDoList.map((item, index) => (
            <li key={index} className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              {item}
              <DeleteRoundedIcon onClick={() => handleDeleteToDo(index)}></DeleteRoundedIcon>
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
          <AddRoundedIcon onClick={handleAddToDo}></AddRoundedIcon>
          <button
            onClick={handleAddToDo}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardFunctionalities;
