import React from 'react';
import './Card.css';

const Card = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-price">{product.price}€</p>
        <button className="card-btn">Ajouter au panier</button>
      </div>
    </div>
  );
};

export default Card;
