import React, { useState } from 'react';
import './App.css';
import AdminDashboard from './components/AdminDashboard';
import CreateDrive from './components/CreateDrive';
import DriveTracking from './components/DriveTracking'; // New import

function App() {
  const [view, setView] = useState('dashboard'); // New state variable

  const renderView = () => {
    if (view === 'dashboard') {
      return <AdminDashboard setView={setView} />;
    } else if (view === 'create-drive') {
      return <CreateDrive setView={setView} />;
    } else if (view === 'track-drives') {
      return <DriveTracking setView={setView} />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setView('dashboard')}>Dashboard</button>
        <button onClick={() => setView('create-drive')}>Create Drive</button>
        <button onClick={() => setView('track-drives')}>Track Drives</button>
      </nav>
      {renderView()}
    </div>
  );
}

export default App;