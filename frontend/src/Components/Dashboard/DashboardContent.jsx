// src/components/Dashboard/DashboardContent.jsx
import React, { useState } from "react";
import DashboardOverview from "./DashboardOverview";
import DashboardFunctionalities from "./DashboardFunctionalities";
import DashboardStat from "./DashboardCard";

function DashboardContent(props) {

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
      <DashboardOverview pageName="Dashboard" />
      <div className="grid grid-cols-2 gap-4">
        <DashboardStat label="Total Employees" value={props.data.totalEmployees} />
        <DashboardStat label="Departments" value={props.data.totalDepartments} />
        <DashboardStat label="Leave Requests" value={props.data.totalLeaveRequest} />
        <DashboardStat label="Loan Requests" value="0" />
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
