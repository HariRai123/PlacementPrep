import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./Routes/ProtectedRoute"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path:"/dashboard",
    element:<ProtectedRoute><Dashboard/></ProtectedRoute>
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
