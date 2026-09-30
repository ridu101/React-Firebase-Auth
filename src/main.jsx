import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Root from "./layout/Root.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import Order from "./components/Order.jsx";
import Profile from "./components/Profile.jsx";
import PrivateRoutes from "./Routes/PrivateRoutes.jsx";
import Dashboard from "./components/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,

    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "login",
        Component: Login,
      },

      {
        path: "register",
        Component: Register,
      },

      {
        path: "order",
        element: (
          <PrivateRoutes>
            <Order />
          </PrivateRoutes>
        ),
      },

      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },

      {
        path: "dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
