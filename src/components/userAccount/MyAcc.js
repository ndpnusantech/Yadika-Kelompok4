import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";

function MyOrder() {
  return (
    <div>
      <h4 className="fw-semibold pb-1 mt-3 border-bottom border-3">My Order</h4>
      <Table striped size="sm">
        <thead>
          <tr>
            <th>Product</th>
            <th>Order Status</th>
            <th>Order Payment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fs-4 fw-semibold">
              <img src="../../image/product.png" alt="Product" className="mt-2 ms-4 mb-2 me-4" width={70} />
              T-Shirt Black Series S
            </td>
            <td>
              <Button variant="danger" className="mt-4 ms-2" disabled>
                Pending
              </Button>
            </td>
            <td>
              <Button variant="secondary" className="mt-4 ms-3" disabled>
                Pending
              </Button>
            </td>
          </tr>
          <tr>
            <td className="fs-4 fw-semibold">
              <img src="../../image/product.png" alt="Product" className="mt-2 ms-4 mb-2 me-4" width={70} />
              T-Shirt Black Series S
            </td>
            <td>
              <Button variant="success" className="mt-4 ms-2" disabled>
                Delivered
              </Button>
            </td>
            <td>
              <Button variant="secondary" className="mt-4 ms-3" disabled>
                Pending
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

const MyProfile = () => {
  return (
    <Container>
      <h4 className="fw-semibold pb-1 mt-3 border-bottom border-3">My Account</h4>
      <Row>
        <Col className="col-3 ">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder="Enter new password" />
          <Form.Label>Profile Photo</Form.Label>
          <Form.Control type="file" placeholder="" />
          <Button className="mt-4 w-50 w-100">Edit Profile</Button>
        </Col>
      </Row>
    </Container>
  );
};

export { MyOrder, MyProfile };
