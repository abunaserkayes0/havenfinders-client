import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import Loading from "./Loading";

export default function Layout() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  useEffect(() => {
    if (navigation.state === "loading") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="mx-5">
      <NavBar />
      {loading ? <Loading /> : <Outlet />}
      <Footer />
    </div>
  );
}
