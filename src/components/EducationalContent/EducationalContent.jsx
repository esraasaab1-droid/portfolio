
import "./EducationalContent.css";

function EducationalContent({ t }) {
    return (
        <section
            id="educational-content"
            className="educational-content"
        >
            <h2>{t.educationalContent.title}</h2>

            <p>{t.educationalContent.description}</p>

            <h3>{t.educationalContent.username}</h3>

            <a
                href="https://www.instagram.com/esr.aacodes/"
                target="_blank"
                rel="noopener noreferrer"
            >
                {t.educationalContent.button}
            </a>
        </section>
    );
}

export default EducationalContent;
