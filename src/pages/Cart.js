import React from 'react'
import Table from 'react-bootstrap/Table';
import { Row, Col, Button } from 'react-bootstrap';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Cart = () => {
  return (
    <div>
      <Navbar />

        <h1 className='text-center m-5'>
          <a href="/cart" style={{textDecoration: 'none', color: '#252525'}} >CART - </a>
          <a href="/checkout" style={{textDecoration: 'none', color: '#252525'}} >CHECKOUT - </a>
          <a href="/orderComplete" style={{textDecoration: 'none', color: '#252525'}} >ORDER COMPLETE </a>
        </h1>

      <div className='justify-content-center mb-5 p-4'>
        <Row>
          <Col md={8}>
          <Table  striped>
      <thead>
        <tr>
          <th>PRODUCT</th>
          <th className='text-center'>PRICE</th>
          <th className='text-center'>QUANTITY</th>
          <th className='text-center'>SUBTOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src='../image/product.png' alt='Product' className='mt-2 mb-2 me-4' width={105} />T-Shirt Black Series S</td>
          <td><p className='fw-semibold mt-5 text-center'>Rp 80.000</p></td>
          <td><p className='fw-semibold mt-5 text-center'>1</p></td>
          <td><p className='fw-semibold mt-5 text-center'>Rp 80.000</p></td>
        </tr>
        <tr>
          <td><img src='../image/product.png' alt='Product' className='mt-2 mb-2 me-4' width={105} />T-Shirt Black Series S</td>
          <td><p className='fw-semibold mt-5 text-center'>Rp 80.000</p></td>
          <td><p className='fw-semibold mt-5 text-center'>1</p></td>
          <td><p className='fw-semibold mt-5 text-center'>Rp 80.000</p></td>
        </tr>
        <tr>
          <td><img src='../image/product.png' alt='Product' className='mt-2 mb-2 me-4' width={105} />T-Shirt Black Series S</td>
          <td><p className='fw-semibold mt-5 text-center'>Rp 80.000</p></td>
          <td><p className='fw-semibold mt-5 text-center'>1</p></td>
          <td><p className='fw-semibold mt-5 text-center'>Rp 80.000</p></td>
        </tr>
      </tbody>
    </Table>       
          </Col>  
          <Col md={4}>
          <Table  striped>
      <thead>
        <tr>
          <th>CART TOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Subtotal</td>
          <td className='text-end fw-semibold'>Rp 200.000</td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td className='text-end fw-semibold'>Rp 10.000</td>
        </tr>
        <tr>
          <td>Discount</td>
          <td className='text-end fw-semibold'>-Rp 30.000</td>
        </tr>
        <tr>
          <td>Total</td>
          <td className='text-end fw-semibold'>Rp 180.000</td>
        </tr>
      </tbody>
    </Table>       
      <Button href='/order' variant="secondary" style={{width: '100%'}}>CHECKOUT</Button>
          </Col>
        </Row> 
      </div> 

      <Footer />
    </div>
  )
}

export default Cart
