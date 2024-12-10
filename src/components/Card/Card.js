import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = ({ product, addToCart }) => {
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product); // Appelle la fonction pour ajouter au panier
    setIsAdded(true);   // Change l'état pour indiquer que le produit a été ajouté
    setTimeout(() => setIsAdded(false), 2000); // Réinitialise l'état après 2 secondes
  };

  const handleImageClick = () => {
    navigate(`/product/${product.id}`); // Redirige vers le composant ProductModal
  };

  return (
    <div className="card">
      <img 
        src={product.image} 
        alt={product.name} 
        className="card-img" 
        onClick={handleImageClick} // Navigue vers ProductModal
      />
      <div className="card-content">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-price">{product.price}€</p>
        <button 
          className={`card-btn ${isAdded ? 'added' : ''}`} 
          onClick={handleAddToCart}
          disabled={isAdded} // Désactive le bouton temporairement après l'ajout
        >
          {isAdded ? 'Ajouté ✔️' : 'Ajouter au panier'}
        </button>
      </div>
    </div>
  );
};

export default Card;
