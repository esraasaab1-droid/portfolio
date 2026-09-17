import "./Navbar.css";

function Navbar({
    darkMode,
    setDarkMode,
    language,
    setLanguage,
    t,
}) {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <a href="#home">{t.nav.home}</a>
                <a href="#about">{t.nav.about}</a>
                <a href="#projects">{t.nav.projects}</a>
                <a href="#contact">{t.nav.contact}</a>
            </div>

            <div className="nav-actions">
                <button
                    onClick={() =>
                        setLanguage(language === "ar" ? "en" : "ar")
                    }
                >
                    {language === "ar" ? "EN" : "AR"}
                </button>

                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "☼" : "☾"}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;