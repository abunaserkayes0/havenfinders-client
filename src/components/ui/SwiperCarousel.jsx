import React from "react";
import useAuth from "../../hooks/useAuth";

export default function SwiperCarousel({ image, name, rating, review }) {
  const { color } = useAuth();

  return (
    <div
      className={`${
        color ? "bg-[#0e0e0e] text-white" : "bg-white text-black"
      } card lg:card-normal shadow-inner p-10`}
    >
      <figure className="mb-5">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full object-cover"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-center text-xl font-semibold">{name}</h2>
        <p className="italic">{review}</p>
        <div className="flex justify-center mt-3">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <span
              key={starIndex}
              className={`${
                starIndex < rating ? "text-yellow-500" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
