// import React from 'react';
import "./App.css";
import NavbarMain from "./components/Navbar/NavbarMain";
import AboutMain from "./components/aboutSection/AboutMain";
import HeroGradiant from "./components/mainSection/HeroGradiant";
import HeroMain from "./components/mainSection/HeroMain";
import SubHeroSection from "./components/mainSection/SubHeroSection";
import SkillMain from "./components/skills/SkillMain";
import SubSkill from "./components/skills/SubSkill";
import ExperienceMain from "./components/experience/ExperienceMain";
import ProjectMain from "./components/project/ProjectMain";
import ContactMain from "./components/contact/ContactMain";
import FooterMain from "./components/footer/FooterMain";


function App() {
 

  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradiant />
      <SubHeroSection />
      <AboutMain />
      <SkillMain />
      <SubSkill />
      <ExperienceMain />
      <ProjectMain />
      <ContactMain />
      <FooterMain />
      
      
    </main>
  )
}

export default App;
