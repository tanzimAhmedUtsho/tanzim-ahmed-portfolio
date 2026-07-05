import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Journey from "../components/sections/Journey";
import Business from "../components/sections/Business";
import MyStory from "../components/sections/MyStory";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#05050f] text-white overflow-x-hidden selection:bg-blue-500/30"
      style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        scrollBehavior: "smooth",
      }}
    >
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Business />
      <MyStory />
      <Contact />
      <Footer />
    </div>
  );
}
