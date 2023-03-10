import React from 'react'
import { Button, Row, Col, Table } from "react-bootstrap";

const UserProfile = () => {
    return (
        <div>
            <div className='mt-3 p-4'  style={{ backgroundColor: '#515151', color: 'white'}}>
                <h1>MY ACCOUNT</h1>
                <p style={{ marginTop: '-15px' }}>account information</p>
            </div>
            <div className='mt-5'>
                <Row>
                    <Col md={1}>
                        <img src="../image/profile.jpg" className='border border-5 rounded-circle' width={90} alt="Profile" />
                    </Col>
                    <Col>
                        <p className='mt-2 mb-0 fs-5'>Username</p>
                        <Button variant='secondary'>Edit</Button>
                        <Button variant='secondary' className='ms-1'>Logout</Button>
                    </Col>
                </Row>
            </div>
            <div>
                <h3 className='fw-semibold mt-5 border-bottom border-3'>Dashboard</h3>
                <h4 className='fw-semibold pb-1 mt-3 border-bottom border-3'>My Order</h4>
                <Table striped size="sm">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Order Status</th>
                            <th>Order Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="fs-4 fw-semibold">
                                <img
                                    src="../image/product.png"
                                    alt="Product"
                                    className="mt-2 ms-4 mb-2 me-4"
                                    width={70}
                                />
                                T-Shirt Black Series S
                            </td>
                            <td>
                                <Button variant='danger' className='mt-4 ms-2' disabled>Pending</Button>
                            </td>
                            <td>
                                <Button variant='secondary' className='mt-4 ms-3' disabled>Pending</Button>
                            </td>
                        </tr>
                        <tr>
                            <td className="fs-4 fw-semibold">
                                <img
                                    src="../image/product.png"
                                    alt="Product"
                                    className="mt-2 ms-4 mb-2 me-4"
                                    width={70}
                                />
                                T-Shirt Black Series S
                            </td>
                            <td>
                                <Button variant='success' className='mt-4 ms-2' disabled>Delivered</Button>
                            </td>
                            <td>
                                <Button variant='secondary' className='mt-4 ms-3' disabled>Pending</Button>
                            </td>
                        </tr>
                      
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default UserProfile
