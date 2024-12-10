import React from 'react';
import Card from '../Card/Card'; // Assurez-vous du chemin correct
import './Cards.css';

const Cards = ({ products, addToCart }) => {
  return (
    <div className='cards'>
      {products.length > 0 ? (
        products.map((product) => (
          <Card 
            key={product.id} 
            product={product} 
            addToCart={addToCart} 
          />
        ))
      ) : (
        <p>Aucun produit trouvé</p>
      )}
    </div>
  );
};

export default Cards;
