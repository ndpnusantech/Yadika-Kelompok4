import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductCart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/product" element={< Product/>} />
        <Route path="/cart" element={< ProductCart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
