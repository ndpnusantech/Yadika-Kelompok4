import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container, Button, Modal, Table, Form } from "react-bootstrap";

function App(props) {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Product A",
      type: "tshirt",
      size: "M-L",
      stock: 300,
      price: "100.000",
    },
    {
      id: 2,
      name: "Product B",
      type: "tshirt",
      size: "M-L",
      stock: 300,
      price: "100.000",
    },
    {
      id: 3,
      name: "Product C",
      type: "tshirt",
      size: "M-L",
      stock: 300,
      price: "100.000",
    },
  ]);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    type: "",
    size: "",
    stock: "",
    price: "",
  });
  
  const [editing, setEditing] = useState(false);

  const handleFormChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!editing) {
      const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
      setData([...data, { ...formData, id: newId }]);
    } else {
      setData(data.map((item) => (item.id === formData.id ? formData : item)));
      setEditing(false);
    }
    setFormData({ id: "", name: "", type: "", size: "", stock: "", price: "" });
  };

  const handleEdit = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setFormData(itemToEdit);
    setEditing(true);
    setModalShow(true);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // set modal
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="container">
      <Container className="p-2">
        <h1>Product List</h1>

        <Button
          className="mb-3"
          variant="primary"
          onClick={() => setModalShow(true)}
        >
          Add Product
        </Button>

        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>#id</th>
              <th>Name</th>
              <th>Type</th>
              <th>Size</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.size}</td>
                <td>{item.stock}</td>
                <td>{item.price}</td>
                <td>
                  <Button
                    className="btn-sm"
                    variant="primary"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    className="btn-sm"
                    variant="danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* modal */}

        <div>
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={modalShow}
            onHide={() => setModalShow(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Product Form
              </Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
              <Modal.Body>
                <h2>{editing ? "Edit" : "Add"} Product</h2>

                {/* product name */}
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                  />
                </Form.Group>

                {/* product type */}
                <Form.Group controlId="formBasicType">
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter type"
                    name="type"
                    value={formData.type}
                    onChange={handleFormChange}
                  />
                </Form.Group>

                {/* product price */}
                <Form.Group controlId="formBasicSize">
                  <Form.Label>Size</Form.Label>
                  <Form.Control
                    type="teks"
                    placeholder="Enter size"
                    name="size"
                    value={formData.size}
                    onChange={handleFormChange}
                  />
                </Form.Group>

                {/* product stock */}
                <Form.Group controlId="formBasicStock">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter stock"
                    name="stock"
                    value={formData.stock}
                    onChange={handleFormChange}
                  />
                </Form.Group>

                {/* product price */}
                <Form.Group controlId="formBasicPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter price"
                    name="price"
                    value={formData.price}
                    onChange={handleFormChange}
                  />
                </Form.Group>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={() => setModalShow(false)}
                >
                  {editing ? "Save" : "Add"}
                </Button>
                <Button onClick={() => setModalShow(false)}>Close</Button>
              </Modal.Footer>

            </Form>
          </Modal>
        </div>

        {/* product form */}
      </Container>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
