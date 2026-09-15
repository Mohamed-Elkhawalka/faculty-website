# Faculty of Computers and Information Website

A modern, responsive university website for the Faculty of Computers and Information, built with React.js.

The project provides students and visitors with information about the faculty, academic departments, programs, faculty members, university services, news, announcements, and upcoming events.

The website supports both **English and Arabic**, including automatic **LTR/RTL layout switching**.

## Features

- Responsive design for desktop, tablet, and mobile
- English and Arabic internationalization
- RTL/LTR support
- Responsive desktop and mobile navigation
- React Router navigation and dynamic detail pages
- Departments and academic programs
- Faculty members
- University services
- News and announcements
- Events and event details
- Search and filtering
- Empty, loading, and error states
- Form validation
- Accessibility and keyboard focus states
- Reusable React components
- Centralized data files
- Consistent design system and animations

## Technologies

- React.js
- JavaScript
- Vite
- React Router
- react-i18next
- i18next
- CSS
- CSS Modules
- Tailwind CSS
- Git
- GitHub

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Cards/
│   ├── Navbar/
│   ├── Footer/
│   └── ...
├── data/
│   ├── announcements.js
│   ├── departments.js
│   ├── events.js
│   ├── faculty.js
│   ├── news.js
│   ├── programs.js
│   └── services.js
├── pages/
│   ├── Home/
│   ├── About/
│   ├── Departments/
│   ├── DepartmentsDetails/
│   ├── Programs/
│   ├── ProgramDetails/
│   ├── News/
│   ├── NewsDetails/
│   ├── Announcements/
│   ├── Faculty/
│   ├── FacultyDetails/
│   ├── Services/
│   ├── Events/
│   ├── Contact/
│   └── NotFound/
├── UI/
│   ├── SearchBar/
│   ├── Filter/
│   ├── EmptyState/
│   └── ...
├── locales/
│   ├── en/
│   └── ar/
├── App.jsx
├── main.jsx
└── index.css
```

## Main Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/about` | About the faculty |
| `/departments` | All academic departments |
| `/departments/:id` | Department details |
| `/programs` | Academic programs |
| `/programs/:id` | Program details |
| `/news` | Latest news |
| `/news/:id` | News article details |
| `/announcements` | University announcements |
| `/faculty` | Faculty members |
| `/faculty/:id` | Faculty member details |
| `/services` | University services |
| `/events` | Upcoming events |
| `/contact` | Contact page |
| `*` | 404 Not Found |

## Component Architecture

The application uses reusable React components instead of duplicating UI across pages.

Examples include:

```text
SearchBar
Filter
EmptyState
Loading
NewsCard
EventCard
AnnouncementCard
FacultyCard
ProgramCard
ServiceCard
```

Pages handle page-level logic and data, while reusable components handle specific UI elements.

## Data Architecture

Application content is separated into dedicated data files.

For example:

```js
{
  id: "cs",
  nameKey: "departments.items.cs.name",
  descriptionKey: "departments.items.cs.description",
  programs: ["cs-program", "ai-program"]
}
```

Translated text is referenced using translation keys rather than being hard-coded inside components:

```js
nameKey: "departments.items.cs.name"
```

The component can then render it with:

```jsx
t(department.nameKey)
```

This allows the same data and components to work in both English and Arabic.

## Internationalization

The project uses `react-i18next`.

Translation files are separated by language:

```text
locales/
├── en/
│   └── translation.js
└── ar/
    └── translation.js
```

Components access translations with:

```jsx
const { t } = useTranslation();
```

Example:

```jsx
<h1>{t("departments.title")}</h1>
```

The application also switches document direction:

```text
English → LTR
Arabic  → RTL
```

## Search and Filtering

News, announcements, and events support search and filtering.

The filtering process combines the user's search text with the selected category or type:

```text
Search
   +
Filter
   ↓
Filtered Results
```

`useMemo` is used where appropriate to avoid unnecessary recalculation of filtered results.

## Dynamic Detail Pages

React Router dynamic routes are used for pages such as:

```text
/departments/:id
/programs/:id
/news/:id
/faculty/:id
```

For example:

```jsx
const { id } = useParams();
```

The ID is then used to find the matching item in the relevant data file.

## Department and Program Relationship

Departments and programs are connected through IDs.

Example department:

```js
{
  id: "cs",
  programs: ["cs-program", "ai-program"]
}
```

Example program:

```js
{
  id: "cs-program",
  departmentId: "cs"
}
```

This relationship allows a department details page to display only its related programs.

## Responsive Design

The website adapts to different screen sizes.

### Desktop

- Full navigation
- Multi-column layouts
- Larger spacing
- Full content sections

### Tablet

- Reduced spacing
- Adjusted grids
- Flexible layouts

### Mobile

- Mobile sidebar navigation
- Single-column cards
- Stacked search and filter controls
- Responsive typography
- Touch-friendly controls

Arabic layouts also support RTL direction.

## Design System

The project uses a consistent visual system.

### Primary Colors

```css
--primary: #1656c9;
--primary-dark: #0d3e94;
--primary-light: #eaf1ff;
```

### Typography

- Inter
- Source Serif 4

### UI

- Consistent spacing
- Border radius
- Shadows
- Buttons
- Cards
- Hover animations
- Focus states
- Responsive breakpoints

## Installation

Clone the repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Navigate to the project:

```bash
cd <PROJECT_FOLDER>
```

Install dependencies:

```bash
npm install
```

## Run the Project

Start the development server:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Testing Checklist

Before submission, verify:

- [ ] All routes work
- [ ] Navigation works
- [ ] Dynamic detail pages work
- [ ] Search works
- [ ] Filters work
- [ ] Empty states work
- [ ] Forms validate correctly
- [ ] English translations work
- [ ] Arabic translations work
- [ ] RTL/LTR switching works
- [ ] Images load correctly
- [ ] Mobile navigation works
- [ ] Desktop layout works
- [ ] Tablet layout works
- [ ] Mobile layout works
- [ ] No important console errors exist
- [ ] `npm run build` completes successfully

## Screenshots

Add screenshots of the completed project here.

### Home

![Home Page](./screenshots/home.png)

### Departments

![Departments Page](./screenshots/departments.png)

### Programs

![Programs Page](./screenshots/programs.png)

### News

![News Page](./screenshots/news.png)

### Arabic / RTL

![Arabic RTL](./screenshots/arabic.png)

### Mobile

![Mobile Layout](./screenshots/mobile.png)

## Live Demo

**Live Website:**  
`<ADD_LIVE_DEMO_URL>`

## Team

This project was developed collaboratively by a five-person team.

### Person 1

- Project setup
- React architecture
- Routing
- Shared components
- Home page
- 404 page

### Person 2

- Data structures
- Departments
- Programs
- Services

### Person 3

- Search and filtering
- News
- Announcements
- Events

### Person 4

- Design system
- Faculty section

### Person 5

- Internationalization
- English/Arabic translations
- RTL/LTR support
- About page
- Contact page

## Git & Collaboration

Git and GitHub were used for collaborative development.

Typical workflow:

```text
Create / update feature
        ↓
Commit changes
        ↓
Push to GitHub
        ↓
Review / merge
        ↓
Update main branch
```

## License

This project was created as an academic/team project for the Faculty of Computers and Information.
