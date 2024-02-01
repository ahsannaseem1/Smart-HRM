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
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/dashboard/Employees/AddEmployee" element={<AddEmployee></AddEmployee>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
