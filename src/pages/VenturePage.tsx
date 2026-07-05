import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Business from "../components/sections/Business";
import { motion } from "motion/react";

export default function VenturePage() {
  return (
    <div className="min-h-screen bg-[#05050f] text-white overflow-x-hidden">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <Business />
      </motion.main>
      <Footer />
    </div>
  );
}
