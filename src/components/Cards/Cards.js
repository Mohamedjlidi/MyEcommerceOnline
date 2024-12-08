import React from 'react';
import './Cards.css';

const Cards = ({ products }) => {
  return (
    <div className='cards'>
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.id}
           
          >
            <img
              src={product.image}
              alt={product.name}
             
            />
            <h4>{product.name}</h4>
            <p>{product.price.toFixed(2)} €</p>
          </div>
        ))
      ) : (
        <p>Aucun produit trouvé</p>
      )}
    </div>
  );
};

export default Cards;
