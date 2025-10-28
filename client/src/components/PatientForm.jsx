import React, { useState } from 'react';

export default function PatientForm({ onCreate }){
  const [form, setForm] = useState({ name:'', age:'', gender:'', diagnosis:'', contact:'' });

  const change = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if(!form.name || !form.age || !form.gender) return alert('Please fill required fields');
    onCreate({ ...form, age: Number(form.age) });
    setForm({ name:'', age:'', gender:'', diagnosis:'', contact:'' });
  };

  return (
    <form onSubmit={submit} className="card">
      <h3>Add Patient</h3>
      <label>Name <input name="name" value={form.name} onChange={change} required/></label>
      <label>Age <input name="age" type="number" value={form.age} onChange={change} required/></label>
      <label>Gender
        <select name="gender" value={form.gender} onChange={change} required>
          <option value="">Select</option>
          <option>Male</option><option>Female</option><option>Other</option>
        </select>
      </label>
      <label>Contact <input name="contact" value={form.contact} onChange={change} /></label>
      <label>Diagnosis <input name="diagnosis" value={form.diagnosis} onChange={change} /></label>
      <div style={{marginTop:12}}>
        <button type="submit">Create</button>
      </div>
    </form>
  );
}
