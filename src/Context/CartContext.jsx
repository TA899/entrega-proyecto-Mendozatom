// src/context/CartContext.jsx

import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    // Agregar productos al carrito
    const addToCart = (product, quantity) => {

        setCart(prevCart => {

            const itemInCart = prevCart.find(
                item => item.id === product.id
            );

            if (itemInCart) {

                return prevCart.map(item =>

                    item.id === product.id

                        ? {
                            ...item,
                            quantity: item.quantity + quantity
                        }

                        : item

                );

            }

            return [

                ...prevCart,

                {
                    ...product,
                    quantity
                }

            ];

        });

    };


    // Vaciar carrito
    const clearCart = () => {
        setCart([]);
    };


    // Cantidad total de productos
    const getCartQuantity = () => {

        return cart.reduce(

            (acc, item) => acc + item.quantity,

            0

        );

    };


    // Precio total del carrito
    const getCartTotal = () => {

        return cart.reduce(

            (acc, item) => acc + item.precio * item.quantity,

            0

        );

    };


    return (

        <CartContext.Provider

            value={{

                cart,

                addToCart,

                clearCart,

                getCartQuantity,

                getCartTotal

            }}

        >

            {children}

        </CartContext.Provider>

    );

};


export const useCart = () => {

    const context = useContext(CartContext);

    if (!context) {

        throw new Error(
            "useCart debe ser usado dentro de un CartProvider"
        );

    }

    return context;

};