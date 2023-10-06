import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Events from "../Pages/Events/Events";
import Home from "../Pages/Home/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
    ],
  },
]);

export default Route;
