import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Departments from "../pages/Departments/Departments";
import Programs from "../pages/Programs/Programs";
import News from "../pages/News/News";
import Announcements from "../pages/Announcements/Announcements";
import NotFound from "../pages/NotFound/NotFound";
import Faculty from "../pages/Faculty/Faculty";
import FacultyDetails from "../pages/Faculty/FacultyDetails";
import Services from "../pages/Services/Services";
import Events from "../pages/Events/Events";
import Contact from "../pages/Contact/Contact";

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
        element: <About />,
      },
      {
        path: "departments",
        element: <Departments />,
      },
      {
        path: "departments/:id",
        element: <div>Department Details</div>,
      },
      {
        path: "programs",
        element: <Programs />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "news/:id",
        element: <div>News Details</div>,
      },
      {
        path: "announcements",
        element: <Announcements />,
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
        element: <Services />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
