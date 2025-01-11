import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Layout from "./components/ui/Layout.jsx";
import ErrorElement from "./components/ui/ErrorElement.jsx";
import LogIn from "./components/auth/LogIn.jsx";
import Register from "./components/auth/Register.jsx";
import Home from "./Pages/Home.jsx";
import Add from "./components/tourists/Add.jsx";
import TouristsSpots from "./components/tourists/TouristsSpots.jsx";
import { url } from "../utils/fetchUrl.js";
import Loading from "./components/ui/Loading.jsx";
import AllTouristsSpots from "./components/tourists/AllTouristsSpots.jsx";
import TouristDetails from "./components/tourists/TouristDetails.jsx";
import AuthProvider from "./components/auth/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          try {
            const response = await fetch(`${url}/tourist`);
            return response;
          } catch (error) {
            throw new Response("Error loading tourist spots", { status: 500 });
          }
        },
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
        path: "/allspots",
        element: <AllTouristsSpots />,
        loader: async () => {
          try {
            const response = await fetch(`${url}/tourist`);
            return response;
          } catch (error) {
            throw new Response("Error loading tourist spots", { status: 500 });
          }
        },
      },
      {
        path: "/tourist/:id",
        element: <TouristDetails />,
        loader: async ({ params: { id } }) => {
          try {
            const response = await fetch(`${url}/tourist/${id}`);
            return response;
          } catch (error) {
            throw new Response("Error Loading tourist spot", { status: 500 });
          }
        },
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
