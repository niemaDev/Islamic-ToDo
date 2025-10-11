import { NavLink } from "react-router-dom";
function Header({ darkMode, setDarkMode }) {
  return (
    <header>
      <nav>
        <div className="nav-left">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          <NavLink to="/tasks" className={({ isActive }) => (isActive ? "active" : "")}>Tasks</NavLink>
          <NavLink to="/completed" className={({ isActive }) => (isActive ? "active" : "")}>Completed</NavLink>
          <NavLink to="/incomplete" className={({ isActive }) => (isActive ? "active" : "")}>Incomplete</NavLink>
          <NavLink to="/explore" className={({ isActive }) => (isActive ? "active" : "")}>Explore</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
        </div>
        <button className="mode-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
}
export default Header;
