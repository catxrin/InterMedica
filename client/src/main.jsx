import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { router } from "./router/router.jsx";

import { ToastContainer } from 'react-toastify';

import "./index.css";

createRoot(document.getElementById("root")).render(
<>
  <ToastContainer/>
  <RouterProvider router={router} />
</>
);
