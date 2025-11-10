import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { AnimatedBackground } from "./components/layout/AnimatedBackground";
import { CustomCursor } from "./components/layout/CustomCursor";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { WorkExperience } from "./components/sections/WorkExperience";
import { Certificates } from "./components/sections/Certificates";
import { Contact } from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Animated Background Layer */}
      <AnimatedBackground />

      {/* Content Layer */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WorkExperience />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
