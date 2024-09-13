import { useEffect, useState } from "react";
import Card from "./Card";

const Shop = () => {
    const [products, setProducts] = useState(() => JSON.parse(localStorage.getItem('products') ?? '[]'));

    useEffect(() => {
        const getItems = async () => {
            const fetchedProducts = await (await fetch('https://fakestoreapi.com/products?limit=15')).json()

            localStorage.setItem(fetchedProducts);
            setProducts(fetchedProducts);
        }

        if (products.length === 0) getItems();
    }, [products])

    return (
        <>
            <h1>Shop Page</h1>
            {products.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </>
    )
}

export default Shop;