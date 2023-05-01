import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import Home from "../pages/Home/Home";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import Popular from "@/pages/Popular/Popular";
import NowPlaying from "@/pages/NowPlaying/NowPlaying";
import { Fragment } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/movie" element={<MainLayout />}>
        <Route index element={<Popular />} />
        <Route path="nowplaying" element={<NowPlaying />} />
      </Route>
    </Fragment>
  )
);

export default router;
