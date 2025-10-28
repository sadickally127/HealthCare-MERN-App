import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api", // uses your .env base URL
});

// Patients API endpoints
export const getPatients = () => API.get("/patients");
export const createPatient = (data) => API.post("/patients", data);
export const updatePatient = (id, data) => API.put(`/patients/${id}`, data);
export const deletePatient = (id) => API.delete(`/patients/${id}`);


export default API;
