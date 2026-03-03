import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AddProduct from './components/AddProduct'

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddProduct />} />
        </Routes>
      </main>
    </div>
  )
}

export default App