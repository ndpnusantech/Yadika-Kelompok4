import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { DataProduct } from "../data/Data";

function ProductCard() {
  return (
    <div className="p-4">
      <Container>
        <Row className="justify-content-md-center m-4 p-1" xs={1} sm={2} md={4}>
          {DataProduct.map((product) => (
            <Col key={product.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: "250px" }}
                />
                <Card.Body>
                  <Card.Title>{product.ProductName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {product.Category}
                  </Card.Subtitle>
                  <Card.Text>Price: {product.Price}</Card.Text>
                  <Button variant="primary" style={{ width: "100%" }}>
                    Buy now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-md-center m-4 p-1" xs={1} sm={2} md={4}>
          {DataProduct.map((product) => (
            <Col key={product.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: "250px" }}
                />
                <Card.Body>
                  <Card.Title>{product.ProductName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {product.Category}
                  </Card.Subtitle>
                  <Card.Text>Price: {product.Price}</Card.Text>
                  <Button variant="primary" style={{ width: "100%" }}>
                    Buy now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProductCard;
