import { Button, Form, Container, Row, Col } from "react-bootstrap";

function Register() {

  return (
    <div className="back d-flex">
      <Container className="">
        <Row className="justify-content-center align-items-center h-100">
          <Col className="col-6 ">
            <h1>Register</h1>
            <p>asigdcasdbvuasd geqad</p>
            <Form.Label>Usename</Form.Label>
            <Form.Control type="text" placeholder="Username" id="regisUsername" className="mb-2" />
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" id="regisEmail" className="mb-2" />
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" id="regisPassword" className="mb-3"/>
            <div>
            <Button variant="dark" type="submit" onClick={Register} className=" mb-2 w-100 ">Register</Button>
            </div>
            <span className="forgot">Sudah  punya akun ? <a href="/login">Login</a></span>
          </Col>
        </Row>
      </Container>
      <Container className="" style={{backgroundColor: '#818181'}}>
        <img src="../image/sapiens.png" width={740} alt=""/>
      </Container>
    </div>
  );
}

export default Register;