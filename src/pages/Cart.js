import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartTable from "../components/CartTable";

const Cart = () => {
  return (
    <div>
      <Navbar />

     {/* Cart page */}
      <CartTable />

      <Footer />
    </div>
  );
};

export default Cart;
