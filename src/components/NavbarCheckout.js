import { useContext } from 'react';
import { useState } from 'react';
import { Button, Container, Navbar, Modal } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';

 
export const NavCheckout = () => {
    const cart = useContext(CartContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
      <Container style={{"background": 'none'}} align="center" className='justify-content-center'>
        <Navbar expand="sm" id="cart-page" style={{"background": "white"}} align="center">
          <Navbar.Brand href='/' style={{"fontFamily": "Ysabeau SC", "fontSize": "3rem"}}>Lessive</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Button onClick={handleShow}>Cart ({productsCount}) Items</Button>
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
                        
                      <Button variant='success' style={{"fontFamily": "Ysabeau SC"}}>Checkout</Button>
                     </>  
                      : <h1 style={{"color": 'black'}}>There are no items in your cart!</h1>  
                    }      
                </Modal.Body>
        </Modal>
      </Container>
    )
  }
  