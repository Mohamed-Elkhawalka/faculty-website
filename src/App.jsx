import { Routes, Route } from "react-router-dom";

import News from "./pages/News/News";
import NewsDetails from "./pages/News/NewsDetails";
import Event from "./pages/Event/Event";
import Announcement from "./pages/Announcement/Announcement";

function App() {
  return (
    <Routes>
      <Route path="/news" element={<News />} />
      <Route path="/news/:id" element={<NewsDetails />} />

      <Route path="/events" element={<Event />} />
      <Route path="/announcements" element={<Announcement />} />
    </Routes>
  );
}

export default App;