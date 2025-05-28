import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function DashBoard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-teal-700 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold mb-6">MedAlert</h2>
        <nav className="flex flex-col space-y-4">
        <Link to="/dashboard/medications" className="hover:underline">Medications</Link>
<Link to="/dashboard/calendar" className="hover:underline">Calendar</Link>
<Link to="/dashboard/profile" className="hover:underline">Profile</Link>
<Link to="/dashboard/appointments" className="hover:underline">Appointments</Link>



        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 bg-teal-50 p-6">
        <Outlet /> {/* Renders the nested route here */}
      </main>
    </div>
  );
}
