import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutUs.module.css'; 

function AboutUs() {
  return (
    <>
    <div className={styles.aboutUsContainer}>
      <div className={styles.aboutUsText}>
        <h3>Natura es una empresa brasileña fundada en 1969</h3>
        <p>
          que se dedica a la producción y venta de cosméticos, fragancias y productos de higiene personal. 
          Nuestra misión es promover el bienestar y la belleza, respetando el medio ambiente y la diversidad humana. 
          Ofrecemos productos de alta calidad, elaborados con ingredientes naturales y orgánicos, que cuidan tu piel y tu salud. 
          En nuestra tienda online podrás encontrar una amplia variedad de productos para el cuidado facial, corporal, capilar, maquillaje, perfumes y más. 
          Además, contamos con un sistema de consultoras que te asesorarán y te ayudarán a elegir los productos más adecuados para ti. 
          Natura es más que una marca, es una forma de vivir en armonía con la naturaleza y contigo mismo.
        </p>
      </div>
      <div className={styles.aboutUsImage}>
        <img
          src="https://i.pinimg.com/564x/78/ba/0a/78ba0a5c6044df2d4e241dba4b41c501.jpg"
          alt="Imagen representativa de Natura"
        />
      </div>
    </div>
      <p className={styles.returnLink}>
        <Link className={styles.link} to="/">Volver a Inicio</Link>
      </p>
    </>
  );
}

export default AboutUs;
