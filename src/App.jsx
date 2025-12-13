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
import DemoPage from "./components/pages/demo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Finance from "./components/pages/finance";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isUz, setIsUz] = useState(() => {
    // LocalStorage'dan o'qib olamiz, agar yo'q bo'lsa default true
    return localStorage.getItem("isUz") === "false" ? false : true;
  });

  // isUz o'zgarganda LocalStorage'ga yozamiz
  useEffect(() => {
    localStorage.setItem("isUz", isUz);
  }, [isUz]);

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
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              currentPage={currentPage}
              onNavigate={scrollToSection}
              isUz={isUz}
              setIsUz={setIsUz}
            >
              <Home id="home" isUz={isUz} />
              <MuammoYechim id="problem" isUz={isUz} />
              <Finance id="finance" isUz={isUz} />
              <Jamoa id="team" isUz={isUz} />
              <NegaBiz id="why-us" isUz={isUz} />
              <Roadmap id="roadmap" isUz={isUz} />
              <TechnicalSolution id="tech" isUz={isUz} />
              <Footer id="contact" isUz={isUz} />
            </Layout>
          }
        />
        <Route
          path="/demo"
          element={<DemoPage isUz={isUz} setIsUz={setIsUz} />}
        />
      </Routes>
    </Router>
  );
}
