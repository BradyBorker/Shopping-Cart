import { useState, useContext } from "react"
import { CartContext } from "../App";
import styles from "../styles/card.module.css"

const Card = ({ product }) => {
    const [counter, setCounter] = useState(0);
    const setCart = useContext(CartContext)
    // id, title, price, category, description, image

    return (
        <div className={styles.card}>
            <img className={styles.image} src={product.image} alt={product.description} />
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>{`$${product.price}`}</div>
            <form className={styles.addToCart}>
                <div className={styles.counter}>
                    <div>-</div>
                    <input type="number" value={counter} />
                    <div>+</div>
                </div>
                <button className={styles.button} type="submit">Add to Cart</button>
            </form>
        </div>
    )
}

export default Card