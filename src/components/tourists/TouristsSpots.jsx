import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Loading from "../ui/Loading";
import Card from "../ui/Card";
import { ArrowRight } from "lucide-react";

export default function TouristsSpots() {
  const touristSpots = useLoaderData();
  const [loading, setLoading] = useState(true);
  const touristSpotsSlice = touristSpots.slice(0, 6);

  useEffect(() => {
    if (touristSpotsSlice) {
      setLoading(false);
    }
  }, [touristSpotsSlice]);

  let content;
  if (loading) {
    content = <Loading />;
  }
  if (touristSpotsSlice.length === 0) {
    content = <p>There is no item found</p>;
  }
  if (touristSpotsSlice.length > 0) {
    content = (
      <div className="mx-10">
        <div className="text-center my-5">
          <h2 className="text-3xl font-bold">
            Tourists <span className="text-slate-600">Spots</span> Section
          </h2>
          <p className="text-xl italic">
            If you want to go fast, go alone. If you want to go far, go together
          </p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {touristSpotsSlice?.map((allTouristsSpot) => (
            <Card key={allTouristsSpot._id} allTouristsSpot={allTouristsSpot} />
          ))}
        </section>
        <Link
          to="/allspots"
          className="w-full flex items-center justify-center my-5"
        >
          <button className="btn bg-black text-white hover:text-black px-10 py-3 rounded-lg">
            See More <ArrowRight />
          </button>
        </Link>
      </div>
    );
  }

  return <>{content}</>;
}
