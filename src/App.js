import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Loginn from "./pages/Loginn"                           

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/product" element={< Product/>} />
        <Route path="/login" element={< Loginn/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
