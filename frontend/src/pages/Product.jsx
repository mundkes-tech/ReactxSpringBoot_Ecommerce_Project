import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api"

function Product() {

  const { id } = useParams()
  const [product, setProduct] = useState(null)

  const loadProduct = async () => {
    const res = await fetch(`${API_BASE_URL}/products/${id}`)
    const data = await res.json()
    setProduct(data)
  }

  useEffect(() => {
    loadProduct()
  }, [id])

  if (!product) return <h2>Loading...</h2>

  return (
    <div className="product-detail">
      <h2>{product.product_name}</h2>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Stock:</strong> {product.stock_quantity}</p>
      <p><strong>Available:</strong> {product.availability ? "Yes" : "No"}</p>
    </div>
  )
}

export default Product