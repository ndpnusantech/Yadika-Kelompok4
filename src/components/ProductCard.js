import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Card, Button } from 'react-bootstrap';
import { DataProduct } from '../data/Data';

const ProductCard = ({ product }) => {
  
  return (
    <Card  style={{ width: '16rem', margin: 'auto'}}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.ProductName}</Card.Title>
        <Card.Text>
          Category: {product.Category}
        </Card.Text>
        <Card.Text>
          Price: {product.Price}
        </Card.Text>
        <Button variant="primary" style={{width: '100%'}}>Add to Cart</Button>
      </Card.Body>
    </Card>
  )
}

const ProductCarousel = () => {
  return (
    <div>
    <Swiper
      slidesPerView={5}
      spaceBetween={20}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        }
      }}
      className='m-5'>
      {DataProduct.map(product => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
      </div>
  )
}

export default ProductCarousel;
