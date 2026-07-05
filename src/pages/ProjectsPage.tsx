import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Projects from "../components/sections/Projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#05050f] text-white overflow-x-hidden">
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
}
