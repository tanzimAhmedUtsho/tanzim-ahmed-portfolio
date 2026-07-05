
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import StoryPage from "./pages/StoryPage";
  import VenturePage from "./pages/VenturePage";
  import AboutPage from "./pages/AboutPage";
  import SkillsPage from "./pages/SkillsPage";
  import ProjectsPage from "./pages/ProjectsPage";
  import JourneyPage from "./pages/JourneyPage";
  import ContactPage from "./pages/ContactPage";
  import "./styles/index.css";

  const root = createRoot(document.getElementById("root")!);
  const path = window.location.pathname || "/";

  switch (path.replace(/\/+$/, "")) {
    case "":
    case "/":
      root.render(<App />);
      break;
    case "/story":
      root.render(<StoryPage />);
      break;
    case "/venture":
      root.render(<VenturePage />);
      break;
    case "/about":
      root.render(<AboutPage />);
      break;
    case "/skills":
      root.render(<SkillsPage />);
      break;
    case "/projects":
      root.render(<ProjectsPage />);
      break;
    case "/journey":
      root.render(<JourneyPage />);
      break;
    case "/contact":
      root.render(<ContactPage />);
      break;
    default:
      root.render(<App />);
  }
  