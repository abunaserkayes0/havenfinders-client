import React from "react";
import InputField from "../ui/InputField";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialMedia from "./SocialMedia";

export default function LogIn() {
  const { signInUser, color } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then((userCrd) => {
        if (userCrd) {
          Swal.fire({
            title: "Good Jobs!",
            text: "Sign In SuccessFully",
            icon: "success",
          });
          navigate(state || "/");
          reset();
        }
      })
      .catch((error) => {
        if (error.message) {
          Swal.fire({
            title: "Somethings Went Wrong!",
            text: `${error.message}`,
            icon: "error",
          });
        }
      });
  };

  return (
    <div
      className={`hero bg-base-200 min-h-screen ${
        color && "bg-black text-black"
      }`}
    >
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1
            className={`text-3xl font-bold ${color && "bg-black text-white"}`}
          >
            Login
          </h1>
        </div>
        <div
          className={`card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5 ${
            color && "bg-black"
          }`}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <InputField
              inputName="email"
              inputType="email"
              placeholder="Enter Your Email"
              {...register("email", { required: "This filed is required" })}
              labelName="Email"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            <InputField
              inputName="password"
              inputType="password"
              placeholder="Enter Your password"
              {...register("password", {
                required: "The field is required",
                minLength: {
                  value: 6,
                  message: "Password length must 6 characters",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z]).*$/,
                  message: "Must have Uppercase and Lowercase latter",
                },
              })}
              labelName="Password"
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
            <label className="label">
              <Link
                to="/register"
                className={`label-text-alt link link-hover  ${
                  color && "text-white"
                }`}
              >
                Register Now?
              </Link>
            </label>
            <div className="form-control mt-6">
              <button className="btn bg-black text-xl text-white hover:text-black hover:bg-slate-200">
                Login
              </button>
            </div>
          </form>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
