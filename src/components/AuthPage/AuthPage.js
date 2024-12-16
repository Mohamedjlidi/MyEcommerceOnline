import React, { useState } from 'react';
import './AuthPage.css';
import Swal from 'sweetalert2'; // Import Swal

const AuthPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous error message
    if (isLogin) {
      await handleLogin();
    } else {
      await handleRegister();
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.status) {
        // Successful login
        Swal.fire({
          title: 'Connexion réussie!',
          text: 'Bienvenue sur votre tableau de bord.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        onLogin(data.token); // Pass the token to the onLogin function
      } else {
        // Failed login
        setErrorMessage(data.message);
        Swal.fire({
          title: 'Erreur de connexion',
          text: data.message,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      setErrorMessage('Une erreur s\'est produite, veuillez réessayer plus tard.');
      Swal.fire({
        title: 'Erreur',
        text: 'Une erreur s\'est produite, veuillez réessayer plus tard.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.status) {
        setIsLogin(true); // Switch to login page after registration
        Swal.fire({
          title: 'Inscription réussie!',
          text: 'Vous pouvez maintenant vous connecter.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      } else {
        setErrorMessage(data.message);
        Swal.fire({
          title: 'Erreur',
          text: data.message,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      setErrorMessage('Une erreur s\'est produite, veuillez réessayer plus tard.');
      Swal.fire({
        title: 'Erreur',
        text: 'Une erreur s\'est produite, veuillez réessayer plus tard.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className="auth-page-container">
      <h1>{isLogin ? 'Login' : 'Register'}</h1>

      <form onSubmit={handleSubmit}>
        <div className="auth-form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="auth-form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="auth-switch">
        {isLogin ? (
          <button onClick={() => setIsLogin(false)}>Register</button>
        ) : (
          <button onClick={() => setIsLogin(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
