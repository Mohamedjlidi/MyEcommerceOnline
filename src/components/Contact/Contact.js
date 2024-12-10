import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    userName: '',  // Le nom de l'utilisateur
    userEmail: '', // L'email de l'utilisateur
    subject: '',    // L'objet du message
    message: '',    // Le contenu du message
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.userName,  // Nom de l'utilisateur
      from_email: formData.userEmail,  // Email de l'utilisateur
      subject: formData.subject,  // Sujet du message
      message: formData.message,  // Contenu du message
      reply_to: formData.userEmail,  // L'email auquel répondre
    };

    emailjs
      .send(
        'service_ug6e4ep', // Votre Service ID
        'template_91y6yad', // ID de votre template EmailJS
        templateParams,
        'JA-Q5dFUjimfFHIhs' // Votre Public User ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Votre message a été envoyé avec succès !');
          setFormData({ userName: '', userEmail: '', subject: '', message: '' });
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.');
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Contactez-nous</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userName">Votre nom</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            placeholder="Entrez votre nom"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="userEmail">Votre adresse email</label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
            placeholder="Entrez votre email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Objet</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Entrez l'objet de votre message"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Écrivez votre message ici..."
            required
          ></textarea>
        </div>
        <div className="contact-extra-info">
        <p>
          Vous pouvez également nous joindre par email à{' '}
          <a href="mailto:support@myecommerce.com">mohamed.jlidi.5680@gmail.com</a>{' '}
          ou par téléphone au <strong>+216 50 130 813</strong>.
        </p>
      </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
