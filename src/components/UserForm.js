import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

const UserForm = () => {
  return (
    <div>
      <Container>
        <h1 className="mb-4 border-bottom border-3">BILLING DETAIL</h1>
        <Form action="/ordercomplete">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Recipient's name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nama penerima"
              id="recipientName"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Alamat email"
              id="userEmail"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="number"
              placeholder="Nomor telfon (Aktif)"
              id="phoneUser"
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Province</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Provinsi"
                  id="userProvince"
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Kota" id="userCity" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Subdistrict</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Kecamatan"
                  id="subdistrictUser"
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Postcode</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Kode pos"
                  id="postcodeUser"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Order notes</Form.Label>
            <Form.Control
              type="text"
              placeholder="Catatan pembelian"
              id="userNote"
            />
          </Form.Group>

          <Form.Select
            aria-label="Default select example"
            className="mt-4"
            id="paymentType"
          >
            <option>Select Payment</option>
            <option value="Debit xxx">Debit XXX</option>
            <option value="Dana">Dana</option>
          </Form.Select>

          <Form.Group className="mt-3 mb-2" controlId="formBasicPassword">
            <Form.Label>Receipt of Payment</Form.Label>
            <Form.Control
              type="file"
              placeholder="Bukti pembayaran"
              id="paymentImg"
            />
          </Form.Group>

          <Form.Text className="text-muted">
            *Silahkan cek kembali data pembelian anda sebelum order
          </Form.Text>

          <Button
            variant="secondary"
            type="submit"
            className="mt-4"
            style={{ width: "100%" }}
          >
            ORDER
            <i class="fa-solid fa-cart-shopping fa-lg ms-2"></i>
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default UserForm;
