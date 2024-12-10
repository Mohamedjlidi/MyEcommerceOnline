import React from 'react'; 
import { FaShippingFast, FaRegCreditCard, FaHeadset, FaGift, FaArrowCircleRight, FaCheckCircle } from 'react-icons/fa'; // Importation d'une nouvelle icône
import { Link } from 'react-router-dom'; // Ajout de Link pour la navigation
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h2>Nos Services</h2>
      <div className="services-cards">
        <div className="service-card">
          <FaShippingFast className="service-icon" />
          <h3>Livraison rapide</h3>
          <p>Profitez de notre service de livraison rapide pour recevoir vos produits en un temps record. Nous assurons une livraison dans les meilleurs délais partout, avec un suivi en temps réel de votre commande.</p>
        </div>
        <div className="service-card">
          <FaRegCreditCard className="service-icon" />
          <h3>Paiement sécurisé</h3>
          <p>Des options de paiement sécurisées pour vous garantir une expérience sans souci. Choisissez parmi plusieurs méthodes de paiement de confiance : carte bancaire, PayPal, et plus encore, avec une protection maximale des données.</p>
        </div>
        <div className="service-card">
          <FaHeadset className="service-icon" />
          <h3>Support client 24/7</h3>
          <p>Notre équipe est à votre disposition à toute heure pour répondre à vos questions et résoudre vos problèmes. Le support est rapide, efficace et multicanal, disponible par chat, e-mail ou téléphone.</p>
        </div>
        <div className="service-card">
          <FaGift className="service-icon" />
          <h3>Offres spéciales</h3>
          <p>Bénéficiez de promotions exclusives et d'offres spéciales chaque mois. Ne manquez pas nos ventes flash, réductions, et cadeaux sur de nombreux produits pour récompenser votre fidélité.</p>
        </div>
        <div className="service-card">
          <FaArrowCircleRight className="service-icon" />
          <h3>Facilité d'utilisation</h3>
          <p>Profitez d'une navigation fluide et intuitive sur notre site pour trouver rapidement les produits qui vous intéressent. L'expérience d'achat est simple, rapide, et agréable, grâce à un design responsive adapté à tous vos appareils.</p>
        </div>
        <div className="service-card">
          <FaCheckCircle className="service-icon" />
          <h3>Garantie satisfait ou remboursé</h3>
          <p>Nous offrons une garantie satisfait ou remboursé sur tous nos produits. Si vous n'êtes pas entièrement satisfait, vous pouvez facilement retourner votre achat pour un remboursement intégral.</p>
        </div>
      </div>
      
      {/* Ajout du bouton Explorez nos produits */}
      <footer className="services-footer">
        <Link to="/products" className="services-cta">Explorez nos produits</Link>
      </footer>
    </div>
  );
};

export default Services;
