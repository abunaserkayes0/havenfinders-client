import React from "react";
import InputField from "../ui/InputField";
import { Link } from "react-router-dom";
import { Feather, Github } from "lucide-react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

export default function LogIn() {
  const { signInUser } = useAuth();

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
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Login</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
              <Link to="/register" className="label-text-alt link link-hover">
                Register Now?
              </Link>
            </label>
            <div className="form-control mt-6">
              <button className="btn bg-black text-white hover:text-black hover:bg-slate-200">
                Login
              </button>
            </div>
          </form>
          <div className="flex items-center justify-evenly gap-2 my-2">
            <button className="bg-black flex items-center rounded text-white px-5 py-2 gap-2">
              Google <Feather size={15} />
            </button>
            <button className="bg-black flex items-center rounded text-white px-5 py-2 gap-2">
              Github <Github size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
