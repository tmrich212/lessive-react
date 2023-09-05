import { createContext, useState } from "react";
import { getProducts } from "./products";
import React from "react";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
});


export function CartProvider({children}){
    const [cartProducts, setCartProducts] = useState([]);

    function getProductQuantity(id){
        const quantity = cartProducts.find(product => product.id === id)?.quantity

        if(quantity === undefined){
            return 0
        }

        return quantity;
    }

    function addOneToCart(id){
        const quantity = getProductQuantity(id);

        if(quantity === 0){ //product is not in cart
            setCartProducts(
                [...cartProducts, {
                    id: id,
                    quantity: 1
                }]
            ) 
        } else { //product is in cart
            setCartProducts(
                cartProducts.map(
                    product => product.id === id ?  //if condition
                    { ...product, quantity: product.quantity + 1} //if true return this
                    : product //else return this
                )
            )
        }
    }

    function removeOneFromCart(id){
        const quantity = getProductQuantity(id);
        if(quantity === 1){
            deleteFromCart(id)
        } else {
            setCartProducts(
                cartProducts.map(
                    product => product.id === id ?  //if condition
                    { ...product, quantity: product.quantity - 1} //if true return this
                    : product //else return this
                )
            )
        }
    }

    function deleteFromCart(id){
        setCartProducts(
            cartProducts => cartProducts.filter(currentProduct => {
                return currentProduct.id !== id;
            })
        )
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map(cartItem => {
            const productData = getProducts(cartItem.id)
            totalCost += (productData.price * cartItem.quantity)
        }
        );

        return totalCost;
    }

    const contextValue = {
        items: cartProducts, 
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;


//Context - allows us to store cart data and functions anywhere in app (cart, addToCart, removeCart)
//Provider - gives app access to all the things in context
