const translation = {
  navbar: {
    home: "Home",
    about: "About",
    departments: "Departments",
    programs: "Programs",
    news: "News",
    announcements: "Announcements",
    faculty: "Faculty",
    services: "Services",
    events: "Events",
    contact: "Contact",
  },

  common: {
    readMore: "Read More",
    learnMore: "Learn More",
    search: "Search",
    filter: "Filter",
    submit: "Submit",
    cancel: "Cancel",
    loading: "Loading...",
    noResults: "No results found",
    error: "Something went wrong",
    retry: "Retry",
  },

  about: {
    title: "About Us",
    introduction: "About the Faculty",
    vision: {
      title: "Vision",
      text: "Our vision is to provide a distinguished academic environment that supports innovation and excellence.",
    },
    mission: {
      title: "Mission",
      text: "Our mission is to provide high-quality education and prepare qualified graduates in the field of computing and information technology.",
    },
    values: {
      title: "Our Values",
      excellence: "Excellence",
      innovation: "Innovation",
      integrity: "Integrity",
      teamwork: "Teamwork",
    },
  },

  contact: {
    title: "Contact Us",
    address: "Address",
    phone: "Phone",
    email: "Email",
    formTitle: "Send Us a Message",

    fields: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
    },

    placeholders: {
      name: "Enter your name",
      email: "Enter your email",
      phone: "Enter your phone number",
      message: "Enter your message",
    },

    success: "Your message has been sent successfully.",
  },

  faculty: {
    eyebrow: "Faculty of Computers and Information",
    title: "Our Faculty",
    subtitle: "Meet the dedicated academics guiding the next generation of technology leaders.",
    membersTitle: "Faculty Members",
    description: "Discover our experienced teaching and research staff.",
    search: "Search faculty...", searchLabel: "Search faculty members", departmentFilter: "Filter by department", allDepartments: "All departments",
    noResults: "No faculty members found", tryAgain: "Try a different name or department.", back: "← Back to Faculty",
    notFound: "Faculty member not found", courses: "Courses",
    members: {
      1: { title: "Professor", department: "Computer Science", bio: "Specializes in artificial intelligence and machine learning, with over 15 years of teaching experience.", courses: ["Data Structures", "Machine Learning"] },
      2: { title: "Associate Professor", department: "Information Systems", bio: "Focuses on database systems and enterprise software architecture.", courses: ["Database Systems", "Software Engineering"] },
      3: { title: "Assistant Professor", department: "Computer Science", bio: "Researches computer networks and cybersecurity.", courses: ["Networks", "Cybersecurity Fundamentals"] },
      4: { title: "Professor", department: "Software Engineering", bio: "Leads research in software testing and quality assurance methodologies.", courses: ["Software Testing", "Software Architecture"] },
      5: { title: "Associate Professor", department: "Artificial Intelligence", bio: "Works on natural language processing and deep learning applications.", courses: ["Deep Learning", "Natural Language Processing"] },
      6: { title: "Assistant Professor", department: "Cybersecurity", bio: "Researches network security and ethical hacking practices for academic and industry use.", courses: ["Network Security", "Ethical Hacking"] },
    },
  },

  errors: {
    nameRequired: "Name is required.",
    emailRequired: "Email is required.",
    emailInvalid: "Please enter a valid email address.",
    phoneRequired: "Phone number is required.",
    messageRequired: "Message is required.",
  },
};

export default translation;
