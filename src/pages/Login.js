import { Button, Col, Container, Row, } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
// import image from "../image/blck.jfif";
// import "../css/login.css";

const Login = () => {
  return (
    <div>
      <div className="d-flex">
        <Container>
        <Form>
                <Form.Group className="w-50">
                  <h1 className="border-bottom border-3 pb-2 mb-4">Login</h1>

                  <Form.Label>Usename</Form.Label>
                  <Form.Control type="text" placeholder="Username" name="username" />

                  <Form.Label className="w-50 mt-2">Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name='password' />

                  <Form.Text className="">
                    Not have an account ?
                    <a href='/register'> Register</a>
                  </Form.Text>

                  <Button variant="secondary" type="submit" className="mt-3 w-100">
                    Login
                  </Button>
                </Form.Group>
              </Form>
        </Container>
      </div>
    </div>
  );
};

export default Login;
