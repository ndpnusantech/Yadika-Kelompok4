import Navbar from '../../components/Navbar'
import ProductCard from '../../components/ProductCard'
import Footer from '../../components/Footer'
import ProductBanner from '../../components/ProductBanner'

const Product = () => {
  return (
    <div>
      <Navbar />
      <ProductBanner />

        <div className='p-4 border-bottom border-dark border-3'>
          <h3 className='text-center fw-semibold' style={{margin: '0'}}>PRODUCT</h3>
        </div>
      
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <Footer />
    </div>
  )
}

export default Product
