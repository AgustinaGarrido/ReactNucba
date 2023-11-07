import React, { useState } from 'react';
import styles from './Navbar.module.css'; 
import logo from './assets/natura-logo.png'
import menu from './assets/menu.png'

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
    console.log(menuVisible);
  };

  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarLogo}>
        <img src={logo} alt="Logo de la empresa" />
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
        src={menu} 
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
