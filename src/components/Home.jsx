import styles from "../styles/home.module.css"

const Home = () => {
    return (
        <div className={styles.home}>
            <main className={styles.main}>
                <img src="https://media.istockphoto.com/id/1275827044/vector/grocery-supermarket-interior-with-full-product-shelves-retail-and-consumerism-vector-concept.jpg?s=612x612&w=0&k=20&c=OtJhSNF6ya2VRmBBEn_dIjwVCq2h8PD7u9NRbcyE9jA=" alt="Store" />
                <article className={styles.article}>
                    <h2 className={styles.centerText}>Lorem ipsum</h2>
                    <p className={styles.fontSize}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </article>
            </main>
        </div>
    )
}

export default Home;