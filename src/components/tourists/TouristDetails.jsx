import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function TouristDetails() {
  const touristDetail = useLoaderData();
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
  } = touristDetail || {};

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={imageUrl} className="max-w-md rounded-lg shadow-4xl" />
        <div>
          <h1 className="text-3xl font-bold">{spotName}</h1>
          <p className="py-6">{shortDescription}</p>
          <div className="grid grid-cols-2 lg:grid-cols-1">
            <p>
              <strong>Location:</strong> {location || "Not specified"}
            </p>
            <p>
              <strong>Country:</strong> {countryName || "Not specified"}
            </p>
            <p>
              <strong>Seasonality:</strong> {seasonality || "Not specified"}
            </p>
            <p>
              <strong>Average Cost:</strong> ${averageCost || "Not available"}
            </p>
            <p>
              <strong>Travel Cost:</strong> ${travelTime || "Not available"}
            </p>
            <p>
              <strong>Total Visitors Per Year:</strong>{" "}
              {totalVisitorsPerYear || "Data not available"}
            </p>
            <p>
              <strong>Submitted By:</strong> {userName || "Anonymous"}
            </p>
            <p>
              <strong>Contact:</strong> {userEmail || "No contact provided"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
