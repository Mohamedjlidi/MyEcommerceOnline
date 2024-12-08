import React from 'react';
import { FaShippingFast, FaRegCreditCard, FaHeadset } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h2>Nos Services</h2>
      <div className="services-cards">
        <div className="service-card">
          <FaShippingFast className="service-icon" />
          <h3>Livraison rapide</h3>
          <p>Profitez de notre service de livraison rapide pour recevoir vos produits en un temps record.</p>
        </div>
        <div className="service-card">
          <FaRegCreditCard className="service-icon" />
          <h3>Paiement sécurisé</h3>
          <p>Des options de paiement sécurisées pour vous garantir une expérience sans souci.</p>
        </div>
        <div className="service-card">
          <FaHeadset className="service-icon" />
          <h3>Support client 24/7</h3>
          <p>Notre équipe est à votre disposition à toute heure pour répondre à vos questions.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
