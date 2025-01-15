import React from "react";
import notFound from "/404.jpg";
import { Link } from "react-router-dom";
export default function ErrorElement() {
  return (
    <div className="flex flex-col items-center justify-center p-20">
      <img className="max-w-full" src={notFound} alt="Image is not found" />
      <Link to="/">
        <button className="bg-slate-950 text-white px-9 py-4 rounded font-semibold">Go Back</button>
      </Link>
    </div>
  );
}
