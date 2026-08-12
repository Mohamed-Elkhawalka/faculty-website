import { useMemo, useState } from "react";
import FacultyCard from "../../Components/Cards/FacultyCard/FacultyCard";
import { facultyData } from "../../data/faculty";
import "./Faculty.css";

function Faculty() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const departments = useMemo(
    () => [...new Set(facultyData.map((member) => member.department))],
    []
  );

  const filteredFaculty = facultyData.filter((member) => {
    const matchesSearch = [
      member.name,
      member.title,
      member.department,
      member.email,
    ].some((value) =>
      value.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );

    const matchesDepartment =
      selectedDepartment === "All" ||
      member.department === selectedDepartment;

    return matchesSearch && matchesDepartment;
  });

  return (
    <main className="faculty-page">
      <section className="faculty-hero">
        <div className="faculty-container">
          <p className="faculty-hero__eyebrow">Faculty of Computers and Information</p>
          <h1>Our Faculty</h1>
          <p className="faculty-hero__text">
            Meet the dedicated academics guiding the next generation of
            technology leaders.
          </p>
        </div>
      </section>

      <section className="faculty-section" aria-labelledby="faculty-title">
        <div className="faculty-container">
          <div className="faculty-section__header">
            <div>
              <h2 id="faculty-title">Faculty Members</h2>
              <p>Discover our experienced teaching and research staff.</p>
            </div>

            <div className="faculty-controls">
              <label className="sr-only" htmlFor="faculty-search">
                Search faculty members
              </label>
              <input
                id="faculty-search"
                className="faculty-control"
                type="search"
                placeholder="Search faculty..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />

              <label className="sr-only" htmlFor="department-filter">
                Filter by department
              </label>
              <select
                id="department-filter"
                className="faculty-control"
                value={selectedDepartment}
                onChange={(event) => setSelectedDepartment(event.target.value)}
              >
                <option value="All">All departments</option>
                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {filteredFaculty.length > 0 ? (
            <div className="faculty-grid">
              {filteredFaculty.map((faculty) => (
                <FacultyCard key={faculty.id} faculty={faculty} />
              ))}
            </div>
          ) : (
            <div className="faculty-empty">
              <h3>No faculty members found</h3>
              <p>Try a different name or department.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Faculty;