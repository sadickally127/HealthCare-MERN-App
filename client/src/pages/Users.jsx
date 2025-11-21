// client/src/pages/Users.jsx
import React, { useEffect, useState } from "react";
import api from "../api/api";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
    role: "receptionist",
  });

  const load = async () => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/users", form);
    setForm({ name: "", username: "", password: "", role: "receptionist" });
    load();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Users (Admin)</h2>

      <form
        onSubmit={submit}
        className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-3"
      >
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="p-2 border rounded"
        />
        <input
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="p-2 border rounded"
        />
        <input
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="p-2 border rounded"
        />
        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="p-2 border rounded"
        >
          <option value="receptionist">Receptionist</option>
          <option value="nurse">Nurse</option>
          <option value="doctor">Doctor</option>
          <option value="admin">Admin</option>
        </select>
        <div className="md:col-span-4">
          <button className="px-4 py-2 bg-green-600 text-white rounded">
            Create User
          </button>
        </div>
      </form>

      <div>
        {users.map((u) => (
          <div key={u._id} className="p-3 bg-white rounded mb-2">
            <div className="flex justify-between">
              <div>
                <div className="font-bold">
                  {u.name} ({u.username})
                </div>
                <div className="text-sm text-gray-500">{u.role}</div>
              </div>
              <div>
                <button className="text-red-500">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
