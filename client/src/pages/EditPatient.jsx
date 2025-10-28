import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/api';

export default function EditPatient(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name:'', age:'', gender:'', diagnosis:'', contact:'' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await api.get(`/patients/${id}`);
        setForm({ name:data.name, age:data.age, gender:data.gender, diagnosis:data.diagnosis || '', contact:data.contact || '' });
      } catch (err) {
        console.error(err);
        alert('Failed to load patient');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/patients/${id}`, form);
      alert('Patient updated');
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Update failed');
    }
  };

  if (loading) return <p>Loading patient...</p>;

  return (
    <div>
      <h2>Edit Patient</h2>
      <form onSubmit={onSubmit} className="card">
        <label>Name <input name="name" value={form.name} onChange={onChange} required /></label>
        <label>Age <input name="age" type="number" value={form.age} onChange={onChange} required /></label>
        <label>Gender
          <select name="gender" value={form.gender} onChange={onChange} required>
            <option value="">Select</option>
            <option>Male</option><option>Female</option><option>Other</option>
          </select>
        </label>
        <label>Contact <input name="contact" value={form.contact} onChange={onChange} /></label>
        <label>Diagnosis <input name="diagnosis" value={form.diagnosis} onChange={onChange} /></label>
        <div style={{marginTop:12}}>
          <button type="submit">Save</button>
          <button type="button" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
