import DefaultLayout from "~/layouts/DefaultLayout/DefaultLayout";
import Home from "~/pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
