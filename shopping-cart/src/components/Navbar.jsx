import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">🛒 MyShop</Link>
                <div>
                    <Link className="nav-link d-inline me-3 text-white" to="/">Home</Link>
                    <Link className="nav-link d-inline text-white" to="/cart">Cart (2)</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
