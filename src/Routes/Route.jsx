import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Events from "../Pages/Events/Events";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import Vision from "../Pages/Vision/Vision";

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
        path: "/vision",
        element: <Vision></Vision>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default Route;
