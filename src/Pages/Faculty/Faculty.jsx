import { facultyData } from "../../data/faculty";
import FacultyCard from "../../Components/Cards/FacultyCard/FacultyCard";
import "./Faculty.css";

function Faculty() {
  const departmentCount = new Set(facultyData.map((f) => f.department)).size;

  return (
    <div className="faculty-page">
      <header className="faculty-page__header">
        <div className="faculty-page__grid-texture"></div>
        <p className="faculty-page__eyebrow">Faculty of Computers &amp; Information</p>
        <h1 className="faculty-page__title">Our Faculty</h1>
        <p className="faculty-page__subtitle">
          Meet the professors and researchers shaping the next generation of computing.
        </p>

        <div className="faculty-page__stats">
          <div className="faculty-page__stat">
            <span className="faculty-page__stat-num">{facultyData.length}</span>
            <span className="faculty-page__stat-label">Faculty Members</span>
          </div>
          <div className="faculty-page__stat">
            <span className="faculty-page__stat-num">{departmentCount}</span>
            <span className="faculty-page__stat-label">Departments</span>
          </div>
        </div>
      </header>

      {facultyData.length === 0 ? (
        <p className="faculty-page__empty">No faculty members available.</p>
      ) : (
        <div className="faculty-grid">
          {facultyData.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Faculty;