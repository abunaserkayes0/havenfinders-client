import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";
import SwiperCarousel from "./SwiperCarousel";
import useAuth from "../../hooks/useAuth";

export default function SwiperCarousels() {
  const {color} = useAuth()
  return (
    <>
      <div className="text-center my-5">
        <h2 className="text-4xl font-black my-20">
          Our <span className={`${color && "text-white"} text-black`}>Clients</span> Reviews
        </h2>
      </div>
      <Swiper
        effect={"cards"}
        autoplay={{
          delay: 2000,
        }}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        className="mySwiper w-full lg:w-2/5"
      >
        <SwiperSlide>
          <SwiperCarousel
            image="https://res.cloudinary.com/dhjkntuy2/image/upload/v1736702666/HavenFinders/pexels-harrisburgphotographer-27041489_ttjmok.jpg"
            name="John Doe"
            rating="5"
            review="Amazing service! Highly recommend."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCarousel
            image="https://res.cloudinary.com/dhjkntuy2/image/upload/v1736702666/HavenFinders/pexels-san-wedding-679371005-20700958_hsrzjy.jpg"
            name="Jane Smith"
            rating="4"
            review="Great experience, will use again."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCarousel
            image="https://res.cloudinary.com/dhjkntuy2/image/upload/v1736702665/HavenFinders/pexels-vladimir-kudin-131638970-10141158_jplhhe.jpg"
            name="Alice Johnson"
            rating="5"
            review="Absolutely fantastic! Loved it."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCarousel
            image="https://res.cloudinary.com/dhjkntuy2/image/upload/v1736702665/HavenFinders/pexels-kooldark-17049792_i39jzo.jpg"
            name="Smith Adone"
            rating="4"
            review="Great experience, will use again."
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
