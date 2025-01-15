import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Loading from "../ui/Loading";
import CardItem from "../ui/CardItem";
import { useForm } from "react-hook-form";
import { url } from "../../../utils/fetchUrl";
import useAuth from "../../hooks/useAuth";

export default function AllTouristsSpots() {
  const allTouristsSpots = useLoaderData();
  const { color } = useAuth();
  const [loading, setLoading] = useState(true);
  const [touristSpots, setTouristSpots] = useState(allTouristsSpots);
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("sorting", "asc");
    setLoading(false);
  }, [setValue]);

  const handleOnchange = async (e) => {
    setLoading(true);
    setValue("sorting", e.target.value);
    const sortingValue = getValues("sorting");
    try {
      const res = await fetch(`${url}/tourist?sortValue=${sortingValue}`);
      const result = await res.json();
      setTouristSpots(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (allTouristsSpots) {
      setLoading(false);
    }
  }, [allTouristsSpots]);

  let content;
  if (loading) {
    content = <Loading />;
  }
  if (touristSpots.length === 0) {
    content = <p>There is no item found</p>;
  }
  if (touristSpots.length > 0) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {touristSpots?.map((allTouristsSpot) => (
          <CardItem
            key={allTouristsSpot._id}
            allTouristsSpot={allTouristsSpot}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <form className="grid items-center justify-end w-full my-3">
        <label className="px-1 font-xl font-bold" htmlFor="sorting">
          Sorting
        </label>
        <select
          id="sorting"
          {...register("sorting", {
            onChange: handleOnchange,
          })}
          className={`border rounded px-3 py-2 ${color && "bg-black"}`}
        >
          <option value="asc">ascOrder</option>
          <option value="dsc">dscOrder</option>
        </select>
        {errors.sorting && (
          <span className="text-red-500">{errors.sorting.message}</span>
        )}
      </form>
      {content}
    </>
  );
}
