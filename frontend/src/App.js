import React from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Intro/Home";
import Pricing from "./Components/Intro/Pricing";
import Testimonial from "./Components/Intro/Testimonial";
import WhyUs from "./Components/Intro/WhyUs";
import FAQ from "./Components/Intro/FAQ";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Department from "./Components/Dashboard/Departments/Department";
import Employees from "./Components/Dashboard/Employees/Employees";
import AddEmployee from "./Components/Dashboard/Employees/AddEmployee/AddEmployee";
import AttendancePage from "./Components/Attendance/AttendancePage";
import Leave from './Components/Dashboard/Leave/Leave'
import Jobs from "./Components/Jobs/Jobs";
import Payroll from "./Components/Dashboard/Payroll/Payroll";
import ApplyJob from "./Components/Jobs/ApplyJob";
import Recruitment from "./Components/Dashboard/Recruitment/Recruitment";
import Applicants from "./Components/Dashboard/Recruitment/Applicants";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Intro/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home></Home>
                <Pricing></Pricing>
                <WhyUs></WhyUs>
                <Testimonial></Testimonial>
                <FAQ></FAQ>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/HR/dashboard" element={<Dashboard></Dashboard>} />
          <Route
            path="/dashboard/departments"
            element={<Department></Department>}
          />
          <Route
            path="/dashboard/Employees"
            element={<Employees></Employees>}
          />
          <Route
            path="/Jobs"
            element={<Jobs></Jobs>}
          />
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/dashboard/Employees/AddEmployee" element={<AddEmployee></AddEmployee>}></Route>
          <Route path="/dashboard/attendance" element={<AttendancePage></AttendancePage>}></Route>
          <Route path="/dashboard/leave" element={<Leave></Leave>}></Route>
          <Route path="/dashboard/payroll" element={<Payroll></Payroll>}></Route>
          <Route path="/dashboard/recruitment" element={<Recruitment></Recruitment>}></Route>
          <Route path="/dashboard/recruitment/applicants/:jobId/:organizationId" element={<Applicants></Applicants>}></Route>

          <Route path="/ApplyJob/:orgId/:jobTitle/:jobDescription/:orgName/:jobId" element={<ApplyJob></ApplyJob>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
