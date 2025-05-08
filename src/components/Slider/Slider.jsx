import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import img1 from "../../assets/banner1.jpeg";
import img2 from "../../assets/banner2.jpeg";
import img3 from "../../assets/banner3.jpeg";
import img4 from "../../assets/banner4.jpeg";
import img5 from "../../assets/banner5.png";
import img6 from "../../assets/banner6.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Navigation} from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="rounded-2xl"
      >
        <SwiperSlide>
          <img
            className="w-full md:max-h-190 object-cover cursor-pointer rounded-2xl"
            src={img5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full md:max-h-190 object-cover cursor-pointer rounded-2xl"
            src={img1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full md:max-h-190 object-cover cursor-pointer rounded-2xl"
            src={img4}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full md:max-h-190 object-cover cursor-pointer rounded-2xl"
            src={img3}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full md:max-h-190 object-cover cursor-pointer rounded-2xl"
            src={img2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full md:max-h-190 object-cover cursor-pointer rounded-2xl"
            src={img6}
          />
        </SwiperSlide>
      </Swiper>
      
    </>
  );
};

export default Slider;
