import { useParams, Link } from "react-router-dom";
import { facultyData } from "../../data/faculty";
import "./FacultyDetails.css";

function FacultyDetails() {
  const { id } = useParams();
  const faculty = facultyData.find((f) => f.id === Number(id));

  if (!faculty) {
    return (
      <div className="faculty-details__empty">
        <p>Faculty member not found.</p>
        <Link to="/faculty">← Back to Faculty</Link>
      </div>
    );
  }

  return (
    <div className="faculty-details">
      <div className="faculty-details__hero">
        <Link to="/faculty" className="faculty-details__back">← Back to Faculty</Link>
        <img src={faculty.photo} alt={faculty.name} className="faculty-details__photo" />
        <h1 className="faculty-details__name">{faculty.name}</h1>
        <p className="faculty-details__title">{faculty.title}</p>
        <p className="faculty-details__dept">{faculty.department}</p>
      </div>

      <div className="faculty-details__body">
        <div className="faculty-details__card">
          <p className="faculty-details__email">{faculty.email}</p>
          <p className="faculty-details__bio">{faculty.bio}</p>
          <div className="faculty-details__courses">
            <h3>Courses</h3>
            <ul>
              {faculty.courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyDetails;