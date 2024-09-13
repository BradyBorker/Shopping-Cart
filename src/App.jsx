// import { useState } from 'react'
import { useParams } from "react-router-dom"
import Navbar from "./components/Navbar"
import Shop from "./components/Shop";
import Home from "./components/Home";
import "./styles/app.css"

function App() {
  const { page } = useParams();
  const isShopPage = page === 'shop';

  return (
    <>
      <Navbar />
      {isShopPage ? <Shop /> : <Home />}
    </>
  )
}

export default App
