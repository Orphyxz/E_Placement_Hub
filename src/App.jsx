// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';


export default function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<DashboardPage />} />
<Route path="/dashboard" element={<DashboardPage />} />
{/* add other routes like /login etc. */}
</Routes>
</BrowserRouter>
);
}