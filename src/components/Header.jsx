function Header({ darkMode, setDarkMode }) {
  return (
    <header>
      <nav>
        <a href="#">Home</a>
        <a href="#">Tasks</a>
        <a href="#">Explore</a>
        <a href="#">About</a>
      </nav>
      <button
        className="toggle-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
