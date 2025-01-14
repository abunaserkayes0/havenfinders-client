import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../ui/InputField";
import { url } from "../../../utils/fetchUrl";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function UpdateCard() {
  const { user } = useAuth();
  const data = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    averageCost,
    countryName,
    imageUrl,
    location,
    seasonality,
    shortDescription,
    spotName,
    totalVisitorsPerYear,
    travelTime,
  } = data || {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      averageCost,
      countryName,
      imageUrl,
      location,
      seasonality,
      shortDescription,
      spotName,
      totalVisitorsPerYear,
      travelTime,
    },
  });
  const onSubmit = (data) => {
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
    } = data;

    const updateSpot = {
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
    };

    fetch(`${url}/tourist/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateSpot),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          Swal.fire({
            title: "Data Update SuccessFully",
            icon: "success",
            showConfirmButton:false,
            timer: 1000,
          });
          navigate(`/mylist/${user?.email}`);
        }
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            title: "Something Went w",
            icon: "error",
            timer: 1000,
          });
        }
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen flex">
      <div className="hero-content flex-col w-full max-w-4xl mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold">Update Tourist Spots</h1>
        </div>
        <div className="card bg-base-100 w-full shadow-2xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body grid gap-6 sm:grid-cols-1 md:grid-cols-2"
          >
            {/* Column 1 */}
            <div>
              <InputField
                inputName="imageUrl"
                inputType="text"
                placeholder="Enter Your imageUrl"
                labelName="Image URL"
                {...register("imageUrl", {
                  required: "This field is required",
                })}
                defaultValue={imageUrl}
              />
              {errors.imageUrl && (
                <span className="text-red-500">{errors.imageUrl.message}</span>
              )}
              <InputField
                inputName="spotName"
                inputType="text"
                placeholder="Enter Your spotName"
                labelName="Spot Name"
                {...register("spotName", {
                  required: "This field is required",
                })}
                defaultValue={spotName}
              />
              {errors.spotName && (
                <span className="text-red-500">{errors.spotName.message}</span>
              )}
              <InputField
                inputName="countryName"
                inputType="text"
                placeholder="Enter Your countryName"
                labelName="Country Name"
                {...register("countryName", {
                  required: "This field is required",
                })}
                defaultValue={countryName}
              />
              {errors.countryName && (
                <span className="text-red-500">
                  {errors.countryName.message}
                </span>
              )}
              <InputField
                inputName="location"
                inputType="text"
                placeholder="Enter Your location"
                labelName="Location"
                {...register("location", {
                  required: "This field is required",
                })}
                defaultValue={location}
              />
              {errors.location && (
                <span className="text-red-500">{errors.location.message}</span>
              )}
              <InputField
                inputName="shortDescription"
                inputType="text"
                placeholder="Enter Your shortDescription"
                labelName="Short Description"
                {...register("shortDescription", {
                  required: "This field is required",
                })}
                defaultValue={shortDescription}
              />
              {errors.shortDescription && (
                <span className="text-red-500">
                  {errors.shortDescription.message}
                </span>
              )}

              <InputField
                inputName="averageCost"
                inputType="number"
                placeholder="Enter Your averageCost"
                labelName="Average Cost"
                {...register("averageCost", {
                  required: "This field is required",
                })}
                defaultValue={averageCost}
              />
              {errors.averageCost && (
                <span className="text-red-500">
                  {errors.averageCost.message}
                </span>
              )}
            </div>

            {/* Column 2 */}
            <div>
              <label htmlFor="seasonality">Seasonality</label>
              <select
                id="seasonality"
                {...register("seasonality", {
                  required: "This field is required",
                })}
                defaultValue={seasonality}
                className="border rounded px-3 py-2 w-full"
              >
                <option value="winter">Winter</option>
                <option value="summer">Summer</option>
              </select>
              {errors.seasonality && (
                <span className="text-red-500">
                  {errors.seasonality.message}
                </span>
              )}

              <InputField
                inputName="travelTime"
                inputType="number"
                placeholder="Enter Your travelTime"
                labelName="Travel Time"
                {...register("travelTime", {
                  required: "This field is required",
                })}
                defaultValue={travelTime}
              />
              {errors.travelTime && (
                <span className="text-red-500">
                  {errors.travelTime.message}
                </span>
              )}
              <InputField
                inputName="totalVisitorsPerYear"
                inputType="number"
                placeholder="Enter Your totalVisitorsPerYear"
                labelName="Total Visitors Per Year"
                {...register("totalVisitorsPerYear", {
                  required: "This field is required",
                })}
                defaultValue={totalVisitorsPerYear}
              />
              {errors.totalVisitorsPerYear && (
                <span className="text-red-500">
                  {errors.totalVisitorsPerYear.message}
                </span>
              )}
              <InputField
                inputName="userEmail"
                inputType="email"
                placeholder="Enter Your userEmail"
                labelName="User Email"
                defaultValue={user?.email}
                disabled
                {...register("userEmail", {
                  required: "This field is required",
                })}
              />
              {errors.userEmail && (
                <span className="text-red-500">{errors.userEmail.message}</span>
              )}
              <InputField
                inputName="userName"
                inputType="text"
                placeholder="Enter Your userName"
                labelName="User Name"
                defaultValue={user?.displayName}
                disabled
                {...register("userName", {
                  required: "This field is required",
                })}
              />
              {errors.userName && (
                <span className="text-red-500">{errors.userName.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6 sm:col-span-1 md:col-span-2">
              <button className="btn bg-black text-white hover:text-black hover:bg-slate-200">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
