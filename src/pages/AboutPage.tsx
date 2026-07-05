import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import About from "../components/sections/About";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#05050f] text-white overflow-x-hidden">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}
