import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link to='/' className={styles.link}>Home</Link>
            <div className={styles.shopLinks}>
                <Link to='/shop' className={styles.link}>Shop</Link>
                <Link to='checkout' className={styles.checkoutLink}><img className={styles.svg} src="https://www.svgrepo.com/show/522664/shopping-cart.svg" alt="Shopping Cart" /></Link>
            </div>
        </div>
    )
}

export default Navbar;