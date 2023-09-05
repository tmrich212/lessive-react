import { useContext } from 'react';
import { useState } from 'react';
import { Button, Container, Navbar, Modal } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';
import React from 'react';
 
export const NavCheckout = () => {
    const cart = useContext(CartContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const checkout = async () => {
      await fetch('http://localhost:4000/checkout', {
        method: "POST",
        headers: {
          //allows us to send json data to body
          "Content-Type": 'application/json'
        },
        //passes items to Stripe
        body: JSON.stringify({items: cart.items})
      }).then((response) => {
        return response.json();
      }).then((response) => {
        if(response.url){
          window.location.assign(response.url) //forwarding user to stripe
        }
      })
    }
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
  
       <Container style={{"background": 'none', "width": "90%"}} align="center" className='justify-content-center m-0 p-0'>
        <Navbar expand="sm" id="cart-page" align="center">
          <Navbar.Brand href='/' style={{"fontFamily": "Ysabeau SC", "fontSize": "3rem"}}>Lessive</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Button onClick={handleShow} style={{"background": "#013667", "outline": "none", "fontFamily": "Ysabeau SC"}}>Cart ({productsCount}) Items</Button>
          </Navbar.Collapse>
        </Navbar>

        <Modal show={show} onHide={handleClose}> 
            <Modal.Header closeButton>
              <Modal.Title style={{"color": 'black', "fontFamily": "Ysabeau SC"}}>Your Cart</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                    <>
                      <p style={{"color": "black"}}>Items in your cart:</p>
                      {cart.items.map((currentProduct, idx) => (
                        <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                      ))}
                      <h1 style={{"color": "black"}}>Total: {cart.getTotalCost().toFixed(2)}</h1>
                        
                      <Button variant='success' onClick={checkout} style={{"fontFamily": "Ysabeau SC"}}>Checkout</Button>
                     </>  
                      : <h1 style={{"color": 'black'}}>There are no items in your cart!</h1>  
                    }      
                </Modal.Body>
        </Modal>
     </Container> 
    )
  }
  