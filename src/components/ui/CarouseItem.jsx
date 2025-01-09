import { ArrowRight } from "lucide-react";
import React from "react";
import Typewriter from "typewriter-effect";
export default function CarouseItem({
  title,
  paragraph,
  buttonText,
  imageSrc,
}) {
  return (
    <>
      <div className="mx-5 flex flex-col md:flex-row items-center justify-evenly">
        <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black my-3">
            {title}
            <Typewriter
              options={{
                strings: [title],
                autoStart: true,
                loop: true,
                delay: 25,
                deleteSpeed: 50,
              }}
            />
          </h1>
          <p className="my-2">{paragraph}</p>
          <div className="my-5 flex items-center justify-center md:items-start md:justify-start lg:items-start lg:justify-start">
            <button className="bg-black flex items-center justify-center gap-2 rounded text-white px-5 py-3 md:px-7 md:py-4">
              {buttonText} <ArrowRight />{" "}
            </button>
          </div>
        </div>
        <div className="image w-full md:w-fit lg:w-fit order-1 md:order-2">
          <img src={imageSrc} className="w-full h-auto" />
        </div>
      </div>
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide4" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide2" className="btn btn-circle">
          ❯
        </a>
      </div>
    </>
  );
}
