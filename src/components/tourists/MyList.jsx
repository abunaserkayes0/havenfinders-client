import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Loading from "../ui/Loading";
import CardList from "../ui/CardList";
import { ArrowRight } from "lucide-react";
import useAuth from "../../hooks/useAuth";

export default function MyList() {
  const addedSpots = useLoaderData();
  const [loading, setLoading] = useState(true);
  const {color} = useAuth();

  useEffect(() => {
    if (addedSpots) {
      setLoading(false);
    }
  }, [addedSpots]);

  let content;
  if (loading) {
    content = <Loading />;
  }
  if (addedSpots.length === 0) {
    content = <p>There is no item found</p>;
  }
  if (addedSpots.length > 0) {
    content = (
      <div className="mx-10">
        <div className="text-center my-20">
          <h2 className={`text-4xl font-black ${color && "text-white"}`}>
            My <span className={`text-black ${color && "text-white"}`}>List</span> Spots
          </h2>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {addedSpots?.map((addedSpot) => (
            <CardList key={addedSpot._id} addedSpot={addedSpot} />
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
