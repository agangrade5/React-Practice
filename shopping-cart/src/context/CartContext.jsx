import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const getLocalCartsData = localStorage.getItem("localStoreCarts");
        return getLocalCartsData ? JSON.parse(getLocalCartsData) : [];
    });

    // Add Product
    const addToCart = ((product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) => {
                    if (item.id === product.id) {
                        return {...item, quantity: item.quantity + 1};
                    } 
                    return item;
                })
            }
            return [...prev, {...product, quantity: 1}]
        });
    });

    // local storage save data
    useEffect(() => {
        localStorage.setItem("localStoreCarts", JSON.stringify(cart))
    }, [cart]);

    //Remove Product
    const removeFromCart = (id) => {
        setCart((prev) => (
            prev.filter((item) => item.id !== id )
        ));
    };

    //Update Quantity
    const updateQuantity = (id, qty) => {
        setCart((prev) => (
            prev.map((item) => (
                (item.id === id) ? {...item, quantity: qty} : item
            ))
        )) 
    }

    //total price
    const totalPrice = cart.reduce((accumulator, item) => (
        accumulator + (item.price * item.quantity)
    ), 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, totalPrice }}>
            { children }
        </CartContext.Provider>
    )
}

// custom hook
export const useCartContext = () => useContext(CartContext);
