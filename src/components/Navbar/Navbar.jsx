import React, { useState } from 'react';
import styles from './Navbar.module.css'; // Importa el archivo CSS como 'styles'

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
    console.log(menuVisible);
  };

  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarLogo}>
        <img src="../../public/natura-png-transparente.png" alt="Logo de la empresa" />
      </div>
      <div className={`${styles.navbarLinks} ${menuVisible ? styles.show : ''}`}>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
          <li>
            <a href="/medios-de-pago">Medios de Pago</a>
          </li>
        </ul>
      </div>
      <img
        className={`${styles.menuIcon} ${!menuVisible ? styles.closeIcon : ''}`}
        src="../../public/menu.png" /* Cambia a la ruta de tu ícono de menú */
        alt="Ícono de menú"
        onClick={toggleMenu}
      />
      {menuVisible && (
        <div className={styles.modalOpened}>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
            <li>
              <a href="/medios-de-pago">Medios de Pago</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
