import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Order() {
  return (
    <div>
      <Navbar />

      <div className="d-flex align-items-center" style={{height: '650px'}}>
        <Container>
          <h1 className="mb-4 border-bottom border-3">BILLING DETAIL</h1>
          <Row>
            <Col md={8} className='border-end border-2'>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Recipient's name</Form.Label>
                  <Form.Control type="email" placeholder="Nama penerima" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Alamat" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" placeholder="No telfon" />
                </Form.Group>

                <Form.Text className="text-muted">
                  *Silahkan cek kembali data pembelian anda sebelum order
                </Form.Text>
              </Form>
            </Col>

            <Col>
              <Table striped>
                <thead>
                  <tr>
                    <th>CART TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Subtotal</td>
                    <td className="text-end fw-semibold">Rp 200.000</td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td className="text-end fw-semibold">Rp 10.000</td>
                  </tr>
                  <tr>
                    <td>Discount</td>
                    <td className="text-end fw-semibold">-Rp 30.000</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td className="text-end fw-semibold">Rp 180.000</td>
                  </tr>
                </tbody>
              </Table>

              <Button
                variant="secondary"
                className="mb-2"
                style={{ width: "100%" }}
              >
                SELECT PAYMENT
                <i class="fa-regular fa-credit-card fa-lg ms-2"></i>
              </Button>
              <Button
                variant="secondary"
                className="mb-2"
                style={{ width: "100%" }}
              >
                ORDER
                <i class="fa-solid fa-cart-shopping fa-lg ms-2"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export default Order;
