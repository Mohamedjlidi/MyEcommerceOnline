import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Dashboard from './components/Dashboard/Dashboard'; // Import Dashboard component
import Apropos from './components/Apropos/Apropos'; // Corrected path for Apropos component
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';




const productsData = [
  { id: 1, name: 'iPhone 13', price: 799.99, image: 'https://img1.lemondeinformatique.fr/fichiers/telechargement/iphone-13-mini.jpeg' },
  { id: 2, name: 'Samsung Galaxy S21', price: 749.99, image: 'https://spacenet.tn/45932-large_default/smartphone-samsung-galaxy-s21-plus-256go--8go--5g-violet.jpg' },
  { id: 3, name: 'Sony WH-1000XM4', price: 349.99, image: 'https://pomme-z.be/wp-content/uploads/2024/01/macbook-air-13-pouce-m2.jpg' },
  { id: 4, name: 'MacBook Air', price: 999.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiouVRVhmknl2AjzF9HSC_Alro-3bmcK65iw&s' },
  { id: 5, name: 'Nintendo Switch', price: 299.99, image: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/en_US/products/hardware/nintendo-switch-red-blue/110478-nintendo-switch-neon-blue-neon-red-front-screen-on-1200x675' },
  { id: 6, name: 'Apple Watch Series 7', price: 399.99, image: 'https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_hero_09142021_big.jpg.large.jpg' },
  { id: 7, name: 'Sony PlayStation 5', price: 499.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmzwYSECSTJmZ_uIEmXyZgNfxGNx5liU_UxQ&s' },
  { id: 8, name: 'Dell XPS 13', price: 1099.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8WUsYPhlM1Dg8l9fAEwYbV9oJtXHGWAhyA&s' },
  { id: 9, name: 'GoPro Hero10', price: 399.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWDvkw4lx5cff-oYDIZsiifpEoFJn-i_468w&s' },
  { id: 10, name: 'Microsoft Surface Laptop 4', price: 899.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMyJ94kV8CPEaB6Na1PbDpZzFDuMebSCF0g&s' },
];

const App = () => {
  const [products, setProducts] = useState(productsData);

  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Dashboard products={products} setProducts={setProducts} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/products" element={<Dashboard products={products} setProducts={setProducts} />} />
          <Route path="/services" element={<Services />} /> {/* Ajouter la route pour la page des services */}
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
