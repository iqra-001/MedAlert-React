import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement);

function Profile() {
  const barData = {
    labels: ['Paracetamol', 'Ibuprofen', 'Aspirin'],
    datasets: [
      {
        label: 'Medication Taken',
        data: [12, 8, 5],
        backgroundColor: ['#4caf50', '#2196f3', '#f44336']
      }
    ]
  };

  const pieData = {
    labels: ['Completed Appointments', 'Missed Appointments'],
    datasets: [
      {
        data: [15, 3],
        backgroundColor: ['#66bb6a', '#ef5350']
      }
    ]
  };

  return (
    <div>
      <h2>📈 Profile</h2>
      <Bar data={barData} />
      <Pie data={pieData} />
    </div>
  );
}

export default Profile;