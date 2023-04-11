import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login"
import ProductDetail from "./pages/product/ProductDetail";
import Register from "./pages/login/Register"
import Cart from "./pages/Cart"
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import CategoryShirt from './pages/category/CategoryShirt'
import CategorySweater from './pages/category/CategorySweater'
import OrderComplete from "./pages/OrderComplete";

// Admin
import Admin from "./pages/admin/Dashboard"
import LoginAdmin from "./pages/admin/LoginAdmin"
import AdminProduct from "./pages/admin/Product"; 
import AdminPenjualan from "./pages/admin/Penjualan"; 

import './asset/css/Index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/product" element={< Product/>} />
        <Route path="/login" element={< Login/>} />
        <Route path="/register" element={< Register/>} />
        <Route path="/profile" element={< Profile/>} />
        <Route path="/product-detail" element={< ProductDetail/>} />
        <Route path="/cart" element={< Cart/>} />
        <Route path="/order" element={< Order/>} />
        <Route path="/category-shirt" element={< CategoryShirt/>} />
        <Route path="/category-sweater" element={< CategorySweater/>} />
        <Route path="/order-complete" element={< OrderComplete/>} />


        <Route path="/admin" element={< LoginAdmin/>} />
        <Route path="/admin-dashboard" element={< Admin/>} />
        <Route path="/admin-product" element={< AdminProduct/>} />
        <Route path="/admin-penjualan" element={< AdminPenjualan/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
