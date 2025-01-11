import React from "react";
import { Link } from "react-router-dom";

export default function Card({ allTouristsSpot }) {
  const {
    averageCost,
    countryName,
    imageUrl,
    location,
    seasonality,
    shortDescription,
    spotName,
    totalVisitorsPerYear,
    travelTime,
    userEmail,
    userName,
    _id,
  } = allTouristsSpot || {};

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={imageUrl}
          alt={spotName || "Tourist Spot"}
          className="w-full h-56 sm:h-60 md:h-60 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{spotName || "Unknown Spot"}</h2>
        <p>
          {shortDescription
            ? shortDescription.length > 120
              ? shortDescription.slice(0, 100) + "...Read More"
              : shortDescription
            : "No description available."}
        </p>
        <Link to={`/tourist/${_id}`} className="card-actions">
          <button className="btn bg-black text-white hover:text-black">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
}
