import { Link, useParams } from "react-router-dom";
import { facultyData } from "../../data/faculty";
import "./Faculty.css";

function FacultyDetails() {
  const { id } = useParams();
  const faculty = facultyData.find((member) => member.id === Number(id));

  if (!faculty) {
    return (
      <main className="faculty-page">
        <section className="faculty-section">
          <div className="faculty-container faculty-empty">
            <h1>Faculty member not found</h1>
            <p>The profile you are looking for does not exist.</p>
            <Link className="faculty-back-link" to="/faculty">
              Back to Faculty
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="faculty-page">
      <section className="faculty-section">
        <div className="faculty-container">
          <Link className="faculty-back-link" to="/faculty">
            ← Back to Faculty
          </Link>

          <article className="faculty-profile">
            <img
              className="faculty-profile__photo"
              src={faculty.photo}
              alt={faculty.name}
            />

            <div className="faculty-profile__content">
              <p className="faculty-profile__department">
                {faculty.department}
              </p>
              <h1>{faculty.name}</h1>
              <p className="faculty-profile__title">{faculty.title}</p>

              <div className="faculty-profile__info">
                <section>
                  <h2>About</h2>
                  <p>{faculty.bio}</p>
                </section>

                <section>
                  <h2>Contact</h2>
                  <a href={`mailto:${faculty.email}`}>{faculty.email}</a>
                </section>

                <section>
                  <h2>Courses</h2>
                  <ul className="faculty-courses">
                    {faculty.courses.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default FacultyDetails;