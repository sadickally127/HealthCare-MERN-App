import { useEffect, useState } from "react";
import { getPatients, createPatient, deletePatient } from "../api/api";

function Patients() {
  const [patients, setPatients] = useState([]);
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    gender: "",
    diagnosis: "",
  });

  // Fetch all patients
  const fetchPatients = async () => {
    try {
      const { data } = await getPatients();
      setPatients(data);
    } catch (err) {
      console.error("Error fetching patients:", err.message);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  // Create new patient
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPatient(newPatient);
      setNewPatient({ name: "", age: "", gender: "", diagnosis: "" });
      fetchPatients();
    } catch (err) {
      console.error("Error adding patient:", err.message);
    }
  };

  // Delete patient
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this patient?")) {
      await deletePatient(id);
      fetchPatients();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Patient Records</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <input
          className="border p-2 m-2"
          placeholder="Name"
          value={newPatient.name}
          onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
        />
        <input
          className="border p-2 m-2"
          placeholder="Age"
          value={newPatient.age}
          onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })}
        />
        <input
          className="border p-2 m-2"
          placeholder="Gender"
          value={newPatient.gender}
          onChange={(e) => setNewPatient({ ...newPatient, gender: e.target.value })}
        />
        <input
          className="border p-2 m-2"
          placeholder="Diagnosis"
          value={newPatient.diagnosis}
          onChange={(e) => setNewPatient({ ...newPatient, diagnosis: e.target.value })}
        />
        <button className="bg-blue-600 text-white p-2 rounded">Add</button>
      </form>

      <ul>
        {patients.map((p) => (
          <li key={p._id} className="flex justify-between border p-2 m-2">
            <span>{p.name} ({p.age}, {p.gender}) - {p.diagnosis}</span>
            <button
              onClick={() => handleDelete(p._id)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Patients;
