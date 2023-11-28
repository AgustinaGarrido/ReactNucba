import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.title}>Formulario de contacto</h2>
      <form className={styles.formContainer}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">Nombre:</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="lastName">Apellido:</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows="4" required />
        </div>

        <button type="submit" className={styles.submitButton}>
          Enviar
        </button>
      </form>

      <p className={styles.buttonReturn}>
        <Link to="/" className={styles.returnLink}>
          Volver a Inicio
        </Link>
      </p>
    </div>
  );
}

export default Contact;
