import { Routes, Route } from "react-router-dom";
import HomeLanding from "./pages/homeLanding";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Patients from "./pages/Patients";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLanding />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/patients"
        element={
          <ProtectedRoute>
            <Patients />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
