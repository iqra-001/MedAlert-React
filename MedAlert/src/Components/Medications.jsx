import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Medications() {
  const [medications, setMedications] = useState([]);
  const [newMed, setNewMed] = useState({ name: '', dosage: '', time: '' });

  const api = 'http://localhost:3000/medications';

  // READ
  useEffect(() => {
    axios.get(api).then(res => setMedications(res.data));
  }, []);

  // CREATE
  const addMedication = (e) => {
    e.preventDefault();
    axios.post(api, newMed).then(res => {
      setMedications([...medications, res.data]);
      setNewMed({ name: '', dosage: '', time: '' });
    });
  };

  //  DELETE
  const deleteMedication = (id) => {
    axios.delete(`${api}/${id}`).then(() => {
      setMedications(medications.filter(med => med.id !== id));
    });
  };

  //  UPDATE
  const updateMedication = (id, updatedMed) => {
    axios.put(`${api}/${id}`, updatedMed).then(res => {
      setMedications(medications.map(med => (med.id === id ? res.data : med)));
    });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Medications</h2>

      <form onSubmit={updateMedication} className="space-y-2 mb-6">
        <input
          type="text"
          placeholder="Name"
          value={newMed.name}
          onChange={(e) => setNewMed({ ...newMed, name: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Dosage"
          value={newMed.dosage}
          onChange={(e) => setNewMed({ ...newMed, dosage: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Time"
          value={newMed.time}
          onChange={(e) => setNewMed({ ...newMed, time: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <button className="bg-teal-600 text-white px-4 py-2 rounded">Add Medication</button>
      </form>

      <ul className="space-y-3">
        {medications.map((med) => (
          <li key={med.id} className="flex justify-between items-center bg-white p-3 shadow rounded">
            <div>
              <strong>{med.name}</strong> – {med.dosage} at {med.time}
            </div>
            <button onClick={() => deleteMedication(med.id)} className="text-red-500 hover:underline">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
