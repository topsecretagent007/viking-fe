import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import Points from "./components/Points";
import NavBar from "./components/NavBar";
import Swap from "./components/Swap";
import Community from "./components/Community";
import Footer from "./components/Footer";
import SwapNav from "./components/SwapNav";
import PointNav from "./components/PointNav";
import CommunityNav from "./components/CommunityNav";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <App />
      </>
    ),
  },
  {
    path: "/point",
    element: (
      <>
        <PointNav />
        <Points />
        <Footer />
      </>
    ),
  },
  {
    path: "/community",
    element: (
      <>
        <CommunityNav />
        <Community />
        <Footer />
      </>
    ),
  },
  {
    path: "/swap",
    element: (
      <>
        <SwapNav />
        <Swap />
        <Footer />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
