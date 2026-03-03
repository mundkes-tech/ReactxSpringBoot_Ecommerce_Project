import { useState } from 'react'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

function AddProduct({ onSuccess }) {
  const [formData, setFormData] = useState({
    id: '',
    product_name: '',
    description: '',
    price: '',
    brand: '',
    category: '',
    release_date: '',
    availability: true,
    stock_quantity: '',
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch(`${API_BASE_URL}/addproduct`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        id: Number(formData.id),
        price: Number(formData.price),
        stock_quantity: Number(formData.stock_quantity),
      }),
    })

    onSuccess()
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input name="id" type="number" placeholder="ID" value={formData.id} onChange={handleChange} required />
      <input name="product_name" placeholder="Product Name" value={formData.product_name} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} required />
      <input name="brand" placeholder="Brand" value={formData.brand} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
      <input name="release_date" type="date" value={formData.release_date} onChange={handleChange} required />
      <input name="stock_quantity" type="number" placeholder="Stock Quantity" value={formData.stock_quantity} onChange={handleChange} required />

      <label>
        <input
          name="availability"
          type="checkbox"
          checked={formData.availability}
          onChange={handleChange}
        />
        Available
      </label>

      <button type="submit">Add Product</button>
    </form>
  )
}

export default AddProduct