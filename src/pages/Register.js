import { Button, Col, Container, Form, Row } from "react-bootstrap";

function BasicExample() {
  return (
    <div className="back d-flex">
      <Container className="">
        <Row className="justify-content-center align-items-center h-100">
          <Col className="col-6 ">
            <h1>Register</h1>
            <p>asigdcasdbvuasd geqad</p>
            <Form.Label>Usename</Form.Label>
            <Form.Control type="text" placeholder="Username" className="mb-2" />
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" className="mb-2" />
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" className="mb-3"/>
            <div>
            <Button variant="dark" type="submit" className=" mb-2 w-100 ">Register</Button>
            </div>
            <span className="forgot">Sudah  punya akun ? <a href="/login">Login</a></span>
          </Col>
        </Row>
      </Container>
      <Container className="bg-primary">
      </Container>
    </div>
  );
}

export default BasicExample;