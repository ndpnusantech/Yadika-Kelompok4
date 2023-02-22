import { Form, Button } from "react-bootstrap";
import image from "../image/banner3.jpg"
import "../css/login.css";

const Login = () => {
  return (
    <div className="from">
      <Form className="fromLogin">
        <h1 className="heading">Login</h1>
        <Form.Group className="mb-3 username " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-2 password" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicCheckbox"></Form.Group>
        <div className="regis d-flex">
        <p>Belum Pernah login ? </p> 
        <a href="/#">Register</a>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <img src={image} alt="" className="gambar w-25 "/>
    </div>
  );

};




export default Login;
