import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(response => response.json())
            .then(json => setProducts(json))
    }, []);

    return (
        <div className="row">
            {
                products.length === 0 ? (
                    <p>No products found</p>
                ) : (
                    products.map((product) => (
                        <div key={product.id} className="col-md-3 mb-4">
                            <ProductCard product={product} />
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default ProductList
