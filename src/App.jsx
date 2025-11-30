import React, { useState, useEffect } from "react";
import { Layout } from "./components/Layout";

// O'zingizning haqiqiy componentlarni import qilamiz
import { Home } from "./components/pages/Home";
import { MuammoYechim } from "./components/pages/MuammoYechim";
import { Jamoa } from "./components/pages/Jamoa";
import { NegaBiz } from "./components/pages/NegaBiz";
import { Roadmap } from "./components/pages/Roadmap";
import { TechnicalSolution } from "./components/pages/TechnicalSolution";
import { Footer } from "./components/pages/Footer";


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
      <Home id="home" />
      <MuammoYechim id="problem" />
      <Jamoa id="team" />
      <NegaBiz id="why-us" />
      <Roadmap id="roadmap" />
      <TechnicalSolution id="tech" />
      <Footer id="contact" />
    </Layout>
  );
}
