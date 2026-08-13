import conference from "../assets/events/conference.png";
import workshop from "../assets/events/workshop.png";
import seminar from "../assets/events/seminar.png";
import Contest from "../assets/events/Contest.png";
import career from "../assets/events/career.png";

const events = [
  {
    id: 1,
    titleKey: "events.items.annualTechnologyConference.title",
    descriptionKey:
      "events.items.annualTechnologyConference.description",
    date: "2026-08-20",
    time: "10:00 AM",
    locationKey: "events.locations.mainAuditorium",
    typeKey: "events.types.conference",
    image: conference,
  },
  {
    id: 2,
    titleKey: "events.items.webDevelopmentWorkshop.title",
    descriptionKey:
      "events.items.webDevelopmentWorkshop.description",
    date: "2026-08-25",
    time: "11:00 AM",
    locationKey: "events.locations.computerLab1",
    typeKey: "events.types.workshop",
    image: workshop,
  },
  {
    id: 3,
    titleKey: "events.items.artificialIntelligenceSeminar.title",
    descriptionKey:
      "events.items.artificialIntelligenceSeminar.description",
    date: "2026-09-02",
    time: "12:00 PM",
    locationKey: "events.locations.seminarHall",
    typeKey: "events.types.seminar",
    image: seminar,
  },
  {
    id: 4,
    titleKey: "events.items.studentProgrammingContest.title",
    descriptionKey:
      "events.items.studentProgrammingContest.description",
    date: "2026-09-10",
    time: "09:00 AM",
    locationKey: "events.locations.computerLab2",
    typeKey: "events.types.competition",
    image: Contest,
  },
  {
    id: 5,
    titleKey: "events.items.careerDay.title",
    descriptionKey: "events.items.careerDay.description",
    date: "2026-09-18",
    time: "10:00 AM",
    locationKey: "events.locations.facultyMainHall",
    typeKey: "events.types.career",
    image: career,
  },
];

export default events;