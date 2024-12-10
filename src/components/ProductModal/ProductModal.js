import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductModal.css';

const ProductModal = ({ products }) => {
  const { id } = useParams(); // Récupère l'ID du produit
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id)); // Trouve le produit correspondant

  if (!product) {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <p className="error-message">Produit non trouvé</p>
          <button className="modal-close-btn" onClick={() => navigate(-1)}>Retour</button>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={product.image} alt={product.name} className="modal-img" />
        <h2>{product.name}</h2>
        <p>Prix : {product.price}€</p>
        <button className="modal-close-btn" onClick={() => navigate(-1)}>Fermer</button> {/* Retour à la page précédente */}
      </div>
    </div>
  );
};

export default ProductModal;
