import { Row, Col } from "react-bootstrap";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="containFooter">
        <p className="fs-3 fw-bold">T - Classic</p>
        <Row className="justify-content-center m-1 p-2">
          <Col md="10">
            <h4>ABOUT</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus sapiente error, repudiandae consequuntur, possimus
              fugit eius doloremque eaque necessitatibus accusamus qui nulla
              enim dolorum harum laudantium vitae, id nesciunt libero! Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Excepturi,
              veritatis accusamus illum reiciendis ad est corrupti labore
              possimus fuga tenetur, obcaecati aspernatur quasi quas perferendis
              corporis! Aut alias impedit praesentium!
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center m-1 p-2">
          <Col md="10">
            <div className="iconLink">
              <a href="https://www.instagram.com/accounts/login/"><i className="fa-brands fa-instagram me-2 fa-2xl"></i></a>
              <a href="https://id-id.facebook.com/login/device-based/regular/login/?login_attempt=1"><i className="fa-brands fa-facebook me-2 fa-2xl"></i></a>
              <a href="https://twitter.com/i/flow/login"><i className="fa-brands fa-twitter me-2 fa-2xl"></i></a>
              <a href="https://web.whatsapp.com/"><i className="fa-brands fa-whatsapp me-2 fa-2xl"></i></a>
            </div>
          </Col>  
        </Row>
      </div>
      <div className="copyright">
        <p>copyright 2023 © | Developed by Kelompok 4</p>
      </div>
    </div>
  );
};
export default Footer;