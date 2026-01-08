import React from 'react';
import { useCartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCartContext();

    return (
        <div className="card product-card h-100 shadow-sm">
            {/* Fixed image size */}
            <img
                src={product.image}
                className="card-img-top product-img p-3"
                alt={product.title}
            />

            <div className="card-body d-flex flex-column">
                <h6 className="card-title">
                    {product.title}
                </h6>

                {/* Fixed description length */}
                <p className="card-text text-muted small product-desc">
                    {product.description.slice(0, 80)}...
                </p>

                <p className="mb-1 small">
                    <strong>Category:</strong> {product.category}
                </p>

                <p className="mb-1 small">
                    <strong>Rating:</strong> ⭐ {product.rating.rate} ({product.rating.count})
                </p>

                <h5 className="text-success mt-auto">
                    ₹{product.price}
                </h5>

                <button
                    className="btn btn-primary w-100 mt-2"
                    onClick={() => addToCart(product)}
                >Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
