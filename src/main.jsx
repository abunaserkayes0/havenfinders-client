import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./components/ui/Layout.jsx";
import ErrorElement from "./components/ui/ErrorElement.jsx";
import LogIn from "./components/auth/LogIn.jsx";
import Register from "./components/auth/Register.jsx";
import Home from "./Pages/Home.jsx";
import Add from "./components/tourists/Add.jsx";
import { url } from "../utils/fetchUrl.js";
import AllTouristsSpots from "./components/tourists/AllTouristsSpots.jsx";
import TouristDetails from "./components/tourists/TouristDetails.jsx";
import AuthProvider from "./components/auth/AuthProvider.jsx";
import PrivetRoute from "./components/auth/PrivetRoute.jsx";
import MyList from "./components/tourists/MyList.jsx";
import UpdateCard from "./components/ui/UpdateCard.jsx";
import Loading from "./components/ui/Loading.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    element: <ErrorElement />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement:<ErrorElement/>,
        loader: () => fetch(`${url}/tourist`),
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
        element: (
          <PrivetRoute>
            <Add />
          </PrivetRoute>
        ),
      },
      {
        path: "/allspots",
        element: (
          <PrivetRoute>
            <AllTouristsSpots />
          </PrivetRoute>
        ),
        errorElement:<ErrorElement/>,
        loader: () => fetch(`${url}/tourist`),
      },
      {
        path: "/tourist/:id",
        element: (
          <PrivetRoute>
            <TouristDetails />
          </PrivetRoute>
        ),
        errorElement:<ErrorElement/>,
        loader: ({ params: { id } }) => fetch(`${url}/tourist/${id}`),
      },
      {
        path: "/mylist/:email",
        element: (
          <PrivetRoute>
            <MyList />
          </PrivetRoute>
        ),
        errorElement:<ErrorElement/>,
        loader: ({ params: { email } }) => fetch(`${url}/users/${email}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivetRoute>
            <UpdateCard />
          </PrivetRoute>
        ),
        errorElement:<ErrorElement/>,
        loader: ({ params: { id } }) => fetch(`${url}/tourist/${id}`),
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
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </AuthProvider>
  </StrictMode>
);
