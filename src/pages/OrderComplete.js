import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProeductCard from "../components/ProductCard";

const OrderComplete = () => {
  return (
    <div>
      <Navbar />

      <Container className="mt-5" style={{ width: "55rem",}}>
        <Card>
          <Card.Body>
            <Card.Title className="fs-3 fw-semibold">ORDER COMPLETE</Card.Title>
            <Card.Text>
              <p className="mb-1">Rangga Alif</p>
              <p className="mb-1">0896435624</p>
              <p className="mb-1">Jawa Barat, Bandung, Kec. Cangkuang, 45672</p>
              <p className="mb-1">Sanggar indah lestari C1 No.34</p>
            </Card.Text>
          </Card.Body>
        </Card>

        <Button variant="primary" style={{ width: "100%" }} href="/product">
          ORDER MORE
        </Button>
      </Container>

      <ProeductCard />

      <Footer />
    </div>
  );
};

export default OrderComplete;
