import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import UserForm from "../components/user/UserForm";
import SubtotalTable from "../components/SubtotalTable";

function Order() {
  return (
    <div>
      <Navbar />

      <div className="d-flex align-items-center mx-auto" style={{height: '120vh'}}>
        <Container >
          <Row>
            <Col md={8}>
              <UserForm />
            </Col>
            <Col md={4}>
              <SubtotalTable />
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export default Order;
