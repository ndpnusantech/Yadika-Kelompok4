import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from '../components/ProductCard'
import { Button } from "react-bootstrap";
import '../asset/css/Complete.css'

const Completeorder = () => {
    return (
        <div>
            <Navbar />
            {/* BR Conplete */}
            <section id="commend">
                <div className="fra">
                    ORDER COMPLETE
                </div>
                <div className="by">
                    <h2>ORDER RECEIVED</h2>
                </div>
                <div className="data">
                    <p>Nauval Roozan Mulyana <br />089xxxxxxxxx<br />Jawa Barat, Bandung, Kec. Cangkuang, 48913<br />sanggar indah lestari, B4 no 17<br />
                    </p>
                </div>
            </section>
            {/* End BR Conplete */}


            <div className="happy">
                THANK YOU FOR ORDERING AT T - CLASIC
            </div>

            <div className="bta">
                <Button href="/product" variant="secondary" style={{ width: "200px" }} >
                ORDER MORE
                </Button>
            </div>

            {/* Cart */}
            <ProductCard />
            {/* End Cart */}




            <Footer />
        </div>
    )
}

export default Completeorder