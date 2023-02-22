import ProductBanner from "../components/ProductBanner";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Index.css";

function Home() {
  return (
    <div>
      <Navbar />
      <ProductBanner />
      <ProductCard />
      <ProductBanner />
      <ProductCard />
      <ProductBanner />
      <ProductCard />
      <Footer />
    </div>
  );
}

export default Home;
