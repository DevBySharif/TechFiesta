import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import DashBoard from "../Pages/Dashboard/DashBoard";
import Events from "../Pages/Events/MyEvents";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/Services/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import Vision from "../Pages/Vision/Vision";
import PrivateRoute from "./PrivateRoute";

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
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashBoard></DashBoard>
          </PrivateRoute>
        ),
      },
      {
        path: "/events",
        element: (
          <PrivateRoute>
            <Events></Events>
          </PrivateRoute>
        ),
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
