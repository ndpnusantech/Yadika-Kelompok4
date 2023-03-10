import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../asset/css/login.css"

function Login() {
  return (
    <div className="back d-flex">
      <Container className="">
        <Row className="justify-content-center align-items-center h-100">
          <Col className="col-6 ">
            <h1>Login</h1>
            <p>asigdcasdbvuasd geqad</p>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" className="mb-2" />
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" className="mb-3"/>
            <a href="" className="item text-end">Forgot Password</a>
            <div>
            <Button variant="dark" type="submit" className=" mb-2 w-100 ">Login</Button>
            <Button variant="primary" type="submit" className="bg-light text-dark w-100 border-dark">With google</Button>
            </div>
            <span className="forgot">Belum punya akun ? <a href="/register">Register</a></span>
          </Col>
        </Row>
      </Container>
      <Container className=""  style={{backgroundColor: '#818181'}}>
          <img src="../image/sapiens.png" width={740} alt=""/>
      </Container>
    </div>
  );
}

export default Login;

