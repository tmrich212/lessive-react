import { Row, Col } from "react-bootstrap";
import { productsArray } from "../products";
import { NavCheckout } from "../components/NavbarCheckout";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from '../components/ProductCard'

const StorePage = () => {
  return (
    <div align="center">
      <NavCheckout />
      <h1 align="center" className="p-3" style={{ color: "black" }}>
        What Service Do You Need?
      </h1>
      <Row xs={1} md={3} className="g-4" id="product-container">
        {productsArray.map((product, idx) => (
          <Col align="center" key={product.idx} style={{ color: "black" }}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StorePage;
