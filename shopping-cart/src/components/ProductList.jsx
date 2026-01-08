import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then((response) => response.json())
            .then((json) => {
                setProducts(json);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="text-center my-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2">Loading products...</p>
            </div>
        );
    }

    if (products.length === 0) {
        return <div className="alert alert-info">No products found!</div>;
    }

    return (
        <div className="row">
            {products.map((product) => (
                <div key={product.id} className="col-md-3 mb-4">
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    );
}

export default ProductList
