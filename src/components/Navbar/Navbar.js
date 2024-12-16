import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture du menu

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    onLogout();
    navigate('/'); // Redirige vers la page d'authentification après la déconnexion
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Bascule l'état du menu
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://static.vecteezy.com/ti/vecteur-libre/t2/12335181-concept-de-magasinage-mobile-un-homme-et-une-femme-achetent-des-choses-dans-la-boutique-en-ligne-via-un-gros-smartphone-commerce-electronique-et-achats-en-ligne-illustrationle-dans-un-style-plat-vectoriel.jpg"
          alt="Logo"
          className="logo-image"
        />
        <div className="logo">MyEcommerce</div>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/about">Accueil</Link></li>
        <li><Link to="/products">Produits</Link></li>
        <li><Link to="/apropos">Propos</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <Link to="/" onClick={handleLogout} className="logout-link">Déconnexion</Link>
        </li>
        <li>
          <a href="https://github.com/MoJlidi5680/my-site-ecommerce" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </li>
      </ul>

      {/* Menu hamburger pour mobile */}
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
