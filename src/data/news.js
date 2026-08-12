import ecpcImage from "../assets/news/ecpc.png";
import ResearchLab from "../assets/news/ResearchLab.png";
import web from "../assets/news/web.png";
import training from "../assets/news/training.png";
import Activities from "../assets/news/Activities.png";
const news = [
  {
    id: 1,
    title: "Programming Competition Registration Is Now Open",
    description:
      "The Faculty of Computers and Information announces the opening of registration for the annual programming competition.",
    content:
      "Students interested in competitive programming can now register for the annual faculty programming competition. The competition aims to encourage problem-solving skills, algorithmic thinking, and teamwork among students.",
    date: "2026-08-05",
    category: "Academic",
    image:ecpcImage,
  },
  {
    id: 2,
    title: "New Artificial Intelligence Research Lab",
    description:
      "The faculty has announced the launch of a new research laboratory dedicated to artificial intelligence and machine learning.",
    content:
      "The new AI Research Lab provides students and researchers with an environment for developing innovative projects in artificial intelligence, machine learning, computer vision, and data science.",
    date: "2026-08-02",
    category: "Research",
    image: ResearchLab,
  },
  {
    id: 3,
    title: "Web Development Workshop",
    description:
      "A practical workshop covering modern web development technologies will be held at the faculty.",
    content:
      "The workshop introduces students to modern frontend development concepts, including React, component-based architecture, responsive design, and modern development practices.",
    date: "2026-07-28",
    category: "Events",
    image: web,
  },
  {
    id: 4,
    title: "Summer Training Program",
    description:
      "Registration is now available for the faculty summer training program.",
    content:
      "The summer training program provides students with practical experience through technical sessions, hands-on projects, and professional development activities.",
    date: "2026-07-25",
    category: "Students",
    image: training,
  },
  {
    id: 5,
    title: "Student Activities Week",
    description:
      "The faculty announces a week of activities designed to encourage student participation and collaboration.",
    content:
      "Students can participate in a variety of academic, technical, cultural, and social activities throughout Student Activities Week.",
    date: "2026-07-20",
    category: "Students",
    image: Activities,
  },
];

export default news;

