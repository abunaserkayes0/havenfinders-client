import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination,Autoplay } from "swiper/modules";
import Resource from "./Resource";

export default function Resources() {
  return (
    <>
      <div className="text-center my-5">
        <h2 className="text-4xl font-black my-20">
          Exclusive <span className="text-black">Resources</span>
        </h2>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay:2000
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Resource image="https://res.cloudinary.com/dhjkntuy2/image/upload/v1736706057/Resources/pexels-js-moon-605472244-17336171_ye4aii.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Resource image="https://res.cloudinary.com/dhjkntuy2/image/upload/v1736706057/Resources/pexels-js-moon-605472244-17336176_p5kdpj.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Resource image="https://res.cloudinary.com/dhjkntuy2/image/upload/v1736706057/Resources/pexels-monika-balciuniene-1144471-18926047_hn0ka9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Resource image="https://res.cloudinary.com/dhjkntuy2/image/upload/v1736706056/Resources/pexels-azizico-27137595_gz26uw.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Resource image="https://res.cloudinary.com/dhjkntuy2/image/upload/v1736706057/Resources/pexels-geladelrosario-4447105_bbkqd5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Resource image="https://res.cloudinary.com/dhjkntuy2/image/upload/v1736706057/Resources/pexels-i-smail-altin-1722033-28406651_t15t4g.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Resource image="https://res.cloudinary.com/dhjkntuy2/image/upload/v1736706056/Resources/pexels-annalise-tingler-362152355-14632449_wwzwup.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Resource image="https://res.cloudinary.com/dhjkntuy2/image/upload/v1736706056/Resources/pexels-adriana-coulson-1070894176-21336456_k4tatl.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
