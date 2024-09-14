import { useState } from "react"
import styles from "../styles/card.module.css"

const Card = ({ product }) => {
    // id, title, price, category, description, image

    return (
        <div className={styles.card}>
            <img className={styles.image} src={product.image} alt={product.description} />
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>{`$${product.price}`}</div>
            <div className={styles.addToCart}>
                <div className={styles.counter}>
                    <div>-</div>
                    <input type="number" />
                    <div>+</div>
                </div>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default Card