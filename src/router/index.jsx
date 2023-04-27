import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import Home from "../pages/Home/Home";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import Popular from "@/pages/Popular/Popular";
import NowPlaying from "@/pages/NowPlaying/NowPlaying";


const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/popular",
        element: <Popular />,
      },
      {
        path: "/nowplaying",
        element: <NowPlaying />,
      },
    ],
  },
]);

export default router;
