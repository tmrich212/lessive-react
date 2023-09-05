import { Button } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProducts } from "../products";
import React from "react";
const CartProduct = (props) => {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProducts(id);

    return ( 
        <div style={{"color": "black"}}>
            <h3 style={{"fontFamily": "Ysabeau SC"}}>{productData.title}</h3>
            <p style={{"color": "black", "fontSize": "1.5rem"}}>{quantity} total</p>
            <p style={{"color": "black", "fontSize": "1.5rem"}}>${ (quantity * productData.price).toFixed(2) }</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            <hr />
        </div>
     );
}
 
export default CartProduct;