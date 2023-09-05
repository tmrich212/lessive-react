import { useContext } from 'react';
import {Card, Button, Form, Row, Col} from 'react-bootstrap';
import CartProvider, { CartContext } from '../CartContext';
import React from 'react';

function ProductCard(props){
    const product = props.product;
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);

    return (
        <Card className='m-5' style={{"fontFamily": "Ysabeau SC", "fontWeight": "bold", "width": "20rem", "fontSize": "2rem"}}>
            <Card.Img variant='top' src={product.image} height="250px" width="auto" />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text style={{'color': "black"}}>${product.price}/{product.service}</Card.Text>
                { productQuantity > 0 ? 
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6" style={{ "color": "black", "fontSize": "1.5rem"}}>In Cart: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button sm="6" className='mx-2' onClick={() => cart.addOneToCart(product.id)}>+</Button>
                                <Button sm="6" className='mx-2' onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
                            </Col>
                        </Form>
                        <Button variant='danger' onClick={() => cart.deleteFromCart(product.id)}>Remove from cart</Button>
                    </> :
                    <Button 
                style={{"background": "#013667", "outline": "none"}}
                onClick={() => cart.addOneToCart(product.id)}>Add Service</Button>}
            </Card.Body>
        </Card>
        
       
    )
}
export default ProductCard;