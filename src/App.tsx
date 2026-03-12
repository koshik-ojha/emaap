import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login, SignUp, Dashboard, DashboardHome, CertificateList, AddCertificate, CertificateView, GATCList, AddGATC, InstrumentRedirect } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* Dashboard Module - Nested Routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="certificate-list" element={<CertificateList />} />
            <Route path="add-certificate" element={<AddCertificate />} />
            <Route path="certificate-view" element={<CertificateView />} />
            <Route path="gatc-list" element={<GATCList />} />
            <Route path="add-gatc" element={<AddGATC />} />
            <Route path="energy-meters" element={<InstrumentRedirect instrumentType="Energy Meter" />} />
            <Route path="gas-meters" element={<InstrumentRedirect instrumentType="Gas Meter" />} />
            <Route path="tape-measures" element={<InstrumentRedirect instrumentType="Tape Measure" />} />
            <Route path="nawi-class-iii" element={<InstrumentRedirect instrumentType="Non-Automatic Weighing Instrument of Accuracy Class" />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
