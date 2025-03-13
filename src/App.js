import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout"; 
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import PrivacyPolicy from "./pages/Privacypolicy";
import CoursesDetail from "./pages/CoursesDetail";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy/>} />
        <Route path="/course-detail" element={<CoursesDetail/>} />

    
      </Routes>
    </Router>
  );
}

export default App;
