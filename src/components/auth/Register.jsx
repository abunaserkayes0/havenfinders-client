import React, { useContext } from "react";
import InputField from "../ui/InputField";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { url } from "../../../utils/fetchUrl";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.init";

export default function Register() {
  const { createUser, currentUser,color } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const { email, name, password, photoUrl: photo } = data;

    createUser(email, password).then((user) => {
      const { displayName, photoUrl } = user.user;
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      }).then(async () => {
        const { email, displayName, photoURL } = user.user;

        const userInfo = {
          email,
          displayName,
          photoURL,
        };

        try {
          const res = await fetch(`${url}/users`, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          });
          const result = await res.json();
          if (result.insertedId) {
            Swal.fire({
              title: "Good job!",
              text: "User inserted SuccessFully",
              icon: "success",
              timer: 1000,
            });
            currentUser();
            reset();
            navigate("/login");
          }
        } catch (error) {
          if (error) {
            Swal.fire({
              title: "Sorry!",
              text: `${error.message}`,
              icon: "error",
            });
          }
        }
      });
    });
  };

  return (
    <div className={`hero bg-base-200 min-h-screen  ${color && "bg-black text-black"}`}>
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className={`text-3xl font-bold  ${color && "bg-black text-white"}`}>Register</h1>
        </div>
        <div className={`card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ${color && "bg-black text-black"}`}>
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
              <Link to="/login" className={`label-text-alt link link-hover ${color && "text-white"}`}>
                Do you want to log?
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
