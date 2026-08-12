import { facultyData } from "../../data/faculty";
import FacultyCard from "../../Components/Cards/FacultyCard/FacultyCard";
import "./Faculty.css";

function Faculty() {
  const departmentCount = new Set(facultyData.map((f) => f.department)).size;

  return (
    <div className="faculty-page">
      <header className="faculty-page__header">
        <p className="faculty-page__eyebrow">Faculty of Computers &amp; Information</p>
        <h1 className="faculty-page__title">Our Faculty</h1>
        <p className="faculty-page__subtitle">
          Meet the professors and researchers shaping the next generation of computing.
        </p>
       <div className="faculty-page__stats">
  <div className="faculty-page__stat">
    <svg className="faculty-page__stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
    <span className="faculty-page__stat-num">{facultyData.length}</span>
    <span className="faculty-page__stat-label">Faculty Members</span>
  </div>
  <div className="faculty-page__stat">
    <svg className="faculty-page__stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 21h18M5 21V7l8-4 8 4v14M9 9h1M9 13h1M14 9h1M14 13h1" />
    </svg>
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