import { useEffect, useState } from "react";
import Card from "./Card";
import styles from "../styles/shop.module.css"

const Shop = () => {
    const [products, setProducts] = useState(() => JSON.parse(localStorage.getItem('products') ?? '[]'));

    useEffect(() => {
        const getItems = async () => {
            const fetchedProducts = await (await fetch('https://fakestoreapi.com/products?limit=5')).json()

            localStorage.setItem('products', JSON.stringify(fetchedProducts));
            setProducts(fetchedProducts);
        }

        if (products.length === 0) getItems();
    }, [products])

    return (
        <>
            <main className={styles.grid} alt='products'>
                {products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </main>
        </>
    )
}

export default Shop;