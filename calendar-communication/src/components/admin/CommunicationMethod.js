// src/components/Admin/CommunicationMethod.js
import React, { useState } from 'react';

const CommunicationMethod = () => {
  const [methods, setMethods] = useState([
    { id: 1, name: 'LinkedIn Post', description: 'Post on LinkedIn', sequence: 1, mandatory: true },
    { id: 2, name: 'LinkedIn Message', description: 'Direct message on LinkedIn', sequence: 2, mandatory: true },
    { id: 3, name: 'Email', description: 'Send an email', sequence: 3, mandatory: true },
    { id: 4, name: 'Phone Call', description: 'Make a phone call', sequence: 4, mandatory: false },
    { id: 5, name: 'Other', description: 'Other communication methods', sequence: 5, mandatory: false },
  ]);

  const [form, setForm] = useState({
    name: '',
    description: '',
    sequence: '',
    mandatory: false,
  });

  const handleAddMethod = () => {
    if (form.name && form.description && form.sequence) {
      setMethods([...methods, { ...form, id: Date.now() }]);
      setForm({ name: '', description: '', sequence: '', mandatory: false });
    } else {
      alert('Please fill all required fields!');
    }
  };

  const handleDeleteMethod = (id) => {
    setMethods(methods.filter(method => method.id !== id));
  };

  return (
    <div>
      <h2>Communication Method Management</h2>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Sequence"
          value={form.sequence}
          onChange={(e) => setForm({ ...form, sequence: parseInt(e.target.value, 10) })}
        />
        <label>
          <input
            type="checkbox"
            checked={form.mandatory}
            onChange={(e) => setForm({ ...form, mandatory: e.target.checked })}
          />
          Mandatory
        </label>
        <button type="button" onClick={handleAddMethod}>Add Method</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Sequence</th>
            <th>Mandatory</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {methods.map(method => (
            <tr key={method.id}>
              <td>{method.name}</td>
              <td>{method.description}</td>
              <td>{method.sequence}</td>
              <td>{method.mandatory ? 'Yes' : 'No'}</td>
              <td>
                <button onClick={() => handleDeleteMethod(method.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommunicationMethod;