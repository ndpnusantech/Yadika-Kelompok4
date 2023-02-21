import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import ProductBanner from '../components/ProductBanner'

const Product = () => {
  return (
    <div>
      <Navbar />
      <ProductBanner />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <Footer />
    </div>
  )
}

export default Product
