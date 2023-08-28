import { useContext } from 'react';
import {Card, Button} from 'react-bootstrap';
import CartProvider, { CartContext } from '../CartContext';


function ProductCard(props){
    const product = props.product;
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);

    return (
        <CartProvider>
        <Card className='m-5' style={{"fontFamily": "Ysabeau SC", "fontWeight": "bold", "width": "20rem", "fontSize": "2rem"}}>
            <Card.Img variant='top' src={product.image} height="250px" width="auto" />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text style={{'color': "black"}}>${product.price}</Card.Text>
                <Button 
                style={{"background": "#013667", "outline": "none"}}
                onClick={() => cart.addOneToCart(product.id)}>Add Service</Button>
            </Card.Body>
        </Card>
        
        </CartProvider>
    )
}
export default ProductCard;