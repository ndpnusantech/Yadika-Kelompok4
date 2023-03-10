import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login"
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Order from "./pages/Order";
import Completeorder from "./pages/Complete";
import Profile from "./pages/Profile";
import CategoryShirt from './pages/CategoryShirt'
import CategorySweater from './pages/CategorySweater'
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
        <Route path="/complete" element={< Completeorder/>} />
        <Route path="/categoryShirt" element={< CategoryShirt/>} />
        <Route path="/categorySweater" element={< CategorySweater/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
