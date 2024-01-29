import React from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import Pricing from "./Components/Pricing";
import Testimonial from "./Components/Testimonial";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Department from "./Components/Dashboard/Departments/Department";
import Employees from "./Components/Dashboard/Employees/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar></Navbar>
                <Pricing></Pricing>
                <Testimonial></Testimonial>
                <FAQ></FAQ>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
          path="/login" element={<Login></Login>}></Route>
          <Route 
          path="/HR/dashboard" element={<Dashboard></Dashboard>} />
                  <Route 
          path="/dashboard/departments" element={<Department></Department>} />
          <Route 
          path="/dashboard/Employees" element={<Employees></Employees>} />
          <Route
          path="/register" element={<Register></Register>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
} 

export default App;
