import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
    return (
        <div>
            <div>Products</div>
            <nav>
                <Link to="phone">Phone</Link> | 
                <Link to="laptop"> Laptop</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Products