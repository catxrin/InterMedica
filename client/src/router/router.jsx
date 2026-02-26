import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "home", element: <>Home</> },
      { path: "checker", element: <>Checker</> },
      { path: "database", element: <>Drug Database</> },
      { path: "profile", element: <>Profile</> },
      {
        path: "/auth",
        children: [
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
        ],
      },
    ],
  },
]);
