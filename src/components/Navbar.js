import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar bg="light" className='shadow' sticky="top">
      <Container position='relative'>
        <Navbar.Brand href="#home" className='fs-3 fw-bold'>T - Clasic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='ms-5'>Home</Nav.Link>
            <Nav.Link href="/product" className='ms-3 me-3'>Product</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className=''>
            <Nav.Link href="#link" className=''><i className='fa fa-search'></i></Nav.Link>
            <Nav.Link href="#home" className='mx-3'><i className='fa-regular fa-user'></i></Nav.Link>
            <Nav.Link href="#link" className=''><i class="fa-solid fa-cart-shopping"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;