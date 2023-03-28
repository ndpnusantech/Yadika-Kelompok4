import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Modal } from "react-bootstrap";
import '../asset/css/modals.css'

const UserForm = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Container>
        <h1 className="mb-4 border-bottom border-3">BILLING DETAIL</h1>
        <Form>

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

                  <Form.Control
                    type="text"
                    placeholder="Kota"
                    id="userCity"
                  />
                </Form.Group >
              </Col >
            </Row >

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


            <Form.Text className="text-muted">
              *Silahkan cek kembali data pembelian anda sebelum order
            </Form.Text>

            <Row>
              <Col>
                <Button
                  variant="secondary"
                  className="mt-4"
                  style={{ width: "100%" }}
                  onClick={() => setShow(true)}
                >
                  ORDER
                  <i class="fa-solid fa-cart-shopping fa-lg ms-2"></i>
                </Button>
              </Col>
              <Col>
                <Form.Select
                  aria-label="Default select example"
                  className="mt-4"
                  id="paymentType"
                >
                  <option>Select Payment</option>
                  <option value="Debit xxx">Debit XXX</option>
                  <option value="Dana">Dana</option>
                </Form.Select>
              </Col>
            </Row>
          </Form >

          {/* Modals */}
          <Modal
            show={show}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            
            <Modal.Body id='Login' className='ms-3 me-3'>
              <h1 className='mb-3 text'>LOGIN</h1>
              <Form>
                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                  <Form.Label className='text'>Email address *</Form.Label>
                  <Form.Control
                    type="email"
                    className='box'
                    placeholder="name@example.com"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                  <Form.Label className='text'>Password *</Form.Label>
                  <Form.Control
                    type="Password"
                    className='box'
                    placeholder="Password"
                    autoFocus
                  />
                </Form.Group>
                <Button href="/complete" variant="secondary btr" className="mb-" style={{ width: "160px" }} >
                  LOGIN
                </Button>
              </Form>
            </Modal.Body>
         
            <Modal.Body id='Registrasi' className='ms-3 me-3'>
              <h1 className='mb-3 text'>REGISTER</h1>
              <Form>
                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address *</Form.Label>
                  <Form.Control
                    type="email"
                    className='box'
                    placeholder="name@example.com"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                  <Form.Label>Password *</Form.Label>
                  <Form.Control
                    type="Password"
                    className='box'
                    placeholder="Password"
                    autoFocus
                  />
                </Form.Group>
                <Button href="#" variant="secondary btr" className="mb-" style={{ width: "160px" }} >
                  REGISTER
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
       


          {/* </Modal > */}
          {/* End Modals */}


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

      </Container >
    </div >
  );
};

export default UserForm;
