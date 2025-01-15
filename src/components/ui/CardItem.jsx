import React from "react";
import { Link } from "react-router-dom";

export default function CardItem({ allTouristsSpot }) {
  const {
    _id,
    imageUrl,
    spotName,
    averageCost,
    totalVisitorsPerYear,
    travelTime,
    seasonality,
    userEmail
  } = allTouristsSpot || {};

  return (
    <div className="card shadow-xl">
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
          <strong>AverageCost :</strong> {averageCost || "Not available"}
        </p>
        <p>
          <strong>TotalVisitorsPerYear :</strong> 
          {totalVisitorsPerYear || "Not available"}
        </p>
        <p>
          <strong>TravelTime :</strong> {travelTime || "Not available"}
        </p>
        <p>
          <strong>User :</strong> {userEmail || "Not available"}
        </p>
        <p>
          <strong>seasonality:</strong> {seasonality || "Not available"}
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
