import React, { useState, useEffect } from "react";
import { Layout } from "./components/Layout";

// O'zingizning haqiqiy componentlarni import qilamiz
import { Home } from "./components/pages/Home";
import { MuammoYechim } from "./components/pages/MuammoYechim";
import { Jamoa } from "./components/pages/Jamoa";
import { NegaBiz } from "./components/pages/NegaBiz";
import { Roadmap } from "./components/pages/Roadmap";
import { TechnicalSolution } from "./components/pages/TechnicalSolution";
import { Progress } from "./components/pages/Progress";
import { LiveDemo } from "./components/pages/LiveDemo";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const top = section.offsetTop - 120; // navbar offset
        if (window.scrollY >= top) {
          current = section.id;
        }
      });
      setCurrentPage(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={scrollToSection}>
      {/* Har bir componentni <section> ichiga id bilan joylaymiz */}
      <section id="home">
        <Home />
      </section>
      <section id="problem">
        <MuammoYechim />
      </section>
      <section id="team">
        <Jamoa />
      </section>
      <section id="why-us">
        <NegaBiz />
      </section>
      <section id="roadmap">
        <Roadmap />
      </section>
      <section id="tech">
        <TechnicalSolution />
      </section>
      <section id="progress">
        <Progress />
      </section>
    </Layout>
  );
}
