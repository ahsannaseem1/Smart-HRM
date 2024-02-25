import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import DashboardOverview from "../DashboardOverview";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setEmployeeData } from "../../../state/index";
import CircularProgress from '@mui/material/CircularProgress';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import axios from "axios";

function Leave() {
  const dispatch = useDispatch();

  const [employees, setEmployees] = useState([]);
  const [hrEmail, setHrEmail] = useState([]);
  const [loading, setLoading] = useState(false);
  const data = useSelector((state) => state.EmployeeData);

  useEffect(() => {
    setEmployees(data.employeeData);
    setHrEmail(data.user.email);
  }, [data.employeeData]);

  // Function to handle the approval or rejection of leave request
  // Function to handle the approval or rejection of leave request
  const handleLeaveAction = async (employeeId, leaveId, action) => {
    try {
      // Get the organizationId from the employee data
      const organizationId = employees.find(emp => emp._id === employeeId)?.organizationId;
      setLoading(true);
      const response = await axios.post("http://localhost:5000/AcceptOrRejectLeave", {
        employeeId,
        leaveId,
        status: action,
        organizationId,
        email: hrEmail
      });
      if (response) {
        setLoading(false);
        dispatch(setEmployeeData(response.data));
      }
    } catch (error) {
      setLoading(false);
      console.error("Error occurred while making API call:", error.message);
    }
  };


  return (
    <div className={`flex gap-4 w-full ${loading ? 'pointer-events-none opacity-70' : ''}`}>
      {loading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <CircularProgress color="inherit" />
        </div>
      )}
      <div>
        <Sidebar></Sidebar>
      </div>
      <div className="w-full p-4">
        <DashboardOverview pageName="Leaves"></DashboardOverview>
        <div className="flex items-center mb-4">
          <button
            className="bg-bg-color px-3 py-2 rounded-3xl border-none font-bold text-center cursor-pointer transition duration-400 hover:shadow-lg hover:shadow-gray-400 active:transform active:scale-97 active:shadow-lg"
          >
            <AddIcon className="inline-block" style={{ color: 'white' }} />
            <span className="ml-2 text-white">Apply Leave</span>
          </button>
        </div>
        <div className="flex justify-between gap-8 w-full h-[77%] ">
          <div className="flex flex-col w-1/3 border border-gray-200 rounded-xl shadow-md shadow-gray-300 min-h-full cursor-pointer">
            <div className="font-bold">
              <p className="p-4 text-bold">Leave Calendar</p>
              <hr className="border border-gray-200"></hr>
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
                              <span className="text-sm">{leave.leaveReason}</span>
                            </div>
                            <div className="self-center">
                              <div
                              // className={`rounded-lg p-2 ${
                              //   leave.status === "Approved"
                              //     ? "bg-gray-500"
                              //     : "bg-bg-color"
                              // } text-white`}
                              >
                                <p><span className="font-bold">Days: </span>{leave.leaveDays}</p>
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
            <div className="flex flex-col w-full border border-gray-200 rounded-xl shadow-md shadow-gray-300 min-h-full cursor-pointer">
              <div className="font-bold">
                <p className="p-4">Leave Requests</p>
                <hr className="border border-gray-200"></hr>
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
                                <p className="text-sm">{leave.leaveDate}</p>
                              </div>
                              <div className="self-center">
                                <div className="flex gap-2">
                                  <button
                                    onClick={() =>
                                      handleLeaveAction(
                                        employee._id,
                                        leave._id,
                                        "Approved"
                                      )
                                    }
                                    className="p-2 text-sm bg-green-500 text-white rounded-lg active:text-green-600 active:bg-white"
                                  >
                                    <DoneIcon fontSize="small"></DoneIcon>
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
                                    className="p-2 text-sm bg-red-500 text-white rounded-lg active:text-red-600 active:bg-white"
                                  >
                                    <ClearIcon fontSize="small"></ClearIcon>
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
