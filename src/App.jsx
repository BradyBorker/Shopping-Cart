import { useState, createContext } from 'react'
import { useParams } from "react-router-dom"
import Navbar from "./components/Navbar"
import Shop from "./components/Shop";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import "./styles/app.css"

export const CartContext = createContext({});

function App() {
  const [cart, setCart] = useState({});
  const { page } = useParams();

  return (
    <>
      <Navbar />
      {page === undefined && <Home />}
      {page === 'shop' &&
        <CartContext.Provider value={setCart}>
          <Shop />
        </CartContext.Provider>}
      {page === 'checkout' && <Checkout cart={cart} setCart={setCart} />}
    </>
  )
}

export default App;
