import React from "react";
import Home from "./pages/home";
import EditPatient from "./pages/EditPatient";
import Patients from "./pages/Patients";

function App() {
  return (
    <Router>
      <nav className="bg-gray-200 p-4 flex justify-between">
        <h2 className="font-bold text-lg">Clinic Booking — Admin</h2>
        <div className="space-x-4">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <Link to="/patients" className="text-blue-600 hover:underline">
            Patients
          </Link>
        </div>
      </nav>

      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/edit/:id" element={<EditPatient />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
