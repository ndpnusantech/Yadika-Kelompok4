import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className='shadow-sm' sticky='top'>
      <Container>
        <Navbar.Brand href="" className='fw-bold'>A D M I N</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto mx-5">

            <Nav.Link href="/admin-dashboard">Dashboard</Nav.Link>

            <NavDropdown title="Product" id="basic-nav-dropdown">
              <NavDropdown.Item href="/admin-product">Add Product</NavDropdown.Item>
              {/* <NavDropdown.Item href="/admin-stock">Stock</NavDropdown.Item> */}
 
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                To Shop
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;