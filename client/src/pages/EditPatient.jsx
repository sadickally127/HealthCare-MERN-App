import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditPatient() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    diagnosis: "",
  });

  // Fetch the existing patient data
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/patients/${id}`)
      .then((res) => setPatient(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  // Update patient in backend
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${import.meta.env.VITE_API_URL}/api/patients/${id}`, patient)
      .then(() => {
        alert("✅ Patient updated successfully!");
        navigate("/"); // redirect to Patients list
      })
      .catch((err) => console.error("Update failed:", err));
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Edit Patient</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          value={patient.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="age"
          value={patient.age}
          onChange={handleChange}
          placeholder="Age"
          className="border p-2 rounded"
          required
        />
        <select
          name="gender"
          value={patient.gender}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          name="diagnosis"
          value={patient.diagnosis}
          onChange={handleChange}
          placeholder="Diagnosis"
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditPatient;
