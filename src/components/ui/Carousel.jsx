import React from "react";
import bannerOne from "/banner-1.png";
import bannerTow from "/banner-2.png";
import bannerThree from "/banner-3.png";
import bannerFour from "/banner-4.png";
import { ArrowRight } from "lucide-react";
import CarouseItem from "./CarouseItem";
export default function Carousel() {
  return (
    <div className="carousel w-full">
      <div
        id="slide1"
        className="carousel-item relative w-full sm:px-3 md:px-3 "
      >
        <CarouseItem
          title=" The world is full of magic things, patiently waiting for our
              senses to grow sharper."
          paragraph="The world brims with unseen wonders, subtle and profound, waiting
              quietly for us to notice. Nature whispers its secrets in the
              rustle of leaves, the soft hues of a sunset, and the melody of
              birdsong. Cities hum with energy, where every corner holds untold
              stories and fleeting moments of connection. The magic lies not in
              its elusiveness but in our readiness to perceive it"
          imageSrc={bannerOne}
          buttonText="Read More"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full sm:px-3 md:px-3 "
      >
        <CarouseItem
          title="The journey of a thousand miles starts with a single step, but
              it's the footsteps that make the path."
          paragraph="The journey of a thousand miles begins with a single step, but
              it’s the footsteps that create the path. Each step is a small but
              significant marker of progress, shaping the trail that leads us
              forward. Success is rarely a leap; it’s the accumulation of
              consistent efforts, decisions, and perseverance. Even when the
              road seems endless or unclear, every step taken adds clarity and
              direction."
          buttonText="Read More"
          imageSrc={bannerTow}
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative w-full sm:px-3 md:px-3 "
      >
        <CarouseItem
          title="The journey of a thousand miles starts with a single step, but
              it's the footsteps that make the path."
          paragraph="The journey of a thousand miles begins with a single step, but it
              is the footsteps that define the path. Each step we take, no
              matter how small or hesitant, contributes to the greater journey
              ahead. Progress is not made in leaps and bounds but in the steady
              rhythm of commitment and perseverance."
          buttonText="Read More"
          imageSrc={bannerThree}
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide4"
        className="carousel-item relative w-full sm:px-3 md:px-3 "
      >
        <CarouseItem
          title=" The world is a mirror, and those who do not travel see only their
              own reflection."
          paragraph="Travel is the gateway to understanding the diversity and richness
              of life. To stay rooted in one place is to view the world as a
              mirror, reflecting only the familiar sights, sounds, and ideas of
              our immediate surroundings. But stepping beyond those boundaries
              allows us to see life from new angles, gaining perspectives that
              challenge our assumptions and broaden our understanding."
          buttonText="Read More"
          imageSrc={bannerFour}
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
