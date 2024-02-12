import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import DashboardOverview from "../DashboardOverview";
import { useSelector } from "react-redux";
import axios from "axios";

function Leave() {
  const [employees, setEmployees] = useState([]);
  const data = useSelector((state) => state.EmployeeData);

  useEffect(() => {
    setEmployees(data.employeeData);
  }, [data.employeeData]);

  // Function to handle the approval or rejection of leave request
  // Function to handle the approval or rejection of leave request
const handleLeaveAction = async (employeeId, leaveId, action) => {
  try {
    // Log the leave request details
    console.log("Employee ID:", employeeId);
    console.log("Leave ID:", leaveId);
    console.log("Action:", action);

    // Get the organizationId from the employee data
    const organizationId = employees.find(emp => emp._id === employeeId)?.organizationId;

    // Make an API call using Axios
    // const response = await axios.post("http://localhost:5000/AcceptOrRejectLeave", {
    //   employeeId,
    //   leaveId,
    //   action,
    //   organizationId,
    // });

    // console.log("API Response:", response);
  } catch (error) {
    console.error("Error occurred while making API call:", error.message);
  }
};


  return (
    <div className="flex gap-4 w-full">
      <div>
        <Sidebar></Sidebar>
      </div>
      <div className="w-full p-4">
        <DashboardOverview pageName="Leave"></DashboardOverview>

        <div className="flex gap-8 w-full h-4/5">
          <div className="flex flex-col w-1/3 border border-black rounded-md shadow-lg min-h-full">
            <div className="font-bold">
              <p className="p-4">Leave Calendar</p>
              <hr className="border border-black"></hr>
            </div>

            {/* Display approved leave requests on Leave Calendar */}
            {employees &&
              employees.length > 0 &&
              employees.map(
                (employee) =>
                  employee.leaveRequest &&
                  employee.leaveRequest.length > 0 &&
                  employee.leaveRequest.map(
                    (leave) =>
                      leave.status === "Approved" && (
                        <div key={leave._id}>
                          <div className="flex justify-between w-full gap-2 p-4">
                            <div>
                              <p className="font-bold">{employee.name}</p>
                              <span className="text-sm">{leave.leaveDate}</span>
                            </div>
                            <div>
                              <div
                                className={`rounded-lg p-2 ${
                                  leave.status === "Approved"
                                    ? "bg-gray-500"
                                    : "bg-bg-color"
                                } text-white`}
                              >
                                <p>Days: {leave.leaveDays}</p>
                              </div>
                            </div>
                          </div>
                          <hr className="border"></hr>
                        </div>
                      )
                  )
              )}
          </div>
          <div className="w-2/3">
            <div className="flex flex-col w-full border border-black rounded-md shadow-lg min-h-full">
              <div className="font-bold">
                <p className="p-4">Leave Requests</p>
                <hr className="border border-black"></hr>
              </div>
              {/* Display pending leave requests in the Leave Requests section */}
              {employees &&
                employees.length > 0 &&
                employees.map(
                  (employee) =>
                    employee.leaveRequest &&
                    employee.leaveRequest.length > 0 &&
                    employee.leaveRequest.map(
                      (leave) =>
                        leave.status === "pending" && (
                          <div key={leave._id}>
                            <div className="flex justify-between w-full gap-2 p-4">
                              <div>
                                <p className="font-bold">{employee.name}</p>
                                <span className="text-sm">
                                  {leave.leaveReason}
                                </span>
                              </div>
                              <div className="self-center">
                                <p>{leave.leaveDate}</p>
                              </div>
                              <div>
                                <div className="flex gap-2">
                                  <button
                                    onClick={() =>
                                      handleLeaveAction(
                                        employee._id,
                                        leave._id,
                                        "Approved"
                                      )
                                    }
                                    className="p-2 bg-green-500 text-white rounded-lg active:text-green-600 active:bg-white"
                                  >
                                    Approve
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleLeaveAction(
                                        employee._id,
                                        leave._id,
                                        "reject"
                                      )
                                    }
                                    className="p-2 bg-red-500 text-white rounded-lg active:text-red-600 active:bg-white"
                                  >
                                    Reject
                                  </button>
                                </div>
                              </div>
                            </div>
                            <hr className="border"></hr>
                          </div>
                        )
                    )
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leave;
