import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import "../css/counter.css";

const ProductDetail = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <Navbar />

      <Container className="m-5">
        <Row>
          <Col md="6" className="d-flex justify-content-center">
            <img 
              className="productImage"
              src="../image/product.png"
              alt="Product"
              width={350}
              height={350}
            />
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title className="fw-bold fs-2">
                  T-shirt Black Series S
                </Card.Title>
                <Card.Text className="fs-5">T-Shirt</Card.Text>
                <Card.Text className="fw-bold fs-4">Rp 80.000</Card.Text>
                <Card.Text className="fw-semibold">
                  Size
                  <select
                    id="option"
                    style={{ width: "250px", marginLeft: "50px" }}
                  >
                    <option>Size M Stock 70</option>
                    <option>Size L Stock 80</option>
                    <option>Size XL Stock 10</option>
                  </select>
                </Card.Text>

                <div className="container">
                  <div className="count">
                    <button className="decrement" onClick={decrementCount}>
                      -
                    </button>
                    <span className="counter">{count}</span>
                    <button className="increment" onClick={incrementCount}>
                      +
                    </button>
                  </div>
                  <Button variant="outline-secondary" className="mb-2">
                    ADD TO CART
                  </Button>
                </div>

                <Card.Text>
                  Description : <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  reiciendis blanditiis earum voluptas dolor repudiandae sed
                  nisi eaque, natus eius commodi inventore amet distinctio odit
                  omnis accusamus iure magni ullam!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default ProductDetail;
