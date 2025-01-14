import { Edit2, Eye, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { url } from "../../../utils/fetchUrl";

import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

export default function CardList({ addedSpot }) {
  const data = useLoaderData();
  const {color} = useAuth();
  const [listItems, setListItems] = useState(data);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const {
    _id,
    averageCost,
    countryName,
    imageUrl,
    location,
    shortDescription,
    spotName,
  } = addedSpot || {};

  const handleDelete = async (id) => {
    try {
      const confirmation = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (confirmation.isConfirmed) {
        const res = await fetch(`${url}/tourist/${id}`, {
          method: "DELETE",
        });

        const result = await res.json();

        if (result.deletedCount > 0) {
          const rest = listItems.filter((listItem) => listItem._id !== id);
          setListItems(rest);

          Swal.fire("Deleted!", "The item has been deleted.", "success");

          navigate(pathname);
        } else {
          Swal.fire("Error!", "Failed to delete the item.", "error");
        }
      }
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Error!",
        "An error occurred while deleting the item.",
        "error"
      );
    }
  };

  return (
    <div className={`card bg-base-100 shadow-xl ${color && "bg-black text-white"}`}>
      <figure>
        <img
          src={imageUrl}
          alt={spotName || "Tourist Spot"}
          className="w-full h-56 sm:h-60 md:h-60 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{spotName || "Unknown Spot"}</h2>
        <h4 className="text-xl font-black">Country:{countryName}</h4>
        <h3 className="text-2xl font-black">${averageCost}</h3>
        <h5 className="text-sm italic">Location:{location}</h5>
        <p>
          {shortDescription
            ? shortDescription.length > 120
              ? shortDescription.slice(0, 100) + "...Read More"
              : shortDescription
            : "No description available."}
        </p>
        <div className="flex items-center justify-start gap-2">
          <Link to={`/tourist/${_id}`} className="card-actions">
            <button className="btn bg-black text-white hover:text-black">
              <Eye />
            </button>
          </Link>
          <div onClick={() => handleDelete(_id)} className="card-actions">
            <button className="btn bg-black text-white hover:text-black">
              <Trash2 />
            </button>
          </div>
          <Link to={`/update/${_id}`} className="card-actions">
            <button className="btn bg-black text-white hover:text-black">
              <Edit2 />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
