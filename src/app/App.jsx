import { Outlet } from "react-router-dom";
import LanguageSwitcher from "../components/LanguageSwitcher";

function App() {
  return (
    <>
      <header className="site-header">
        <LanguageSwitcher />
      </header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
}

export default App;