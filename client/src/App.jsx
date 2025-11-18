import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import EditPatient from "./pages/EditPatient";
import Patients from "./pages/Patients";
<Route path="/landing" element={<homeLanding />} />


function App() {
  return (
    <>
      <nav className="bg-gray-200 p-4 flex justify-between">
        <h2 className="font-bold">HealthCare MERN App</h2>
        <Link to="/">Patients</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Patients />} />
        <Route path="/edit/:id" element={<EditPatient />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
