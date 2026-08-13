import { useState } from "react";
import { useTranslation } from "react-i18next";
import { facultyData } from "../../data/faculty";
import FacultyCard from "../../cards/FacultyCard/FacultyCard";
import "./Faculty.css";

function Faculty() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const localizedFaculty = facultyData.map((member) => ({
    ...member,
    departmentKey: member.department,
    title: t(`faculty.members.${member.id}.title`),
    department: t(`faculty.members.${member.id}.department`),
  }));
  const departments = [...new Set(facultyData.map((member) => member.department))];
  const filteredFaculty = localizedFaculty.filter((member) => {
    const matchesSearch = [member.name, member.title, member.department, member.email]
      .some((value) => value.toLowerCase().includes(searchTerm.trim().toLowerCase()));
    const matchesDepartment = selectedDepartment === "All" || member.departmentKey === selectedDepartment;

    return matchesSearch && matchesDepartment;
  });

  return (
    <main className="faculty-page">
      <section className="faculty-hero">
        <div className="faculty-container">
          <p className="faculty-hero__eyebrow">{t("faculty.eyebrow")}</p>
          <h1>{t("faculty.title")}</h1>
          <p className="faculty-hero__text">{t("faculty.subtitle")}</p>
        </div>
      </section>

      <section className="faculty-section" aria-labelledby="faculty-title">
        <div className="faculty-container">
          <div className="faculty-section__header">
            <div>
              <h2 id="faculty-title">{t("faculty.membersTitle")}</h2>
              <p>{t("faculty.description")}</p>
            </div>
            <div className="faculty-controls">
              <label className="sr-only" htmlFor="faculty-search">{t("faculty.searchLabel")}</label>
              <input id="faculty-search" className="faculty-control" type="search" placeholder={t("faculty.search")} value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
              <label className="sr-only" htmlFor="department-filter">{t("faculty.departmentFilter")}</label>
              <select id="department-filter" className="faculty-control" value={selectedDepartment} onChange={(event) => setSelectedDepartment(event.target.value)}>
                <option value="All">{t("faculty.allDepartments")}</option>
                {departments.map((department) => {
                  const member = facultyData.find((item) => item.department === department);
                  return <option key={department} value={department}>{t(`faculty.members.${member.id}.department`)}</option>;
                })}
              </select>
            </div>
          </div>
          {filteredFaculty.length > 0 ? (
            <div className="faculty-grid">
              {filteredFaculty.map((faculty) => <FacultyCard key={faculty.id} faculty={faculty} />)}
            </div>
          ) : (
            <div className="faculty-empty"><h3>{t("faculty.noResults")}</h3><p>{t("faculty.tryAgain")}</p></div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Faculty;
