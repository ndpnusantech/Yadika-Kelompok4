import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login"
import './css/Index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/product" element={< Product/>} />
        <Route path="/login" element={< Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
