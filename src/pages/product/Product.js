import Navbar from '../../components/navbar/Navbar'
import ProductCard from '../../components/product/ProductCard'
import Footer from '../../components/footer/Footer'
import ProductBanner from '../../components/product/ProductBanner'
import StripBar from '../../components/navbar/StripBar'

const Product = () => {
  return (
    <div>
      <Navbar />
      <ProductBanner />

      <StripBar title='Product'/>
      
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <Footer />
    </div>
  )
}

export default Product
