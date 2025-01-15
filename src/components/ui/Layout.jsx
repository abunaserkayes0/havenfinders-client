import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import useAuth from "../../hooks/useAuth";

export default function Layout() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  const { color } = useAuth();

  useEffect(() => {
    if (navigation.state === "loading") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className={`${color && "bg-black text-white"}`}>
      <NavBar />
      {loading ? <Loading /> : <Outlet />}
      <Footer />
    </div>
  );
}
