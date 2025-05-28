import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCalendarPlus, FaEdit, FaTrash } from 'react-icons/fa';

const API_URL = 'http://localhost:3000/appointments';

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [newApp, setNewApp] = useState({ title: '', date: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    const res = await axios.get(API_URL);
    setAppointments(res.data);
  };

  const addAppointment = async () => {
    if (!newApp.title || !newApp.date) return;
    await axios.post(API_URL, newApp);
    setNewApp({ title: '', date: '' });
    fetchAppointments();
  };

  const updateAppointment = async () => {
    await axios.put(`${API_URL}/${editingId}`, newApp);
    setEditingId(null);
    setNewApp({ title: '', date: '' });
    fetchAppointments();
  };

  const deleteAppointment = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchAppointments();
  };

  const edit = (app) => {
    setNewApp(app);
    setEditingId(app.id);
  };

  return (
    <div>
      <h2><FaCalendarPlus /> Appointments</h2>
      <input placeholder="Title" value={newApp.title} onChange={(e) => setNewApp({ ...newApp, title: e.target.value })} />
      <input type="date" value={newApp.date} onChange={(e) => setNewApp({ ...newApp, date: e.target.value })} />
      <button onClick={editingId ? updateAppointment : addAppointment}>
        {editingId ? <FaEdit /> : <FaCalendarPlus />}
      </button>
      <ul>
        {appointments.map((app) => (
          <li key={app.id}>
            {app.title} – {app.date}
            <button onClick={() => edit(app)}><FaEdit /></button>
            <button onClick={() => deleteAppointment(app.id)}><FaTrash /></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Appointments;