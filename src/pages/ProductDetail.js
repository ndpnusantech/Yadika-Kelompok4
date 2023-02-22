import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    image: './image/product.png',
    ProductName: 'T-Shirt Black series S',
    Category: 'T-Shirt',
    Price: 80000,
  },
  {
    id: 2,
    image: './image/product.png',
    ProductName: 'T-Shirt Black series D',
    Category: 'T-Shirt',
    Price: 80000,
  },
  {
    id: 3,
    image: './image/product.png',
    ProductName: 'T-Shirt Black series B',
    Category: 'T-Shirt',
    Price: 80000,
  },
  {
    id: 4,
    image: './image/product.png',
    ProductName: 'T-Shirt Black series B',
    Category: 'T-Shirt',
    Price: 80000,
  }
];

const ProductList = () => {
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
