// src/components/Admin/CompanyManagement.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCompany, editCompany, deleteCompany } from '../../redux/slices/companySlice';

const CompanyManagement = () => {
  const [form, setForm] = useState({ name: '', location: '', linkedin: '', emails: '', phoneNumbers: '', comments: '', periodicity: '' });
  const dispatch = useDispatch();
  const companies = useSelector(state => state.company.companies);

  const handleAdd = () => {
    dispatch(addCompany({ id: Date.now(), ...form }));
    setForm({ name: '', location: '', linkedin: '', emails: '', phoneNumbers: '', comments: '', periodicity: '' });
  };

  return (
    <div>
      <h2>Company Management</h2>
      <form>
        <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
        <input placeholder="LinkedIn" value={form.linkedin} onChange={(e) => setForm({ ...form, linkedin: e.target.value })} />
        <input placeholder="Emails" value={form.emails} onChange={(e) => setForm({ ...form, emails: e.target.value })} />
        <input placeholder="Phone Numbers" value={form.phoneNumbers} onChange={(e) => setForm({ ...form, phoneNumbers: e.target.value })} />
        <textarea placeholder="Comments" value={form.comments} onChange={(e) => setForm({ ...form, comments: e.target.value })} />
        <input placeholder="Periodicity" value={form.periodicity} onChange={(e) => setForm({ ...form, periodicity: e.target.value })} />
        <button type="button" onClick={handleAdd}>Add Company</button>
      </form>
      <ul>
        {companies.map(c => (
          <li key={c.id}>
            {c.name}
            <button onClick={() => dispatch(deleteCompany(c.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyManagement;
