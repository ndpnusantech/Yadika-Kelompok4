import React from "react";
import Navbar from '../components/navbar/Navbar'
import Footer from "../components/footer/Footer";
import CartTable from "../components/CartTable";
import StripBar from "../components/navbar/StripBar";

const Cart = () => {
  return (
    <div>
      <Navbar />

      <StripBar title='Cart' />
      <CartTable />

      <Footer />
    </div>
  );
};

export default Cart;
