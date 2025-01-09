import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Layout from "./components/ui/Layout.jsx";
import ErrorElement from "./components/ui/ErrorElement.jsx";
import LogIn from "./components/auth/LogIn.jsx";
import Register from "./components/auth/Register.jsx";
import Home from "./Pages/Home.jsx";
import Add from "./components/touristspot/Add.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addspot",
        element: <Add />,
      },
      {
        path: "*",
        element: <ErrorElement />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
