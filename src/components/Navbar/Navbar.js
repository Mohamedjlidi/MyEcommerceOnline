import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link de react-router-dom
import { FaGithub } from 'react-icons/fa'; // Importer l'icône GitHub depuis react-icons
import './Navbar.css';

const Navbar = () => {
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

      <ul className="nav-links">
        <li><Link to="/About">Accueil</Link></li> {/* Lien vers la page d'accueil */}
        <li><Link to="/products">Produits</Link></li> {/* Lien vers la page des produits */}
        <li><Link to="/Apropos">À Propos</Link></li> {/* Lien vers la page À propos */}
        <li><Link to="/Services">Services</Link></li> {/* Lien vers la page services */}
        <li><Link to="/Contact">Contact</Link></li> {/* Lien vers la page Contact */}
        {/* Lien GitHub */}
        <li>
          <a href="https://github.com/MoJlidi5680/MyEcommerce" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} /> {/* Affichage de l'icône GitHub */}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
