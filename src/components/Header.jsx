import React, { useState } from "react";

function Header({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu after click
    }
  };

  return (
    <header>
      <nav>
        <div className="nav-left">
          <span className="logo">🕌 Islamic To-Do</span>
          <button
            className="mode-btn"
            onClick={toggleDarkMode}
            title="Toggle light/dark mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <div
            className={`hamburger ${menuOpen ? "change" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollToSection("home")}>Home</button>
        
          <button onClick={() => scrollToSection("tasks")}>Tasks</button>
          <button onClick={() => scrollToSection("completed")}>Completed</button>
          <button onClick={() => scrollToSection("incomplete")}>Incomplete</button>
          <button onClick={() => scrollToSection("explore")}>Explore</button>
          <button onClick={() => scrollToSection("about")}>About</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
