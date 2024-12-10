import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link pour la navigation
import './Apropos.css'; // Assurez-vous d'ajouter ce fichier CSS pour styliser cette page

const Apropos = () => {
  return (
    <div className="apropos">
      <header className="apropos-header">
        <h1 className="apropos-title">À propos de notre entreprise</h1>
      </header>

      <section className="apropos-intro">
        <p>
          Chez MyEcommerce, nous sommes passionnés par les produits électroniques de qualité. Notre objectif
          est de vous fournir une plateforme d'achat en ligne qui allie praticité, rapidité et fiabilité.
        </p>
      </section>

      <section className="apropos-histoire">
        <h2>Notre Histoire</h2>
        <p>
          Nous avons commencé comme une petite startup avec une idée simple : rendre l'achat de produits électroniques plus accessible et plus
          simple. Grâce à une équipe dévouée et à une technologie avancée, nous avons rapidement gagné la confiance de nos clients à travers le
          monde.
        </p>
      </section>

      <section className="apropos-mission">
        <h2>Notre Mission</h2>
        <p>
          Nous croyons en la qualité avant tout. Chaque produit que nous proposons est rigoureusement sélectionné et testé pour garantir qu'il
          réponde à nos normes strictes. De plus, nous mettons un point d'honneur à offrir un service client irréprochable, pour que votre
          expérience d'achat soit fluide et agréable.
        </p>
      </section>

      <footer className="apropos-footer">
        {/* Remplacer le bouton par un Link */}
        <Link to="/products" className="apropos-cta">Explorez nos produits</Link>
      </footer>
    </div>
  );
};

export default Apropos;
