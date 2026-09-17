
import "./About.css";
import image from "../../assets/images/image.png";

function About({ t }) {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Vue.js",
        "C++",
        "AI Video Generation",
        "AI Tools & Platforms",
        "problem-solving",
    ];

    return (
        <section className="about" id="about">
            <div className="about-image-section">
                <h2>{t.about.subtitle}</h2>

                <div className="about-image">
                    <img src={image} alt="Esraa Mustafa Saab" />
                </div>
            </div>

            <div className="about-content">
                <h3>{t.about.title}</h3>

                <p>{t.about.text1}</p>
                <p>{t.about.text2}</p>

                <a href="#contact" className="about-button">
                    {t.hero.contact}
                </a>

                {/* Skills */}
                <div className="skills-mini" id="skills">
                    <h4>
                        Skills <span>★</span>
                    </h4>

                    <div className="skills-list">
                        {skills.map((skill) => (
                            <span className="skill-tag" key={skill}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;