import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import ProductCard from "../../components/product/ProductCard"
import StripBar from "../../components/navbar/StripBar"

const Sweater = () => {
  return(
    <div>
      <Navbar/>

      <StripBar title='Sweater'/>

      <ProductCard/>
      <ProductCard/>
      <ProductCard/>

      <Footer/>
    </div>
  )
}
 
export default Sweater