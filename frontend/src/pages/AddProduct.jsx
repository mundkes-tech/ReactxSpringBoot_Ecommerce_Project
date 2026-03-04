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
    image: null
  })

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target

    setFormData({
      ...formData,
      [name]: type === 'checkbox'
        ? checked
        : type === 'file'
        ? files[0]
        : value
    })
  }
  const handleSubmit = async (e) => {
  e.preventDefault()

  const data = new FormData()

  const product = {
    id: Number(formData.id),
    product_name: formData.product_name,
    description: formData.description,
    price: Number(formData.price),
    brand: formData.brand,
    category: formData.category,
    release_date: formData.release_date,
    availability: formData.availability,
    stock_quantity: Number(formData.stock_quantity)
  }

  data.append(
    "product",
    new Blob([JSON.stringify(product)], { type: "application/json" })
  )

  data.append("image", formData.image)

  try {
    const res = await fetch(`${API_BASE_URL}/addproduct`, {
      method: "POST",
      body: data
    })

    if (res.ok) {
      alert("✅ Product added successfully!")

      // reset form
      setFormData({
        id: '',
        product_name: '',
        description: '',
        price: '',
        brand: '',
        category: '',
        release_date: '',
        availability: true,
        stock_quantity: '',
        image: null
      })

    } else {
      alert("❌ Failed to add product")
    }

  } catch (error) {
    console.error(error)
    alert("❌ Error connecting to server")
  }
}

  return (
    <div className="form-section">

      <h2>Add Product</h2>

      <form className="product-form" onSubmit={handleSubmit}>

        <input
          name="id"
          type="number"
          placeholder="ID"
          value={formData.id}
          onChange={handleChange}
          required
        />

        <input
          name="product_name"
          placeholder="Product Name"
          value={formData.product_name}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
          required
        />

        <input
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <input
          name="release_date"
          type="date"
          value={formData.release_date}
          onChange={handleChange}
          required
        />

        <input
          name="stock_quantity"
          type="number"
          placeholder="Stock Quantity"
          value={formData.stock_quantity}
          onChange={handleChange}
          required
        />

        {/* Image Upload Field */}
        <input
          name="image"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />

        <label className="checkbox-row">
          <input
            name="availability"
            type="checkbox"
            checked={formData.availability}
            onChange={handleChange}
          />
          Available
        </label>

        <button type="submit" className="primary-btn">
          Add Product
        </button>

      </form>

    </div>
  )
}

export default AddProduct