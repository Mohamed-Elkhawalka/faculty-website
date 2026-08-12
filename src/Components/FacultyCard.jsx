import { Link } from "react-router-dom";
import "./FacultyCard.css";

const DEPT_COLORS = {
  "Computer Science": "var(--dept-cs)",
  "Information Systems": "var(--dept-is)",
  "Software Engineering": "var(--dept-se)",
  "Artificial Intelligence": "var(--dept-ai)",
  "Cybersecurity": "var(--dept-cy)",
};

function FacultyCard({ faculty }) {
  const color = DEPT_COLORS[faculty.department] || "var(--primary)";

  return (
    <Link to={`/faculty/${faculty.id}`} className="faculty-card" style={{ borderTopColor: color }}>
      <img src={faculty.photo} alt={faculty.name} className="faculty-card__photo" />
      <h3 className="faculty-card__name">{faculty.name}</h3>
      <p className="faculty-card__title">{faculty.title}</p>
      <p className="faculty-card__dept" style={{ color }}>{faculty.department}</p>
    </Link>
  );
}

export default FacultyCard;