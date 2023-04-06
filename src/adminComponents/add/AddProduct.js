import { useState, useEffect } from "react";
import { Button, Table, Form, Modal } from "react-bootstrap";

const Product = () => {
  
  const [data, setData] = useState(() => {
  const savedData = localStorage.getItem("movieData");
   
    return savedData // Data Dummy
      ? JSON.parse(savedData)
      : [
          {
            id: 1,
            title: "Kiko In The Deep Sea",
            director: "Sally Wongso",
            genre: "Kartun",
            stok: 1050,
            harga: "Rp.50.000,00",
            tayang: "6 March 2023",
            lokasi: "Cinema VII Bandung",
            status: "Now Playing",
          },
          {
            id: 2,
            title: "Suzume no Tojimari",
            director: "Makoto Shinkai",
            genre: "Kartun",
            stok: 950,
            harga: "Rp.50.000,00",
            tayang: "8 March 2023",
            lokasi: "Cinema VII Bandung",
            status: "Now Playing",
          },
        ];
  });

  const [editData, setEditData] = useState(null);

  useEffect(() => {
    localStorage.setItem("movieData", JSON.stringify(data));
  }, [data]);

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };
  const handleEdit = (id) => {
    const newData = data.find((item) => item.id === id);
    setEditData(newData);
  };

  const handleSave = (event) => {
    event.preventDefault();
    const newData = data.map((item) => {
      if (item.id === editData.id) {
        return editData;
      }
      return item;
    });
    setData(newData);
    setEditData(null);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    const newProduct = {
      id: data.length + 1,
      product: "",
      type: "",
      series: "",
      stok: 0,
      size: "",
      status: "",
    };
    setData([...data, newProduct]);
  };

  
  
  //Pop up
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Pop UP Edit
  const [lihat, setLihat] = useState(false);

  const handleTutup = () => setLihat(false);
  const handleBuka = () => setLihat(true);

  
  
  return (
    <div>

      <div className="table-admin">
        <Button
          className="btn-add-product-admin"
          variant="light"
          onClick={handleAdd}
        >
          +
        </Button>
        <Table className="tr-admin">
          <thead>
            <tr>
              <th className="th-admin">ID</th>
              <th className="th-admin">Product</th>
              <th className="th-admin">Type</th>
              <th className="th-admin">Series</th>
              <th className="th-admin">Stock</th>
              <th className="th-admin">Price</th>
              <th className="th-admin">Size</th>
              <th className="th-admin">Status</th>
              <th className="th-admin">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="td-admin">{item.id}</td>
                <td className="td-admin">{item.product}</td>
                <td className="td-admin">{item.type}</td>
                <td className="td-admin">{item.series}</td>
                <td className="td-admin">{item.stock}</td>
                <td className="td-admin">{item.price}</td>
                <td className="td-admin">{item.size}</td>
                <td className="td-admin">{item.status}</td>
                <td className="td-admin">
                  <Button
                    className="btn-edit-product-admin"
                    variant="light"
                    onClick={() => {
                      handleBuka();
                      handleEdit(item.id);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    className="btn-delete-product-admin"
                    variant="light"
                    onClick={handleShow}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Pop Up Edit */}

        {data.map((item) => (
          <Modal
            show={lihat}
            onHide={handleTutup}
            key={item.id}
            size="lg"
            style={{ color: "black" }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {editData && (
                <Form onSubmit={handleSave} className="edit-form-admin">
                  <div className="tabel-input-product">
                   
                    {/* Product */}
                   
                    <label>
                      Product
                      <input
                        type="text"
                        name="product"
                        value={editData.product}
                        onChange={handleChange}
                        className="input-product-admin"
                      />
                    </label>
                    
                    {/*  type */}
                    
                    <label>
                      Type
                      <input
                        type="text"
                        name="type"
                        value={editData.type}
                        onChange={handleChange}
                        className="input-product-admin"
                      />
                    </label>
                  </div>
                  <div className="tabel-input-product">

                    {/* series */}

                    <label>
                      Series
                      <input
                        type="text"
                        name="series"
                        value={editData.series}
                        onChange={handleChange}
                        className="input-product-admin"
                      />
                    </label>

                    {/* stock */}
                    
                    <label>
                      Stok:
                      <input
                        type="number"
                        name="stock"
                        value={editData.stock}
                        onChange={handleChange}
                        className="input-product-admin"
                      />
                    </label>
                  </div>
                  <div className="tabel-input-product">

                    {/* size */}
                    
                    <label>
                      Size
                      <input
                        type="text"
                        name="size"
                        value={editData.size}
                        onChange={handleChange}
                        className="input-product-admin"
                      />
                    </label>
                  </div>
                  <div className="tabel-input-product">
                    
                    {/* status */}

                    <label>
                      Status
                      <input
                        type="text"
                        name="status"
                        value={editData.status}
                        onChange={handleChange}
                        className="input-product-admin"
                      />
                    </label>
                    
                    {/* price */}
                    
                    <label>
                      Price
                      <input
                        type="text"
                        name="price"
                        value={editData.price}
                        onChange={handleChange}
                        className="input-product-admin"
                      />
                    </label>
                  </div>
                </Form>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleTutup}>Close</Button>
              {/* Save button */}
              <Button
                className="btn-save-product-admin"
                variant="light"
                type="submit"
                onClick={handleSave}
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        ))}

        {/* //Pop up */}

        {data.map((item) => (
          <Modal show={show} onHide={handleClose} key={item.id}>
            <Modal.Header closeButton>
              <Modal.Title className="modal-title-product">
                Hapus Product
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body-product">
              Apakah Anda Yakin Akan Menghapusnya?
            </Modal.Body>
            <Modal.Footer className="modal-footer-product">
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                variant="primary"
                className="btn-delete-product-admin"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        ))}
      </div>
    </div>
  );
};

export default Product;