import "./About.css";
import image from "../../assets/images/image.png";

function About({ t }) {
    const skills = [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "React", level: 70 },
        { name: "Vue.js", level: 70 },
        { name: "C++", level: 60 },
        { name: "AI Video Generation", level: 90 },
        { name: "AI Tools & Platforms", level: 85 },
    ];

    const problemSolving = 80;

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

                    <div className="skills-layout">
                        {/* Technical Skills */}
                        <div className="technical-skills">
                            {skills.map((skill) => (
                                <div className="skill-progress" key={skill.name}>
                                    <div className="skill-info">
                                        <span>{skill.name}</span>
                                        <span>{skill.level}%</span>
                                    </div>

                                    <div className="progress-bar">
                                        <span
                                            style={{
                                                width: `${skill.level}%`,
                                            }}
                                        ></span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Problem Solving */}
                        <div className="problem-solving">
                            <div
                                className="progress-circle"
                                style={{
                                    "--progress": `${problemSolving * 3.6}deg`,
                                }}
                            >
                                <div className="progress-circle-inner">
                                    <strong>{problemSolving}%</strong>
                                </div>
                            </div>

                            <span className="problem-title">
                                Problem Solving
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;