import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Points from "./components/Points/index.jsx";
import NavBar from "./components/NavBar/index.jsx";
import Swap from "./components/Swap/index.jsx";

import Community from "./components/Community/index.jsx";
import Footer from "./components/Footer/index.jsx";

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
        <NavBar />
        <div>
          <Points />
        </div>
        <Footer />
      </>
    ),
  },
  {
    path: "/community",
    element: (
      <>
        <NavBar />
        <div>
          <Community />
        </div>
        <Footer />
      </>
    ),
  },
  {
    path: "/swap",
    element: (
      <>
        <NavBar />
        <div>
          <Swap />
        </div>
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
