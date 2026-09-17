
import "./Hero.css";

import pdf from "../../assets/images/projects/Esraa_Saab_FlowCV_Resume_2026-09-17 (1).pdf";
import image from "../../assets/images/image.png";

import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

function Hero({ t }) {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-greeting">
            {t.hero.greeting}
          </p>

          <h1>
            Esraa Mustafa Saab
          </h1>

          <h2>
            {t.hero.role}
          </h2>

          <p className="hero-description">
            {t.hero.description}
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              {t.hero.projects}
            </a>

            <a href={pdf} download className="secondary-btn">
              Download CV
            </a>

          </div>
        </div>

        <div className="hero-image-section">

          <div className="hero-image">
            <img
              src={image}
              alt="Esraa Mustafa Saab"
            />
          </div>

          <div className="social-links">

            <a
              href="YOUR_LINKEDIN_LINK"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/esraasaab1-droid"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.instagram.com/esraa__saab?stkn=aG8ybGVkZmU3NHhi"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;

