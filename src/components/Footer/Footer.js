import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link de react-router-dom
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section links">
          <h4>Liens rapides</h4>
          <ul>
            <li><Link to="/About">Accueil</Link></li>
            <li><Link to="/products">Produits</Link></li>
            <li><Link to="/Apropos">À propos</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h4>Contactez-nous</h4>
          <p>Email: <a href="mailto:support@myecommerce.com">support@myecommerce.com</a></p>
          <p>Téléphone: +33 123 456 789</p>
          <p>Adresse: 123 Rue du Commerce, Paris, France</p>
        </div>
        <div className="footer-section social">
          <h4>Suivez-nous</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MyEcommerce. Tous droits réservés. | <Link to="/privacy-policy">Politique de confidentialité</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
