import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Faculty from "../Pages/Faculty/Faculty";
import FacultyDetails from "../Pages/Faculty/FacultyDetails";

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
      // Temporary placeholders until the other pages are implemented
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
        element: <div>News</div>,
      },
      {
        path: "news/:id",
        element: <div>News Details</div>,
      },
      {
        path: "announcements",
        element: <div>Announcements</div>,
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
        element: <div>Events</div>,
      },
      {
        path: "contact",
        element: <div>Contact</div>,
      },
    ],
  },
]);

export default router;
