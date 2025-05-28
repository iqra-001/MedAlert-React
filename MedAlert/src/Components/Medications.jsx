import React, { useState, useEffect } from 'react';
import { FaPills, FaPlus, FaTrash, FaEdit } from 'react-icons/fa';

const API_URL = 'http://localhost:3000/medications';

function Medications() {
  const [medications, setMedications] = useState([]);
  const [newMed, setNewMed] = useState({ name: '', dose: '', time: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchMeds();
  }, []);

  const fetchMeds = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setMedications(data);
  };

  const addMedication = async () => {
    if (!newMed.name || !newMed.dose || !newMed.time) return;
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMed),
    });
    setNewMed({ name: '', dose: '', time: '' });
    fetchMeds();
  };

  const deleteMedication = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    fetchMeds();
  };

  const startEdit = (med) => {
    setNewMed(med);
    setEditingId(med.id);
  };

  const updateMedication = async () => {
    await fetch(`${API_URL}/${editingId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMed),
    });
    setNewMed({ name: '', dose: '', time: '' });
    setEditingId(null);
    fetchMeds();
  };

  return (
    <div className="container">
      <h2><FaPills /> Medication Alert</h2>
      <div>
        <input
          placeholder="Name"
          value={newMed.name}
          onChange={(e) => setNewMed({ ...newMed, name: e.target.value })}
        />
        <input
          placeholder="Dose"
          value={newMed.dose}
          onChange={(e) => setNewMed({ ...newMed, dose: e.target.value })}
        />
        <input
          placeholder="Time"
          value={newMed.time}
          onChange={(e) => setNewMed({ ...newMed, time: e.target.value })}
        />
        <button onClick={editingId ? updateMedication : addMedication}>
          {editingId ? <FaEdit /> : <FaPlus />}
        </button>
      </div>
      <ul>
        {medications.map((med) => (
          <li key={med.id}>
            <strong>{med.name}</strong> {med.dose} @ {med.time}
            <button onClick={() => startEdit(med)}><FaEdit /></button>
            <button onClick={() => deleteMedication(med.id)}><FaTrash /></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Medications;
