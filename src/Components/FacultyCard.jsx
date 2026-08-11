import { Link } from "react-router-dom";
import "./FacultyCard.css";

function FacultyCard({ faculty }) {
  return (
    <Link to={`/faculty/${faculty.id}`} className="faculty-card">
      <img
        src={faculty.photo}
        alt={faculty.name}
        className="faculty-card__photo"
      />
      <h3 className="faculty-card__name">{faculty.name}</h3>
      <p className="faculty-card__title">{faculty.title}</p>
      <p className="faculty-card__dept">{faculty.department}</p>
    </Link>
  );
}

export default FacultyCard;