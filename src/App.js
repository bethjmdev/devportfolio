import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <WorkExperience />
      <Projects />
      <Languages />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
