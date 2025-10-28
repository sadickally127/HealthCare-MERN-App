import React from 'react';
import { Link } from 'react-router-dom';

export default function PatientList({ patients = [], onDelete }){
  if (!patients.length) return <p>No patients yet.</p>;

  return (
    <div className="list">
      {patients.map(p => (
        <div className="item card" key={p._id}>
          <div>
            <strong>{p.name}</strong> <small>({p.gender}, {p.age})</small>
            <div className="muted">{p.diagnosis || '—'}</div>
            <div className="muted">Contact: {p.contact || '—'}</div>
          </div>
          <div className="actions">
            <Link to={`/edit/${p._id}`}><button>Edit</button></Link>
            <button onClick={() => onDelete(p._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
