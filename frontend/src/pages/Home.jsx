import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

function Home() {
  const [products, setProducts] = useState([])

  const loadProducts = async () => {
    const res = await fetch(`${API_BASE_URL}/products`)
    const data = await res.json()
    setProducts(data)
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <div className="product-grid">
        {products.map((p) => (
          <Link to={`/product/${p.id}`} key={p.id} className="product-card">
              <h3>{p.product_name}</h3>
              <p>{p.description}</p>
              <p><strong>₹{p.price}</strong></p>
              <p>{p.brand} | {p.category}</p>
              <p>Stock: {p.stock_quantity}</p>
          </Link>
        ))}
    </div>
  )
}

export default Home