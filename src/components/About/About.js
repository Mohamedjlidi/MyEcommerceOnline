import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link pour la navigation
import './About.css';

const About = () => {
  return (
    <div className="about">
      <header className="about-header">
        <h1 className="about-title">Accueil de MyEcommerce</h1>
      </header>

      <section className="about-intro">
        <p className="about-description">
          MyEcommerce est une boutique en ligne innovante qui vous offre une large sélection de produits électroniques à des prix abordables.
          Notre mission est de rendre l'achat en ligne facile, rapide et fiable, tout en offrant un service client exceptionnel.
        </p>
      </section>

      <section className="about-experience">
        <h2>Notre Expérience</h2>
        <p>
          Découvrez une expérience d'achat unique où chaque produit est soigneusement sélectionné pour répondre à vos besoins.
        </p>
      </section>

      <footer className="about-footer">
        {/* Remplacer le bouton par un Link */}
        <Link to="/products" className="about-cta">Explorez nos produits</Link>
      </footer>
    </div>
  );
};

export default About;
