import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import HeaderOnly from "../layouts/HeaderOnly/HeaderOnly";
import Home from "@/pages/Home/Home";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import App from "@/App";
import Discover from "@/pages/Discover/Discover";
import discoverLoader from "./discoverLoader";
import movieLoader from "./movieLoader";
import tvLoader from "./tvLoader";
import Details from "@/pages/Details/Details";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="/" element={<HeaderOnly />}>
//         <Route index element={<Home />} />
//       </Route>
//       <Route
//         loader={() => ({
//           popular: "Popular Movies",
//           tv: "Popular Tv",
//         })}
//         element={<MainLayout />}
//         path="/discover"
//       >
//         <Route loader={() => "movie"} path="movie" element={<Discover />}/>
//         <Route loader={() => "tv"} path="tv" element={<Discover />} />
//       </Route>
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <HeaderOnly />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path : ':mediaType/:id/:name',
            element : <Details/>
          },
        ],
      },
      {
        path : '/',
        element: <MainLayout />,
        children: [
          {
            path: ':mediaType',
            element: <Discover/>,
          },
        ],
      },
    ],
  },
]);

export default router;
