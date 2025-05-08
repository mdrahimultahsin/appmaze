import React from "react";

import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay} from "swiper/modules";

import HealthApp from "./HealthApp";

const HealthApps = ({healthApps}) => {
  return (
    <div className="mt-10">
      <h1 className="py-3 text-3xl font-bold">Health Apps</h1>
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
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper py-4"
        >
          {healthApps.map((app) => (
            <SwiperSlide className="py-4" key={app.id}>
              <HealthApp app={app}></HealthApp>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HealthApps;
