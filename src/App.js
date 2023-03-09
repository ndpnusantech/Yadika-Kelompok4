import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login"
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Order from "./pages/Order";
import Profile from "./pages/Profile";
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
        <Route path="/productDetail" element={< ProductDetail/>} />
        <Route path="/cart" element={< Cart/>} />
        <Route path="/order" element={< Order/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
