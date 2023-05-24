import React from "react";
import { Container, Card, Table } from "react-bootstrap";

const SubtotalTable = () => {
  return (
    <div className="position-fixed mt-5">
      <Container>
        <Card>
          <Card.Body>
            <Table
              striped
              className=""
              style={{
                width: "420px",
                marginTop: "-10px",
                backgroundColor: "white",
              }}
            >
              <thead>
                <tr>
                  <th>CART TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Product</td>
                  <td className="text-end fw-semibold">
                    T-Shirt Black Series S ( 2x )
                  </td>
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
                  <td>Special Discount</td>
                  <td className="text-end text-muted">-Rp 30.000</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td className="text-end fw-semibold">Rp 180.000</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default SubtotalTable;
