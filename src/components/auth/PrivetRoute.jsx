import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export default function PrivetRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <>
      {user ? (
        children
      ) : (
        <Navigate to="/login" state={location?.pathname || "/"} />
      )}
    </>
  );
}
