import React, { useEffect, useState } from 'react';
import api, {getPatients} from '../api/api';
import PatientList from '../components/PatientList';
import PatientForm from '../components/PatientForm';

export default function Home(){
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadPatients = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/Patients');
      setPatients(data);
    } catch (err) {
      console.error(err);
      alert('Failed to load patients');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPatients();
  }, []);

  const handleCreate = async (payload) => {
    try {
      const { data } = await api.post('/Patients', payload);
      setPatients(prev => [data, ...prev]);
    } catch (err) {
      console.error(err);
      alert('Failed to create patient');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this patient?')) return;
    try {
      await api.delete(`/Patients/${id}`);
      setPatients(prev => prev.filter(p => p._id !== id));
    } catch (err) {
      console.error(err);
      alert('Failed to delete');
    }
  };

  return (
    <div>
      <h1>Patients</h1>
      <PatientForm onCreate={handleCreate} />
      {loading ? <p>Loading...</p> : <PatientList patients={patients} onDelete={handleDelete} />}
    </div>
  );
}
