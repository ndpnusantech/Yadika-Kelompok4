import { Button, Form } from "react-bootstrap";
import image from "../asset/image/blck.jfif";


const freeRegister = () => {
  return (
    <div>
      <Form className="fromLogin1">
        <h1 className="heading">Register</h1>
        <Form.Group className="mb-1 username" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>
        <Form.Group className="mb-1 phone" controlId="formBasicNoHandphone">
          <Form.Label>No.Hp</Form.Label>
          <Form.Control type="number" placeholder="No.Hp" />
        </Form.Group>
        <Form.Group className="mb-1 mail" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="email" />
        </Form.Group>
        <Form.Group className="mb-2 password" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="regis d-flex">
          <p>Jika sudah mempunyai akun silahkan </p>
          <a href="/login" className="ms-2">
            Login
          </a>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <img src={image} alt="" className="gambar2" />
    </div>
  );
};

export default freeRegister;
