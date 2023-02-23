import ProductBanner from "../components/ProductBanner";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import "../css/Index.css";

function Home() {
  return (
    <div>
      <Navbar />
      <ProductBanner />

      <div className="p-4 border-bottom border-dark border-3">
        <h3 className="text-center fw-semibold" style={{margin: '0'}}>S SERIES</h3>
      </div>

      <ProductCard />
      <Footer />
    </div>
  );
}

export default Home;
