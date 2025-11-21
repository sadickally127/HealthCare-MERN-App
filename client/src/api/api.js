import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api", // uses your .env base URL
});

// Patients API endpoints
export const getPatients = () => API.get("/patients");
export const createPatient = (data) => API.post("/patients", data);
export const updatePatient = (id, data) => API.put(`/patients/${id}`, data);
export const deletePatient = (id) => API.delete(`/patients/${id}`);

// client/src/api/api.js
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:9000";

const api = axios.create({
  baseURL: API_BASE + "/api",
  headers: { "Content-Type": "application/json" },
});

// Attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
