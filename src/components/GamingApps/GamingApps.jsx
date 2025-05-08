import React from "react";

import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay} from "swiper/modules";
import GamingApp from "./GamingApp";

const GamingApps = ({gamingApps}) => {
  return (
    <div className="mt-15">
      <h1 className="py-3 text-3xl font-bold">Gaming Apps</h1>
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
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper py-4"
        >
          {gamingApps.map((app) => (
            <SwiperSlide className="py-4" key={app.id}>
              <GamingApp app={app}></GamingApp>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GamingApps;
