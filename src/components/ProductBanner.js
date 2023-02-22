import { Swiper, SwiperSlide } from "swiper/react";
import banner from '../image/banner.jpg'
import banner2 from '../image/banner2.jpg'
import banner3 from '../image/banner3.jpg'
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";


// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";


const ProductBanner = () => {
  return (
    <Swiper
    spaceBetween={30}
    effect={"fade"}
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[EffectFade, Navigation, Pagination]}
    className="mySwiper"
    style={{width: '100%', height: 'auto'}}
  >
    <SwiperSlide>
      <img src={banner} style={{width: '100%'}} alt="foto" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={banner2} style={{width: '100%'}}  alt="foto" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={banner3} style={{width: '100%'}}  alt="foto" />
    </SwiperSlide>
  </Swiper>
  );
}

export default ProductBanner

