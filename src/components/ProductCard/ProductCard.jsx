import React from 'react';
import classes from'./ProductCard.module.css';

function ProductCard(props) {
  const { image, title, description } = props;

  return (
    <div className={classes.productCard}>
      <img className={classes.img} src={image} alt={title} />
      <h2 className={classes.h2}>{title}</h2>
      <p className={classes.p}>{description}</p>
      <button className={classes.button}>Agregar al carrito</button>
    </div>
  );
}

export default ProductCard;
