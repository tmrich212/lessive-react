import { useState } from 'react';
import { Button, Container, Navbar, Modal } from 'react-bootstrap';

 
export const NavCheckout = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <Container style={{"background": 'none'}} align="center" className='justify-content-center'>
        <Navbar expand="sm" id="cart-page" style={{"background": "white"}} align="center">
          <Navbar.Brand href='/' style={{"fontFamily": "Ysabeau SC", "fontSize": "3rem"}}>Lessive</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Button onClick={handleShow}>Cart</Button>
          </Navbar.Collapse>
        </Navbar>

        <Modal show={show} onHide={handleClose}> 
            <Modal.Header closeButton>
            <Modal.Title>Your Cart</Modal.Title>
                <Modal.Body>
                    <h1>Modalll</h1>          
                </Modal.Body>
            </Modal.Header>
        </Modal>
      </Container>
    )
  }
  