// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "./ServiceCard";
const ServicesSlider = () => {
   return (
      <div className="z-10">
         <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
               delay: 1500,
               disableOnInteraction: false,
            }}
            grabCursor={true}
            className="mySwiper">
            <SwiperSlide>
               <ServiceCard />
            </SwiperSlide>
            <SwiperSlide>
               <ServiceCard />
            </SwiperSlide>
            <SwiperSlide>
               <ServiceCard />
            </SwiperSlide>
            <SwiperSlide>
               <ServiceCard />
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default ServicesSlider;
