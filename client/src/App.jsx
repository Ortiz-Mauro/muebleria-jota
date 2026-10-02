import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Contacto } from './pages/Contacto';
import './App.css';

export const App = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <Router>
      <div className="app-layout">
        <Navbar cartCount={cartCount} />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
