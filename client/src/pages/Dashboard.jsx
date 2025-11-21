// client/src/pages/Dashboard.jsx
import React, { useEffect, useState, useContext } from "react";
import api from "../api/api";
import { AuthContext } from "../auth/AuthProvider.jsx";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [counts, setCounts] = useState({ patients: 0, users: 0 });
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    async function load() {
      try {
        const [pRes, uRes] = await Promise.all([
          api.get("/patients"),
          api.get("/users"), // admin-only, will fail for non-admins
        ]);
        setCounts({
          patients: pRes.data.length || 0,
          users: Array.isArray(uRes.data) ? uRes.data.length : 0,
        });
      } catch (err) {
        // If /users fails because non-admin, still show patients count if available
        try {
          const pRes = await api.get("/patients");
          setCounts((prev) => ({ ...prev, patients: pRes.data.length || 0 }));
        } catch (e) {
          // ignore
        }
      }
    }
    load();
  }, []);

  return (
    <div className="p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div>
          <span className="mr-4">Hello, {user?.name || user?.username}</span>
          <button onClick={logout} className="bg-gray-200 px-3 py-1 rounded">
            Logout
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-sm text-gray-500">Patients</h3>
          <div className="text-2xl font-bold">{counts.patients}</div>
          <Link to="/patients" className="text-sm text-blue-600">
            Manage patients
          </Link>
        </div>

        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-sm text-gray-500">Users</h3>
          <div className="text-2xl font-bold">{counts.users}</div>
          {user?.role === "admin" && (
            <Link to="/users" className="text-sm text-blue-600">
              Manage users
            </Link>
          )}
        </div>

        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-sm text-gray-500">Quick Actions</h3>
          <div className="mt-3 space-y-2">
            <Link className="block text-sm text-blue-600" to="/patients">
              Add patient
            </Link>
            {user?.role === "admin" && (
              <Link className="block text-sm text-blue-600" to="/users">
                Create user
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
