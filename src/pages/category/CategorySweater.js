import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import ProductCard from "../../components/ProductCard"
import NameProduct from "../../components/NameProduct"

const Sweater = () => {
  return(
    <div>
      <Navbar/>
      <NameProduct/>

      <ProductCard/>
      <ProductCard/>
      <ProductCard/>

      <Footer/>
    </div>
  )
}
 
export default Sweater