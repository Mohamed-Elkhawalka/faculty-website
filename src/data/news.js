import ecpcImage from "../assets/news/ecpc.png";
import ResearchLab from "../assets/news/ResearchLab.png";
import web from "../assets/news/web.png";
import training from "../assets/news/training.png";
import Activities from "../assets/news/Activities.png";

const news = [
  {
    id: 1,
    titleKey: "news.items.programmingCompetition.title",
    descriptionKey: "news.items.programmingCompetition.description",
    contentKey: "news.items.programmingCompetition.content",
    date: "2026-08-05",
    categoryKey: "news.filters.academic",
    image: ecpcImage,
  },

  {
    id: 2,
    titleKey: "news.items.artificialIntelligenceLab.title",
    descriptionKey: "news.items.artificialIntelligenceLab.description",
    contentKey: "news.items.artificialIntelligenceLab.content",
    date: "2026-08-02",
    categoryKey: "news.filters.research",
    image: ResearchLab,
  },

  {
    id: 3,
    titleKey: "news.items.webDevelopmentWorkshop.title",
    descriptionKey: "news.items.webDevelopmentWorkshop.description",
    contentKey: "news.items.webDevelopmentWorkshop.content",
    date: "2026-07-28",
    categoryKey: "news.filters.events",
    image: web,
  },

  {
    id: 4,
    titleKey: "news.items.summerTraining.title",
    descriptionKey: "news.items.summerTraining.description",
    contentKey: "news.items.summerTraining.content",
    date: "2026-07-25",
    categoryKey: "news.filters.students",
    image: training,
  },

  {
    id: 5,
    titleKey: "news.items.studentActivitiesWeek.title",
    descriptionKey: "news.items.studentActivitiesWeek.description",
    contentKey: "news.items.studentActivitiesWeek.content",
    date: "2026-07-20",
    categoryKey: "news.filters.students",
    image: Activities,
  },
];

export default news;