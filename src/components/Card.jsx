import { useState, useContext } from "react"
import { CartContext } from "../App";
import styles from "../styles/card.module.css"

const Card = ({ product }) => {
    const [counter, setCounter] = useState(0);
    const setCart = useContext(CartContext)
    // id, title, price, category, description, image

    const updateQuantity = (e) => {
        if (e.target.value.length > 1 && e.target.value[0] === 0) {
            return setCounter(e.target.value.substring(1))
        }

        (e.target.value <= 0) ? setCounter(0) : setCounter(e.target.value)
    }

    const addToCart = (e) => {
        e.preventDefault();
        setCounter(0);
        const input = e.target['0']

        if (Number(counter) !== 0) {
            setCart((cart) => {
                if (cart[product.id] === undefined) {
                    return {
                        ...cart, [`${product.id}`]: {
                            product,
                            count: Number(counter)
                        }
                    }
                };
                return {
                    ...cart, [`${[product.id]}`]: {
                        product,
                        count: Number(counter) + cart[product.id].count
                    }
                };
            })

            input.classList.toggle(styles.goodSubmit);
            setTimeout(() => {
                input.classList.toggle(styles.goodSubmit);
            }, 1000)
        }
    }

    return (
        <div className={styles.card}>
            <img className={styles.image} src={product.image} alt={product.description} />
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>{`$${product.price}`}</div>
            <form className={styles.addToCart} onSubmit={(e) => addToCart(e)}>
                <div className={styles.counter}>
                    <input type="number" value={counter} onChange={(e) => updateQuantity(e)} />
                </div>
                <button className={styles.button} type="submit">Add to Cart</button>
            </form>
        </div>
    )
}

export default Card