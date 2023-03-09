import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "react-bootstrap";
import { DataProduct } from "../data/Data";
import "swiper/swiper-bundle.css";

const ProductCard = ({ product }) => {
  return (
    <Link to="/productDetail" style={{textDecoration: 'none', color: '#515151'}}>
      <Card style={{ width: "18rem", margin: "auto" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.ProductName}</Card.Title>
          <Card.Text>Category: {product.Category}</Card.Text>
          <Card.Text>Price: {product.Price}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};
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
          },
        }}
        className="m-5"
      >
        {DataProduct.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ProductCarousel;