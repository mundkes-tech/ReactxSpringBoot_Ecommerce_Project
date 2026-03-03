import { useEffect, useState } from 'react'

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
        <div className="product-card" key={p.id}>
          <h3>{p.product_name}</h3>
          <p>{p.description}</p>
          <p><strong>₹{p.price}</strong></p>
          <p>{p.brand} | {p.category}</p>
          <p>Stock: {p.stock_quantity}</p>
        </div>
      ))}
    </div>
  )
}

export default Home