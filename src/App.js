import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout"; 
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import PrivacyPolicy from "./pages/Privacypolicy";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy/>} />
    
      </Routes>
    </Router>
  );
}

export default App;
