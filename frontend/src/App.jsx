import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import AddProduct from "./pages/AddProduct"
import Product from "./pages/Product"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  )
}

export default App