import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../css/order.css";

function BasicExample() {
  return (
    <div>
      <Navbar />
      <Container className="form">
        <Row>
          <Col>
            <Form className="order">
              <h1 className="fs-3">BILLING DETAIL</h1>
              <hr />
              <Form.Label>Recipient's name</Form.Label>
              <Form.Control type="text" placeholder="Nama Penerima" />
              <div className="wp">
                <Form.Label>Province</Form.Label>
                <Form.Control type="text" placeholder="Provinsi" />
              </div>
              <div className="bungkus">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Provinsi" />
              </div>
              <div className="pw">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Kota" />
              </div>
              <Form.Label>Post Code</Form.Label>
              <Form.Control type="text" placeholder="Kode Post" />
              <Form.Label>Phone</Form.Label>
              <Form.Control type="number" placeholder="No telfon (Aktif)" />
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form>
          </Col>
          <Col className="mt-5  coy">
            <h5>YOUR ORDER</h5>
            <p>PRODUCT</p>
            <hr className="w-50" />
            <div className="d-flex one">
              <p>Dark T-Shirt Series S - L</p>
              <p className="pon">Rp 80.000 X 3 </p>
            </div>
            <div className="d-flex one">
              <p>SubtotalL</p>
              <p className="pin">Rp 240.000</p>
            </div>
            <div className="d-flex one">
              <p>Shipping</p>
              <p className="pin">Rp 20.000</p>
            </div>
            <div className="d-flex one">
              <p>Discount</p>
              <p className="pin">Rp 50.000</p>
            </div>
            <div className="d-flex one">
              <p>Total</p>
              <p className="pan">Rp 210.000</p>
            </div>

            <Button variant="light" style={{ border: " 2px solid black", width: "270px", marginBottom: "10px" }}>
              SELECT PAYMENT
            </Button>
            <Button variant="dark" style={{ width: "270px" }}>
              ORDER
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default BasicExample;
