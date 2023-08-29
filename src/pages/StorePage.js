import { Row, Col } from "react-bootstrap";
import { productsArray } from "../products";
import { NavCheckout } from "../components/NavbarCheckout";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from '../components/ProductCard'
import Footer from "../components/Footer";
import './StorePage.css';

const StorePage = () => {
  return (
    <div align="center" id="storefront">
      <NavCheckout />
      <br/>
      <h1 align="center" className="p-3" style={{ color: "black", "paddingTop": "20%" }}>
        What Service Do You Need?
      </h1>
      <Row xs={1} md={2} className="g-2" id="product-container">
        {productsArray.map((product, idx) => (
          <Col align="center" key={product.idx} style={{ color: "black" }}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      <Footer />
    </div>
  );
};

export default StorePage;
