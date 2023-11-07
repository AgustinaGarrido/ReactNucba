import React from 'react';
import classes  from './Hero.module.css'; 

function Hero() {
  return (
    <div className={classes.heroContainer} >
      <img className={classes.heroImg} src="https://i.pinimg.com/564x/78/ba/0a/78ba0a5c6044df2d4e241dba4b41c501.jpg" alt="Imagen representativa" />
      <div className={classes.heroText}>
        <h1 className={classes.heroH1}>¡Sean bienvenidos a Natura!</h1>
        <p className={classes.heroP}>Aqui puedes ver todos nuestros productos, lanzamientos y mucho más!</p>
      </div>
    </div>
  );
}

export default Hero;
