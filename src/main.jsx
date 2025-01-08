import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Layout from "./components/ui/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
