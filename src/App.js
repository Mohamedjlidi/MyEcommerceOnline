import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Dashboard from './components/Dashboard/Dashboard';
import Apropos from './components/Apropos/Apropos';
import Services from './components/Services/Services';
import ProductModal from './components/ProductModal/ProductModal';
import Footer from './components/Footer/Footer';
import AuthPage from './components/AuthPage/AuthPage';

const productsData = [
  { id: 1, name: 'iPhone 13', price: 799.99, image: 'https://img1.lemondeinformatique.fr/fichiers/telechargement/iphone-13-mini.jpeg' },
  { id: 2, name: 'Samsung Galaxy S21', price: 749.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCoTc1CuMEpwnmTPHT4SheJ_22Pms7Wa-m1w&s' },
  { id: 3, name: 'Sony WH-1000XM4', price: 349.99, image: 'https://pomme-z.be/wp-content/uploads/2024/01/macbook-air-13-pouce-m2.jpg' },
  { id: 4, name: 'MacBook Air', price: 999.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiouVRVhmknl2AjzF9HSC_Alro-3bmcK65iw&s' },
  { id: 5, name: 'Nintendo Switch', price: 299.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Nintendo-Switch-wJoyCons-BlRd-Standing-FL.jpg/2560px-Nintendo-Switch-wJoyCons-BlRd-Standing-FL.jpg' },
  { id: 6, name: 'Apple Watch Series 7', price: 399.99, image: 'https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_hero_09142021_big.jpg.large.jpg' },
  { id: 7, name: 'Sony PlayStation 5', price: 499.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmzwYSECSTJmZ_uIEmXyZgNfxGNx5liU_UxQ&s' },
  { id: 8, name: 'Dell XPS 13', price: 1099.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8WUsYPhlM1Dg8l9fAEwYbV9oJtXHGWAhyA&s' },
  { id: 9, name: 'GoPro Hero10', price: 399.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWDvkw4lx5cff-oYDIZsiifpEoFJn-i_468w&s' },
  { id: 10, name: 'Microsoft Surface Laptop 4', price: 899.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMyJ94kV8CPEaB6Na1PbDpZzFDuMebSCF0g&s' },
];

const App = () => {
  const [products, setProducts] = useState(productsData);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (token) => {
    setIsAuthenticated(true);
    localStorage.setItem('authToken', token);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('authToken');
  };

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      {!isAuthenticated ? (
        <AuthPage onLogin={handleLogin} />
      ) : (
        <>
          
          <div>
          <Navbar onLogout={handleLogout} />
            <Routes>  
              <Route path="/" element={<Dashboard products={products} setProducts={setProducts} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/apropos" element={<Apropos />} />
              <Route path="/products" element={<Dashboard products={products} setProducts={setProducts} />} />
              <Route path="/product/:id" element={<ProductModal products={products} />} />
              <Route path="/services" element={<Services />} />
            </Routes>
            <Footer />
          </div>
          
        </>
      )}
    </Router>
  );
};

export default App;
