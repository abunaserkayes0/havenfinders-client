import React from "react";
import Layout from "../components/ui/Layout";
import Carousel from "../components/ui/Carousel";
import TouristsSpots from "../components/tourists/TouristsSpots";
import SwiperCarousels from "../components/ui/SwiperCarousels";
import Resources from "../components/ui/Resources";

export default function Home() {
  return (
    <>
      <Carousel />
      <TouristsSpots />
      <SwiperCarousels />
      <Resources />
    </>
  );
}
