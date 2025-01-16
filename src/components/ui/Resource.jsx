import React from "react";

export default function Resource({ image, title, description }) {
  return (
    <div className="card bg-base-100 image-full w-full max-w-xs lg:max-w-sm shadow-xl mx-auto">
      <figure className="relative aspect-square">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={image}
          alt={title}
        />
      </figure>
      <div className="card-body flex flex-col items-center justify-center text-center h-full p-4">
        <h2 className="text-center text-3xl lg:text-4xl font-bold truncate w-full">
          {title}
        </h2>
        <p className="text-xl lg:text-2xl line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
