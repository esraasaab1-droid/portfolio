import { useState, useEffect } from "react";

import "./App.css";

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import translations from "./data/translations";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const t = translations[language];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={darkMode ? "app dark" : "app"}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
        t={t}
      />

      <Hero t={t} />
      <About t={t} />
      <Projects t={t} />
      <Contact t={t} />
      <Footer />

      <div
        className="mouse-circle"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
    </div>
  );
}

export default App;