import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Cards from '../Cards/Cards';
import Swal from 'sweetalert2'; // Importation de sweetalert2

const Dashboard = ({ products, setProducts }) => {
  const [cart, setCart] = useState([]); // État pour le panier
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [newProduct, setNewProduct] = useState({ name: '', price: '', image: '' });
  const [filteredProducts, setFilteredProducts] = useState(products);

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

    if (result.length === 0) {
      Swal.fire({
        title: 'Aucun produit trouvé',
        text: 'Désolé, aucun produit ne correspond à votre recherche.',
        icon: 'info',
        confirmButtonText: 'OK',
      });
    }

    setFilteredProducts(result);
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    const price = parseFloat(newProduct.price);
    if (isNaN(price) || price <= 0) {
      alert("Veuillez entrer un prix valide.");
      return;
    }

    // Afficher une alerte de confirmation avant d'ajouter le produit
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: `Voulez-vous vraiment ajouter le produit "${newProduct.name}" ?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
    }).then((result) => {
      if (result.isConfirmed) {
        const newProductAdded = { id: Date.now(), name: newProduct.name, price: price, image: newProduct.image };
        setProducts([...products, newProductAdded]);
        setNewProduct({ name: '', price: '', image: '' });

        // Afficher une alerte après l'ajout
        Swal.fire({
          title: 'Produit ajouté!',
          text: `${newProductAdded.name} a été ajouté avec succès.`,
          icon: 'success',
          confirmButtonText: 'OK'
        });
      }
    });
  };

  const addToCart = (product) => {
    // Afficher une alerte de confirmation avant d'ajouter le produit au panier
    Swal.fire({
      title: 'Voulez-vous ajouter ce produit au panier ?',
      text: `${product.name} - ${product.price}€`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
    }).then((result) => {
      if (result.isConfirmed) {
        // Vérifier si le produit est déjà dans le panier
        const existingProduct = cart.find(item => item.id === product.id);
        
        if (existingProduct) {
          // Si le produit existe déjà, on met à jour la quantité
          setCart(cart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ));
        } else {
          // Si le produit n'existe pas, on l'ajoute au panier avec une quantité de 1
          setCart([...cart, { ...product, quantity: 1 }]);
        }
  
        // Afficher l'alerte après l'ajout du produit
        Swal.fire('Produit ajouté!', '', 'success');
      } else {
        // Si l'utilisateur annule l'ajout, on peut afficher une alerte "Annulé"
        Swal.fire('Annulé', 'Le produit n\'a pas été ajouté au panier.', 'info');
      }
    });
  };
  
  const removeFromCart = (productId) => {
    // Afficher une alerte de confirmation avant de retirer un produit du panier
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Voulez-vous vraiment retirer ce produit du panier ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
    }).then((result) => {
      if (result.isConfirmed) {
        setCart(cart.filter((item) => item.id !== productId)); // Retirer le produit par ID
        Swal.fire('Produit retiré', 'Le produit a été retiré de votre panier.', 'success');
      }
    });
  };

  const increaseQuantity = (productId) => {
    // Augmenter la quantité d'un produit
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (productId) => {
    // Si la quantité est 1, on supprime le produit, sinon on diminue la quantité
    const productToUpdate = cart.find(item => item.id === productId);
    
    if (productToUpdate.quantity === 1) {
      removeFromCart(productId); // Supprimer le produit du panier si la quantité est 1
    } else {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      ));
    }
  };

  return (
    <div className="dashboard-container">
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

        <h3>Panier</h3>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                {item.name} - {item.price}€ - Quantité: {item.quantity}
                <button 
                  className="quantity-btn" 
                  onClick={() => decreaseQuantity(item.id)}
                >
                  - {/* Réduire la quantité */}
                </button>
                <button 
                  className="quantity-btn" 
                  onClick={() => increaseQuantity(item.id)}
                >
                  + {/* Augmenter la quantité */}
                </button>
                <button 
                  className="remove-btn" 
                  onClick={() => removeFromCart(item.id)}
                >
                  ❌ {/* Supprimer le produit */}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Votre panier est vide</p>
        )}
      </div>

      <div className="product-list">
        <Cards products={filteredProducts} addToCart={addToCart} />
      </div>
    </div>
  );
};

export default Dashboard;
