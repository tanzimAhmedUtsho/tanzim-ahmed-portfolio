import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MyStory from "../components/sections/MyStory";

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-[#05050f] text-white overflow-x-hidden">
      <Navbar />
      <MyStory />
      <Footer />
    </div>
  );
}
