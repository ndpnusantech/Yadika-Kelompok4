import React, { useState } from "react";

function ProductCart(props) {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    // Implement the add to cart functionality here
    alert(`Added ${quantity} ${props.product.ProductName} to cart!`);
  };

  return (
    <div className="card">
      <img src={props.product.image} className="card-img-top" alt={props.product.ProductName} />
      <div className="card-body">
        <h5 className="card-title">{props.product.ProductName}</h5>
        <p className="card-text">{props.product.Category}</p>
        <p className="card-text">{props.product.Price}</p>
        <div className="input-group mb-3">
          <button className="btn btn-outline-secondary" type="button" onClick={decrementQuantity}>-</button>
          <input type="number" className="form-control" value={quantity} readOnly />
          <button className="btn btn-outline-secondary" type="button" onClick={incrementQuantity}>+</button>
        </div>
        <button className="btn btn-primary" onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCart;
