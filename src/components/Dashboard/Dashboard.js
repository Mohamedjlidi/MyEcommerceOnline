import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Cards from '../Cards/Cards';  // Correction du chemin d'importation

const Dashboard = ({ products, setProducts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [newProduct, setNewProduct] = useState({ name: '', price: '', image: '' });
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Mise à jour de filteredProducts chaque fois que products change
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const filterProducts = () => {
    const result = products.filter((product) => {
      const isNameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const isPriceMatch =
        (minPrice === '' || product.price >= parseFloat(minPrice)) &&
        (maxPrice === '' || product.price <= parseFloat(maxPrice));
      return isNameMatch && isPriceMatch;
    });
    setFilteredProducts(result);
  };

  const handleAddProduct = () => {
    // Validation avant l'ajout
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Vérifier si le prix est un nombre valide
    const price = parseFloat(newProduct.price);
    if (isNaN(price) || price <= 0) {
      alert("Veuillez entrer un prix valide.");
      return;
    }

    // Ajouter le produit à la liste existante
    setProducts([
      ...products,
      { id: Date.now(), name: newProduct.name, price: price, image: newProduct.image },
    ]);

    // Réinitialiser les champs
    setNewProduct({ name: '', price: '', image: '' });
  };

  return (
    <div className="dashboard-container">
      {/* Panneau gauche */}
      <div className="sidebar">
        <h2>Recherche de Produit</h2>
        <div>
          <input
            className="input-field"
            type="text"
            placeholder="Rechercher un produit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            className="input-field"
            type="number"
            placeholder="Prix Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            className="input-field"
            type="number"
            placeholder="Prix Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <button className="button" onClick={filterProducts}>Rechercher</button>
        </div>

        <h3>Ajouter un produit</h3>
        <input
          className="input-field"
          type="text"
          placeholder="Nom du produit"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          className="input-field"
          type="number"
          placeholder="Prix"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          className="input-field"
          type="text"
          placeholder="URL de l'image"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />
        <button className="button" onClick={handleAddProduct}>Ajouter</button>
      </div>

      {/* Panneau droit */}
      <div className="product-list">
        <Cards products={filteredProducts} />
      </div>
    </div>
  );
};

export default Dashboard;
