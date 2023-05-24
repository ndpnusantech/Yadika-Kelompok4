import ProductBanner from "../components/product/ProductBanner";
import ProductCard from "../components/product/ProductCard";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import PromoBanner from "../components/banner/PromoBanner";
import StripBar from "../components/navbar/StripBar";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Navbar />
      <ProductBanner />

      <StripBar title='Product'/>

      <PromoBanner />
      
      <Container>
      <ProductCard />
      </Container>
      
      <Footer />
    </div>
  );
}

export default Home;
