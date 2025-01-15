import React from "react";
import Layout from "../components/ui/Layout";
import Carousel from "../components/ui/Carousel";
import TouristsSpots from "../components/tourists/TouristsSpots";
import SwiperCarousels from "../components/ui/SwiperCarousels";
import Resources from "../components/ui/Resources";
import useAuth from "../hooks/useAuth";
import Loading from "../components/ui/Loading";

export default function Home() {
  const { loading } = useAuth;
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Carousel />
          <TouristsSpots />
          <SwiperCarousels />
          <Resources />
        </>
      )}
    </>
  );
}
