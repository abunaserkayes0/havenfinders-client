import React from "react";

export default function Resource({ image }) {
  return (
    <div className="card bg-base-100  image-full w-full max-w-xs shadow-xl mx-auto">
      <figure className="relative aspect-square">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body flex flex-col items-center justify-center text-center h-full">
        <h2 className="card-title">Available Spots</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
}
