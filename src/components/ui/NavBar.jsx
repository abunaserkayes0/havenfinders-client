import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link to="/" className="text-xl font-black">
          HavenFinders
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-left lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm w-52 dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allspots">All Tourist Spots</Link>
            </li>
            <li>
              <Link to="/addspot">Add Tourist Spot</Link>
            </li>
            <li>
              <Link to="/myList">My List</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <ul className="menu flex-nowrap menu-horizontal hidden text-sm lg:flex px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allspots">All Tourist Spots</Link>
          </li>
          <li>
            <Link to="/addspot">Add Tourist Spot</Link>
          </li>
          <li>
            <Link to="/myList">My List</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
