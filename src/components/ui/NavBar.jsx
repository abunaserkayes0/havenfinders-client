import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loading from "./Loading";
import { MoonStar, SunMoon } from "lucide-react";

export default function NavBar() {
  const { user, loading, logOut, handelToggleColor, color } = useAuth();

  return (
    <div className="navbar">
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
            className={`menu menu-sm w-52 dropdown-content bg-base-100 font-bold rounded-box z-[1] mt-3 p-2 shadow  ${
              color && "bg-black text-white"
            }`}
          >
            <li>
              <Link className={` hover:bg-white hover:text-black`} to="/">
                Home
              </Link>
            </li>
            {user && (
              <>
                <li>
                  <Link
                    className={` hover:bg-white hover:text-black`}
                    to="/allspots"
                  >
                    All Tourist Spots
                  </Link>
                </li>
                <li>
                  <Link
                    className={` hover:bg-white hover:text-black`}
                    to="/addspot"
                  >photoURL
                    Add Tourist Spot
                  </Link>
                </li>
                <li>
                  <Link
                    className={` hover:bg-white hover:text-black`}
                    to={`/mylist/${user.email}`}
                  >
                    My List
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link
                className={` hover:bg-white hover:text-black`}
                to="/register"
              >
                Register
              </Link>
            </li>
            {user ? (
              <li>
                <Link
                  className={` hover:bg-white hover:text-black`}
                  to="/login"
                >
                  Logout
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  className={` hover:bg-white hover:text-black`}
                  to="/login"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
        <ul className="menu menu-horizontal flex-nowrap hidden font-bold text-sm lg:flex lg:mx-32">
          <li>
            <Link className="focus:text-blue-600" to="/">
              Home
            </Link>
          </li>
          {user && (
            <>
              <li>
                <Link className="focus:text-blue-600" to="/allspots">
                  All Tourist Spots
                </Link>
              </li>
              <li>
                <Link className="focus:text-blue-600" to="/addspot">
                  Add Tourist Spot
                </Link>
              </li>
              <li>
                <Link
                  className="focus:text-blue-600"
                  to={`/mylist/${user.email}`}
                >
                  My List
                </Link>
              </li>
            </>
          )}
          <li>
            <Link className="focus:text-blue-600" to="/register">
              Register
            </Link>
          </li>
          {loading ? (
            <Loading />
          ) : user?.email ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${
                  color && "bg-black text-white"
                }`}
              >
                <li className="mx-3">{user?.displayName}</li>
                <li>
                  <Link
                    onClick={logOut}
                    className={`focus:text-blue-600 hover:bg-white hover:text-black `}
                    to="/login"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <li>
              <Link className="focus:text-blue-600" to="/login">
                Login
              </Link>
            </li>
          )}
          <button onClick={handelToggleColor} className="px-3">
            {color ? <SunMoon /> : <MoonStar />}
          </button>
        </ul>
      </div>
    </div>
  );
}
