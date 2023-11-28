import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from './assets/natura-logo.png';
import menu from './assets/menu.png';
import { useNavigation } from '../context/NavigationContext';

function Navbar() {
  const { isMobile, selectNavItem } = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleNavItemClick = (item) => {
    selectNavItem(item);
    setMenuVisible(false);
  };

  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarLogo}>
        <img src={logo} alt="Logo de la empresa" />
      </div>
      <div className={`${styles.navbarLinks} ${menuVisible && isMobile ? styles.show : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => handleNavItemClick('/')}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/contacto" onClick={() => handleNavItemClick('/contacto')}>
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/about-us" onClick={() => handleNavItemClick('/about-us')}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={() => handleNavItemClick('/products')}>
              Products
            </Link>
          </li>
          
        </ul>
      </div>
      {isMobile && (
        <img
          className={styles.menuIcon}
          src={menu}
          alt="Ícono de menú"
          onClick={toggleMenu}
        />
      )}
      {menuVisible && isMobile && (
        <div className={styles.modalOpened}>
          <ul>
            <li>
              <Link to="/" onClick={() => handleNavItemClick('/')}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/contacto" onClick={() => handleNavItemClick('/contacto')}>
                Contacto
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={() => handleNavItemClick('/about-us')}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={() => handleNavItemClick('/products')}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/medios-de-pago" onClick={() => handleNavItemClick('/medios-de-pago')}>
                Medios de Pago
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
