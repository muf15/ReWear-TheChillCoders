import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import HomePage from './pages/LandingPage.jsx'
import ProductDetailPage from './Components/Itemlisting/ProductDetailPage.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import Admindashboard from './Components/Dashboard/Admindashboard.jsx'
import LoginScreen from './Components/Navbar/LoginScreen.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/user" element={<Dashboard />} />
        <Route path="/admin" element={<Admindashboard />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
};

export default App