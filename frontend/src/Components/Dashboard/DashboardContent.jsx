// src/components/Dashboard/DashboardContent.jsx
import React, { useState } from "react";
import DashboardOverview from "./DashboardOverview";
import DashboardFunctionalities from "./DashboardFunctionalities";
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
    <div className="p-6 mt-2">
      <DashboardOverview />
      <div className="grid grid-cols-2 gap-4">
        <DashboardStat label="Total Employees" value="50" />
        <DashboardStat label="Departments" value="10" />
        <DashboardStat label="Leave Requests" value="5" />
        <DashboardStat label="Loan Requests" value="2" />
      </div>
      <DashboardFunctionalities
        toDoList={toDoList}
        newTask={newTask}
        setNewTask={setNewTask}
        handleAddToDo={handleAddToDo}
        handleDeleteToDo={handleDeleteToDo}
      />
    </div>
  );
}

export default DashboardContent;
