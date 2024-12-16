const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à la base de données MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Utilisateur par défaut de XAMPP
  password: '', // Mot de passe vide par défaut
  database: 'ecommerce_db'
});

// Vérification de la connexion
db.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
    return;
  }
  console.log('Connexion à la base de données MySQL réussie');
});

// Route d'inscription (Registration)
app.post('/register', (req, res) => {
  const { email, password } = req.body;

  // Vérifier si l'email existe déjà
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur du serveur', status: false });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'L\'email existe déjà', status: false });
    }

    // Hachage du mot de passe
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ message: 'Erreur lors du hachage du mot de passe', status: false });
      }

      // Insertion de l'utilisateur dans la base de données
      db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err, results) => {
        if (err) {
          return res.status(500).json({ message: 'Erreur lors de l\'enregistrement', status: false });
        }
        return res.status(201).json({ message: 'Utilisateur enregistré avec succès', status: true });
      });
    });
  });
});

// Route de connexion (Login)
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Recherche de l'utilisateur dans la base de données
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur du serveur', status: false });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: 'Utilisateur non trouvé', status: false });
    }

    const user = results[0];

    // Vérification du mot de passe
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ message: 'Erreur lors de la vérification du mot de passe', status: false });
      }

      if (!isMatch) {
        return res.status(400).json({ message: 'Mot de passe incorrect', status: false });
      }

      // Génération du token JWT
      const token = jwt.sign({ id: user.id, email: user.email }, 'secretkey', { expiresIn: '1h' });

      return res.status(200).json({
        message: 'Connexion réussie',
        status: true,
        token: token
      });
    });
  });
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur backend démarré sur http://localhost:${port}`);
});
