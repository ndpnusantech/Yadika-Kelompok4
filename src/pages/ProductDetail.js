import React from "react";
import Navbar from '../components/Navbar'
import { Container, Card, Row, Col } from "react-bootstrap";

const ProductDetail = () => {
  return (
    <div>
      <Navbar />

      <Container>
        <Row>
          <Col md="6" className="d-flex justify-content-center">
            <img src="../image/product.png" alt="Product" width={350} />
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="fw-bold fs-2">T-shirt</Card.Title>
                <Card.Text>T-Shirt</Card.Text>
                <Card.Text className="fw-bold fs-4">Rp 80.000</Card.Text>


                <Card.Text>
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
    </div>
  );
};

export default ProductDetail;
