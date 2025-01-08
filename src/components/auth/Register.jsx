import React from "react";
import InputField from "../ui/InputField";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Register</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <InputField
              inputName="name"
              inputType="text"
              placeholder="Enter Your name"
              labelName="Name"
              {...register("name", { required: "The field is required" })}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
            <InputField
              inputName="email"
              inputType="email"
              placeholder="Enter Your Email"
              labelName="Email"
              {...register("email", { required: "The field is required" })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            <InputField
              inputName="photoUrl"
              inputType="photoUrl"
              placeholder="Enter Your photoUrl"
              labelName="PhotoUrl"
              {...register("photoUrl", { required: "The field is required" })}
            />
            {errors.photoUrl && (
              <span className="text-red-500">{errors.photoUrl.message}</span>
            )}
            <InputField
              inputName="password"
              inputType="password"
              placeholder="Enter Your password"
              labelName="Password"
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
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
            <label className="label">
              <Link to="/login" className="label-text-alt link link-hover">
                Do you want to log in here?
              </Link>
            </label>
            <div className="form-control mt-6">
              <button className="btn bg-black text-white hover:text-black hover:bg-slate-200">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
