import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";

import Faculty from "../Pages/Faculty/Faculty";
import FacultyDetails from "../Pages/Faculty/FacultyDetails";

import News from "../pages/News/News";
import NewsDetails from "../pages/News/NewsDetails";
import Announcement from "../pages/Announcement/Announcement";
import Event from "../pages/Event/Event";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "about",
        element: <div>About</div>,
      },

      {
        path: "departments",
        element: <div>Departments</div>,
      },

      {
        path: "departments/:id",
        element: <div>Department Details</div>,
      },

      {
        path: "programs",
        element: <div>Programs</div>,
      },

      {
        path: "news",
        element: <News />,
      },

      {
        path: "news/:id",
        element: <NewsDetails />,
      },

      {
        path: "announcements",
        element: <Announcement />,
      },

      {
        path: "faculty",
        element: <Faculty />,
      },

      {
        path: "faculty/:id",
        element: <FacultyDetails />,
      },

      {
        path: "services",
        element: <div>Services</div>,
      },

      {
        path: "events",
        element: <Event />,
      },

      {
        path: "contact",
        element: <div>Contact</div>,
      },
    ],
  },
]);

export default router;