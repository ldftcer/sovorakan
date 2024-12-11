import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Loginorregister from './components/Loginorregister';

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Welcome />} /> {/* Главная страница */}
        <Route path="/login" element={<Loginorregister />} /> {/* Login/Register */}
      </Routes>
    </Router>
  );
}

export default App;
