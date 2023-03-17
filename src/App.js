import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login"
import ProductDetail from "./pages/product/ProductDetail";
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import CategoryShirt from './pages/category/CategoryShirt'
import CategorySweater from './pages/category/CategorySweater'
import OrderComplete from "./pages/OrderComplete";
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
        <Route path="/categoryShirt" element={< CategoryShirt/>} />
        <Route path="/categorySweater" element={< CategorySweater/>} />
        <Route path="/ordercomplete" element={< OrderComplete/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
