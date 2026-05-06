import About from "./components/about/page";
import Contact from "./components/contact/index";
import HeroSection from "./components/hero-section/page";
import Projects from "./components/projects/index";
import Skills from "./components/skills/page";
import Certificates from "./components/certificates/page";
import SectionReveal from "./components/SectionReveal";
import Education from "./components/education/page";

import "./css/card.css";

// ✅ Descomente quando a seção Experience estiver pronta:
// import Experience from "./components/experience/page";

export default function Home() {
  return (
    // ✅ Fragment removido — havia apenas um elemento filho (div.container)
    <div className="container">
      <HeroSection />

      <SectionReveal>
        <About />
      </SectionReveal>

      <SectionReveal>
        <Education />
      </SectionReveal>

      {/*
        <SectionReveal>
          <Experience />
        </SectionReveal>
      */}

      <SectionReveal>
        <Skills />
      </SectionReveal>

      <SectionReveal>
        <Projects />
      </SectionReveal>

      <SectionReveal>
        <Certificates />
      </SectionReveal>

      <SectionReveal>
        <Contact />
      </SectionReveal>
    </div>
  );
}
