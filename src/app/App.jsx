import { Outlet } from "react-router-dom";
import Navbar from "../Components/layout/Navbar/Navbar";
import Footer from "../Components/layout/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
