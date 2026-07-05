import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Skills from "../components/sections/Skills";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#05050f] text-white overflow-x-hidden">
      <Navbar />
      <Skills />
      <Footer />
    </div>
  );
}
