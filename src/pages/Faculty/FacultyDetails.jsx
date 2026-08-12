import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { facultyData } from "../../data/faculty";
import "./FacultyDetails.css";

function FacultyDetails() {
  const { t } = useTranslation();
  const { id } = useParams();
  const faculty = facultyData.find((f) => f.id === Number(id));

  if (!faculty) {
    return (
      <div className="faculty-details__empty">
        <p>{t("faculty.notFound")}</p>
        <Link to="/faculty">{t("faculty.back")}</Link>
      </div>
    );
  }

  return (
    <div className="faculty-details">
      <div className="faculty-details__hero">
        <Link to="/faculty" className="faculty-details__back">{t("faculty.back")}</Link>
        <img src={faculty.photo} alt={faculty.name} className="faculty-details__photo" />
        <h1 className="faculty-details__name">{faculty.name}</h1>
        <p className="faculty-details__title">{t(`faculty.members.${faculty.id}.title`)}</p>
        <p className="faculty-details__dept">{t(`faculty.members.${faculty.id}.department`)}</p>
      </div>

      <div className="faculty-details__body">
        <div className="faculty-details__card">
          <p className="faculty-details__email">{faculty.email}</p>
          <p className="faculty-details__bio">{t(`faculty.members.${faculty.id}.bio`)}</p>
          <div className="faculty-details__courses">
            <h3>{t("faculty.courses")}</h3>
            <ul>
              {faculty.courses.map((course, index) => (
                <li key={course}>{t(`faculty.members.${faculty.id}.courses.${index}`)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyDetails;
