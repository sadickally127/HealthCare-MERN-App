import React from 'react';
import { Link } from 'react-router-dom';

export default function PatientList({ patients = [], onDelete }){
  if (!patients.length) return <p>No patients yet.</p>;

  return (

//     <div class="list-group">
//   <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
//     The current link item
//   </a>
//   <a href="#" class="list-group-item list-group-item-action">A second link item</a>
//   <a href="#" class="list-group-item list-group-item-action">A third link item</a>
//   <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
//   <a href="#" class="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
// </div>

    <div class="list-group">
      {patients.map(p => (
        <div class="item-card" key={p._id}>
          <div>
            <strong>{p.name}</strong> <small>({p.gender}, {p.age})</small>
            <div class="muted">{p.diagnosis || '—'}</div>
            <div class="muted">Contact: {p.contact || '—'}</div>
          </div>
          <div class="actions">

<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <Link to={`/edit/${p._id}`}><button type="button" class="btn btn-success" >Edit</button></Link>
            <button type="button" class="btn btn-danger" onClick={() => onDelete(p._id)}>Delete</button></div>
          </div>
        </div>
      ))}
    </div>
  );
}
