import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container, Button,  Table  } from "react-bootstrap";

const Penjualan = () => {
  const [data, setData] = useState([
    {
      id: 1,
      tanggal: "20 Maret 2020",
      pembeli: "Nauval Roozan",
    },
    {
      id: 2,
      tanggal: "2 April 2020",
      pembeli: "Rangga Alif",
    },
    {
      id: 3,
      tanggal: "29 Mei 2020",
      pembeli: "Apip Mustopa",
    },
    {
      id: 4,
      tanggal: "5 Agustus 2020",
      pembeli: "Adhi ",
    },
    {
      id: 5,
      tanggal: "3 Juli 2020",
      pembeli: " Mona ",
    },
    {
      id: 6,
      tanggal: "1 Desember 2020",
      pembeli: " nani ",
    },
  ]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };


  return (
    <div className="container">
      <Container className="p-3">
        <h1>List Penjualan</h1>

        <Button className="mb-3" variant="primary">
         Tambah Penjualan
        </Button>

        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>#id</th>
              <th>Tanggal</th>
              <th>Pembeli</th>
              <th>Pembayaran</th>
              <th>Status Order</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.tanggal}</td>
                <td>{item.pembeli}</td>
                <td>
                  <select>
                    <optgroup label="Status">
                      <option value="lunas">Lunas</option>
                      <option value="belum">Belum</option>
                    </optgroup>
                  </select>
                </td>
                <td>
                    <select>
                        <optgroup label="status Order">
                            <option value="pending">Pending</option>
                            <option value="packing">Packing</option>
                            <option value="delivered">Delivered</option>
                        </optgroup>
                    </select>
                </td>
                <td>100.000</td>
                <td>
                  <Button className="btn-sm" variant="danger" onClick={() => handleDelete(item.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

ReactDOM.render(<Penjualan />, document.getElementById("root"));
export default Penjualan;
