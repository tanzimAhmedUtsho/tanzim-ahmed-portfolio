import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Journey from "../components/sections/Journey";

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-[#05050f] text-white overflow-x-hidden">
      <Navbar />
      <Journey />
      <Footer />
    </div>
  );
}
