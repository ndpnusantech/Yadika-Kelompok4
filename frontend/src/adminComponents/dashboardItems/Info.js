import React from 'react'
import { Container, Table } from 'react-bootstrap'

const Info = () => {

    const InfoTitle = {width: '300px', background: '#7209b7', color: 'white', borderRadius: '12px', border: '5px solid white'}
    const InfoValue = {width: '300px', color: '#7209b7', borderRadius: '5px'}

  return (
    <div className='m-4'>
        <Container>
            <Table size='sm' className='text-center table-borderless'>
                <thead  className='fs-4 rounded'>
                    <tr>
                        <th style={InfoTitle}>Penghasilan Tercapai</th>
                        <th style={InfoTitle}>Jumlah Terjual</th>
                        <th style={InfoTitle}>Keseluruhan Stock</th>
                    </tr>
                </thead>
                <tbody className='fs-4'>
                    <tr className='fw-bold'>
                        <td style={InfoValue}>Rp. 14.000.000,00</td>
                        <td style={InfoValue}>2000</td>
                        <td style={InfoValue}>4000</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    </div>
  )
}

export default Info
