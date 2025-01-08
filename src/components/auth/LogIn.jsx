import React from "react";
import InputField from "../ui/InputField";
import { Link } from "react-router-dom";
import { Feather, Github } from "lucide-react";

export default function LogIn() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Login</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <InputField
              inputName="email"
              inputType="email"
              placeholder="Enter Your Email"
              labelName="Email"
            />
            <InputField
              inputName="password"
              inputType="password"
              placeholder="Enter Your password"
              labelName="Password"
            />
            <label className="label">
              <Link to="/register" className="label-text-alt link link-hover">
                Register Now?
              </Link>
            </label>
            <div className="form-control mt-6">
              <button className="btn bg-black text-white">Login</button>
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
