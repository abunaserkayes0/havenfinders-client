import React from "react";
import Layout from "../components/ui/Layout";
import Carousel from "../components/ui/Carousel";
import TouristsSpots from "../components/tourists/TouristsSpots";

export default function Home() {
  return (
    <>
      <Carousel />
      <TouristsSpots/>
    </>
  );
}
