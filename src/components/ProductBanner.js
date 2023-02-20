import Carousel from 'react-bootstrap/Carousel';
import Banner from '../image/banner.jpg'
import Banner2 from '../image/banner2.jpg'
import Banner3 from '../image/banner3.jpg'

function SlideBanner() {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={Banner2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>Be the reel you</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={Banner3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Be the reel you</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={Banner}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Be the reel you</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideBanner;