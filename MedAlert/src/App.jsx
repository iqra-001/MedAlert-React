import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import SignUp from './Components/SignUp';
import DashBoard from './Components/DashBoard';
import Medications from './Components/Medications';
import Calendar from './Components/Calender';
import Profile from './Components/Profile';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Nested Dashboard */}
        <Route path="/dashboard" element={<DashBoard />}>
          <Route path="medications" element={<Medications />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    
  );
}

export default App;
