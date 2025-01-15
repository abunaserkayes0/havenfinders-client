import React, { useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";

export default function useAuth() {
  const authContext = useContext(AuthContext);
  return authContext;
}
