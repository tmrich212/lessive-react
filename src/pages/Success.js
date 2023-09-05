import { Link } from "react-router-dom";
import { NavCheckout } from '../components/NavbarCheckout'

const Success = () => {
    return ( 
        <>
        <NavCheckout />
        <h1 style={{"color": "black"}}>Thank you for your purchase!</h1>
        <Link to="/" style={{"color": "black"}}>return to home</Link>
        </>
     );
}
 
export default Success;