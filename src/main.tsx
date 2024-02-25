import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles.css";
import { Cards, Decks, Home, Store } from "./screens";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cartas",
    element: <Cards />,
  },
  {
    path: "/decks",
    element: <Decks />,
  },
  {
    path: "/loja",
    element: <Store />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
