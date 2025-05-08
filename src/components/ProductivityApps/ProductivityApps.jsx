import React from "react";
import ProductivityApp from "./ProductivityApp";
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay} from "swiper/modules";

const ProductivityApps = ({productivityApps}) => {
  return (
    <div className="mt-10">
      <h1 className="py-3 text-3xl font-bold">Productivity Apps</h1>
      <div>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper py-4"
        >
          {productivityApps.map((app) => (
            <SwiperSlide className="py-4" key={app.id}>
              <ProductivityApp app={app}></ProductivityApp>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductivityApps;
