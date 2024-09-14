import styles from "../styles/checkout.module.css"
import genStyles from "../styles/general.module.css"

const Checkout = ({ cart, setCart }) => {
    // id, title, price, category, description, image
    const cartObjs = Object.keys(cart).map((key) => (
        cart[key]
    ))

    const removeProduct = (obj) => {
        if (Number(obj.count) === 1) {
            setCart((currentCart) => {
                // eslint-disable-next-line no-unused-vars
                const { [obj.product.id]: omitted, ...rest } = currentCart;
                return rest
            })
        } else {
            setCart((currentCart) => {
                const newCount = Number(currentCart[`${obj.product.id}`].count) - 1;
                return { ...cart, [`${obj.product.id}`]: { count: newCount, product: obj.product } };
            })
        }
    }

    const getTotalCost = () => {
        let total = 0;
        cartObjs.forEach((obj) => {
            total += parseFloat(obj.product.price) * Number(obj.count)
        })

        return total;
    }

    return (
        <>
            <h2 className={genStyles.centerText}>Shopping Cart</h2>
            <main>
                {cartObjs.map((obj, index) => (
                    <section key={index} className={styles.cartRow}>
                        <img src={obj.product.image} alt={obj.product.description} className={styles.img} />
                        <div className={styles.text}>{obj.product.title}</div>
                        <div className={styles.text}>${obj.product.price}</div>
                        <div className={styles.text}>Count: {obj.count}</div>
                        <button type='button' className={styles.button} onClick={() => removeProduct(obj)}>Remove</button>
                    </section>
                ))}
                <section className={styles.total}>
                    {cartObjs.length === 0 ? 'Cart is Empty!' : `Total Cost: ${getTotalCost().toFixed(2)}`}
                </section>
            </main>
        </>
    )
};

export default Checkout;
