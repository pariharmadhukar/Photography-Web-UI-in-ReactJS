
import { motion } from "framer-motion";
import "./App.css"; // Import your CSS file
import TestimonialSection from "./TestimonialSection";
import Nav from "./Nav";
import Hero from "./Hero";
import Work from "./Work";
import Footer from "./Footer";
import Gallery from "./Gallery";
import React from "react";

function App() {
 

  return (
    <motion.div
      className="min-h-screen overflow-x-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <Hero />

      {/* Work Section */}
      <Work/>

      {/* Gallery Section */}
      <Gallery />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}

export default App;
