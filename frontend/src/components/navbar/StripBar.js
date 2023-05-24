import { Container, Navbar } from "react-bootstrap";

const StripBar = (props) => {
  return (
    <Navbar variant="dark" bg="dark" sticky='top' style={{top: '68px'}}>
      <Container>
        <Navbar.Brand>{props.title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
 export default StripBar