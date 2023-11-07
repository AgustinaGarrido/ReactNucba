import React from 'react';
import classes from './Footer.module.css'; 

function Footer() {
  return (
    <footer className={classes.footerContainer}>

      <div className={classes.footerContent}>
        <div className= {classes.footerSection}>
          <h3 className={classes.h3}>Contacto</h3>
          <p className={classes.p}>Dirección: Lavalle 123</p>
          <p className={classes.p}>Email: agustinaNatura@gmail.com</p>
          <p className={classes.p}>Teléfono: (123) 456-7890</p>
        </div>
        <div className={classes.footerSection}>
          <h3 className={classes.h3}>Enlaces Rápidos</h3>
          <ul className={classes.ul}>
            <li className={classes.li}>
                <a className={classes.a} >Inicio</a>
            </li>
            <li className={classes.li}>
                <a className={classes.a} >Productos</a>
            </li>
            <li className={classes.li}>
                <a className={classes.a} >Contacto</a>
            </li>
          </ul>
        </div>
        <div className= {classes.footerSection}>
          <h3 className={classes.h3}>Síguenos</h3>
          <div className={classes.socialIcons}>
            <a href="#" className={classes.icon}>Facebook</a>
            <a href="#" className={classes.icon}>Instagram</a>
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        <p className={classes.p} >&copy; {2023} Natura JUJUY. Todos los derechos reservados.</p>
      </div>

    </footer>
  );
}

export default Footer;
