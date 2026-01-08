import React from 'react'
import { useCartContext } from '../context/CartContext'

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, totalPrice } = useCartContext();

    return (
        <div className="container">
            <h2 className="mb-3">Your Cart</h2>
            {
                cart.length === 0 ? (
                    <div className="alert alert-info">No items in cart</div>
                ) : (
                    <>
                        <table className="table table-bordered align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Subtotal</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.title}</td>
                                            <td>₹{item.price}</td>
                                            <td style={{ width: '100px' }}>
                                                <input
                                                    className="form-control text-center"
                                                    min="1"
                                                    type="number"
                                                    value={item.quantity}
                                                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                                                />
                                            </td>
                                            <td>₹{item.price * item.quantity}</td>
                                            <td>
                                                <button 
                                                    className="btn btn-outline-danger btn-sm"
                                                    onClick={() => removeFromCart(item.id)}
                                                >Remove</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className="text-end fw-bold fs-5">Total: ₹{totalPrice.toFixed(2)}</div>
                    </>
                )
            }
        </div>
    )
}

export default Cart