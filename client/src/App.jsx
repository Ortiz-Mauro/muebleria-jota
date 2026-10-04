import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Contacto } from './pages/Contacto';
import './App.css';

export const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  return (
    <Router>
      <div className="app-layout">
        <Navbar cartCount={cart.length} />
        
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  selectedProduct={selectedProduct}
                  onSelectProduct={setSelectedProduct}
                  onAddToCart={addToCart}
                  onRemoveFromCart={removeFromCart}
                />
              }
            />
            <Route
              path="/productos"
              element={
                <Home
                  selectedProduct={selectedProduct}
                  onSelectProduct={setSelectedProduct}
                  onAddToCart={addToCart}
                  onRemoveFromCart={removeFromCart}
                />
              }
            />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
