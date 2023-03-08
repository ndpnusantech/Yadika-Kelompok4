import React from "react";
import Table from "react-bootstrap/Table";
import { Container, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cart = () => {
  return (
    <div>
      <Navbar />

      <div className="d-flex align-items-center p-4" style={{height: '650px'}} >
        <Container className="p-4">
          <Table striped>
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th className="text-center">PRICE</th>
                <th className="text-center">QUANTITY</th>
                <th className="text-center">SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fs-4 fw-semibold">
                  <img
                    src="../image/product.png"
                    alt="Product"
                    className="mt-2 mb-2 me-5"
                    width={100}
                  />
                  T-Shirt Black Series S
                </td>
                <td>
                  <p className="fw-semibold mt-5 text-center">Rp 80.000</p>
                </td>
                <td>
                  <p className="fw-semibold mt-5 text-center">1</p>
                </td>
                <td>
                  <p className="fw-semibold mt-5 text-center">Rp 80.000</p>
                </td>
              </tr>
              
              <tr>
                <td className="fs-4 fw-semibold">
                  <img
                    src="../image/product.png"
                    alt="Product"
                    className="mt-2 mb-2 me-5"
                    width={100}
                  />
                  T-Shirt Black Series S
                </td>
                <td>
                  <p className="fw-semibold mt-5 text-center">Rp 80.000</p>
                </td>
                <td>
                  <p className="fw-semibold mt-5 text-center">1</p>
                </td>
                <td>
                  <p className="fw-semibold mt-5 text-center">Rp 80.000</p>
                </td>
              </tr>
              
            </tbody>
          </Table>
          
          <div className="d-flex justify-content-end">
            <Button href="/product" variant="secondary" className="me-2">ORDER MORE</Button>
            <Button variant="secondary" href="/order">CHECKOUT</Button>
          </div>

        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
