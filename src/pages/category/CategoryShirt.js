import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import ProductCard from "../../components/product/ProductCard"
import StripBar from "../../components/navbar/StripBar"
import { Container } from "react-bootstrap"

const categori = () => {
  return(
    <div>
      <Navbar/>

      <StripBar title='T-Shirt' />

      <Container>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      </Container>

      <Footer/>
    </div>
  )
}
 
export default categori