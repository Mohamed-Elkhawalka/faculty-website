import { facultyData } from "../../data/faculty";
import FacultyCard from "../../Components/Cards/FacultyCard/FacultyCard";
import "./Faculty.css";

function Faculty() {
  return (
    <div className="faculty-page">
      <h1 className="faculty-page__title">Our Faculty</h1>
      <p className="faculty-page__subtitle">
        Meet the professors and researchers of our department.
      </p>

      <div className="faculty-grid">
        {facultyData.map((faculty) => (
          <FacultyCard key={faculty.id} faculty={faculty} />
        ))}
      </div>
    </div>
  );
}

export default Faculty;