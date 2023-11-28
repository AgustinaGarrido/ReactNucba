import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductsList.module.css'

function ProducsList () {
    return (
        <>
            <div className={styles.title}>
                <h2>Todos los productos</h2>
            </div>
            <div className={styles.productsContainer}>
                <ProductCard
                    image="https://i.pinimg.com/564x/58/8a/91/588a91c526fbea93c0a0335f27114b1e.jpg"
                    title="Perfume Liberta"
                    description="perfume de lata duracion"
                />
                <ProductCard
                    image="https://i.pinimg.com/564x/bf/0c/85/bf0c851315182b12f039bd609979e828.jpg"
                    title="Perfume Homem Dom"
                    description="perfume de larga duracion"
                />
                <ProductCard
                    image="https://i.pinimg.com/564x/fd/b6/89/fdb689a506bcf1c9274743bdb627eb4b.jpg"
                    title="Perfume Homem Neo"
                    description="perfume de larga duracion"
                />
                <ProductCard
                    image="https://i.pinimg.com/564x/58/8a/91/588a91c526fbea93c0a0335f27114b1e.jpg"
                    title="Perfume Liberta"
                    description="perfume de lata duracion"
                />
                <ProductCard
                    image="https://i.pinimg.com/564x/bf/0c/85/bf0c851315182b12f039bd609979e828.jpg"
                    title="Perfume Homem Dom"
                    description="perfume de larga duracion"
                />
                <ProductCard
                    image="https://i.pinimg.com/564x/fd/b6/89/fdb689a506bcf1c9274743bdb627eb4b.jpg"
                    title="Perfume Homem Neo"
                    description="perfume de larga duracion"
                />
            </div>        

        
        </>
    )
}

export default ProducsList;