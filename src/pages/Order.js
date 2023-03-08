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

      <div
        className="d-flex align-items-center"
        style={{ height: "120vh"}}
      >
        <Container>
          <h1 className="mb-4 border-bottom border-3">BILLING DETAIL</h1>
          <Row>
            <Col md={8} className="border-end border-2">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Recipient's name</Form.Label>
                  <Form.Control type="email" placeholder="Nama penerima" id="recipientName" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="text" placeholder="Alamat email" id='userEmail' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Nomor telfon (Aktif)"
                    id='phoneUser'
                  />
                </Form.Group>

                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Province</Form.Label>
                      <Form.Control type="text" placeholder="Provinsi" id='userProvince' />
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="Kota" id='userCity' />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Subdistrict</Form.Label>
                      <Form.Control type="text" placeholder="Kecamatan" id='subdistrictUser' />
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Postcode</Form.Label>
                      <Form.Control type="text" placeholder="Kode pos" id='postcodeUser' />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Order notes</Form.Label>
                  <Form.Control type="text" placeholder="Catatan pembelian" id='userNote' />
                </Form.Group>

                <Form.Text className="text-muted">
                  *Silahkan cek kembali data pembelian anda sebelum order
                </Form.Text>

                <Row>
                  <Col>
                    <Button
                      variant="secondary"
                      type="submit"
                      className="mt-4"
                      style={{ width: "100%" }}
                    >
                      ORDER
                      <i class="fa-solid fa-cart-shopping fa-lg ms-2"></i>
                    </Button>
                  </Col>
                  <Col>
                    <Form.Select aria-label="Default select example" className="mt-4" id='paymentType'>
                      <option>Select Payment</option>
                      <option value="Debit xxx">Debit XXX</option>
                      <option value="Dana">Dana</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Form>
            </Col>

            <Col>
              <Table striped className="position-fixed" style={{width: '420px', marginTop: '-10px', backgroundColor: 'white'}}>
                <thead>
                  <tr>
                    <th>CART TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Product</td>
                    <td className="text-end fw-semibold">T-Shirt Black Series S ( 2x )</td>
                  </tr>
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
            </Col>
          
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export default Order;
