import React from "react";

export default function add() {
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
              labelName="Email"
              {...register("email", { required: "This filed is required" })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            <InputField
              inputName="password"
              inputType="password"
              placeholder="Enter Your password"
              labelName="Password"
              {...register("password", { required: "This filed is required" })}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}

            <div className="form-control mt-6">
              <button className="btn bg-black text-white hover:text-black hover:bg-slate-200">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
