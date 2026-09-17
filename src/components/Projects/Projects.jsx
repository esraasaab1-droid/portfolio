import "./Projects.css";
import restaurantImg from "../../assets/images/projects/restaurantmenu.jpg";
import rosetaleImg from "../../assets/images/projects/rosetale.jpg";
import prayerTimesImg from "../../assets/images/projects/prayer-times.jpg";
import weatherAppImg from "../../assets/images/projects/weatherapp.jpg";
import jobFinderImg from "../../assets/images/projects/job-finder.jpg";
import ticTacToeImg from "../../assets/images/projects/tic-tac-toe.jpg";
import FormSignUp from "../../assets/images/projects/FormSignUp.jpg";
import MoodBits from "../../assets/images/projects/MoodBits.jpg";   
import AidAlAdha from "../../assets/images/projects/AidAlAdha.jpg";
function Projects() {
    const projects = [
        {
            title: "Restaurant Menu",
            description: "A responsive digital restaurant menu.",
            technologies: "HTML, CSS, JavaScript",
            demo: "https://esraasaab1-droid.github.io/restaurant-menu/",
            github: "https://github.com/esraasaab1-droid/restaurant-menu",
            image: restaurantImg,
        },
        {
            title: "Aid Al Adha",
            description: "A website for the Islamic holiday of Aid Al Adha.",
            technologies: "HTML",
            demo: "https://esraasaab1-droid.github.io/aid-aladha/",
            github: "https://github.com/esraasaab1-droid/aid-aladha",
            image: AidAlAdha,
        },
        {
            title: "Form Sign Up",
            description: "A simple sign-up form with validation.",
            technologies: "Vue.js, JavaScript",
            demo: "https://esraasaab1-droid.github.io/form-signup/",
            github: "https://github.com/esraasaab1-droid/form-signup",
            image: FormSignUp,
        },
        {
            title: "Mood Bits",
            description: "A mood tracking application.",
            technologies: "Html,css, JavaScript",
            demo: " https://esraasaab1-droid.github.io/Mood-Bits-Restaurant/",
            github: "https://github.com/esraasaab1-droid/Mood-Bits-Restaurant",
            image: MoodBits,
        },
        { 
            title: "Rosetale",
            description: "A flower store website with a shopping cart.",
            technologies: "HTML, CSS, JavaScript",
            demo: "https://esraasaab1-droid.github.io/Rosetale",
            github: "https://esraasaab1-droid.github.io/Rosetale/",
            image: rosetaleImg,
        },
        {
            title: "Prayer Times",
            description: "A prayer times website using a real API.",
            technologies: "HTML, CSS, JavaScript, API",
            demo: " https://esraasaab1-droid.github.io/Azan/",

            github: "https://github.com/esraasaab1-droid/Azan",
            image: prayerTimesImg,
        },
        {
            title: "Weather App",
            description: "A weather application with city search and API data.",
            technologies: "Vue.js, API",
            demo: "https://esraasaab1-droid.github.io/weather-app/",
            github: "https://github.com/esraasaab1-droid/weather-app",
            image: weatherAppImg,
        },
        {
            title: "Job Finder",
            description: "A job listing application with job details and favorites.",
            technologies: "Vue.js, JSON Server",
            demo: "https://esraasaab1-droid.github.io/website/",
            github: "https://github.com/esraasaab1-droid/website",
            image: jobFinderImg,
        },
        {
            title: "Tic Tac Toe",
            description: "A Tic Tac Toe game built with React.",
            technologies: "React, JavaScript",
            demo: " https://esraasaab1-droid.github.io/Tic-Tac-Toe-Game/",
            github: "https://github.com/esraasaab1-droid/Tic-Tac-Toe-Game",
            image: ticTacToeImg,
        },
    ];

    return (
        <section className="projects" id="projects">
            <p className="section-subtitle">My Projects</p>
            <h2>Things I've Built</h2>

            <div className="projects-container">
                {projects.map((project) => (
                    <div className="project-card" key={project.title}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-image"
                        />
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <span>{project.technologies}</span>
                            <div className="project-links">
                                <a href={project.demo}>Live Demo</a>
                                <a href={project.github}>GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;