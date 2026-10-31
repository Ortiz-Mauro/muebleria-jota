import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Productos } from './pages/Productos';
import { ProductoDetalle } from './pages/ProductoDetalle';
import { Contacto } from './pages/Contacto';
import { CrearProducto } from './pages/CrearProducto';
import { EditarProducto } from './pages/EditarProducto';
import { NotFound } from './pages/NotFound';
import './App.css';

export const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (product) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item._id !== product._id)
    );
  };

  return (
    <Router>
      <div className="app-layout">
        <Navbar cartCount={cart.length} />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route
              path="/productos/:id"
              element={
                <ProductoDetalle
                  onAddToCart={addToCart}
                  onRemoveFromCart={removeFromCart}
                />
              }
            />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/admin/crear-producto" element={<CrearProducto />} />
            <Route path="/admin/editar-producto/:id" element={<EditarProducto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
