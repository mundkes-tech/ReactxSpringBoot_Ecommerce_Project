import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <h1>Ecommerce</h1>
      <div className="nav-tabs">
        <Link
          to="/"
          className={location.pathname === '/' ? 'tab active' : 'tab'}
        >
          Home
        </Link>

        <Link
          to="/add"
          className={location.pathname === '/add' ? 'tab active' : 'tab'}
        >
          Add Product
        </Link>
      </div>
    </nav>
  )
}

export default Navbar