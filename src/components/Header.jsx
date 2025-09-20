function Header() {
  return (
    <nav style={{ backgroundColor: "#c77dff", padding: "10px", borderRadius: 6 }}>
      <ul style={{ listStyle: "none", display: "flex", gap: 18, margin: 0, padding: 0 }}>
        <li><a href="#" style={{ textDecoration: "none", color: "#fff", fontWeight: 600 }}>Home</a></li>
        <li><a href="#" style={{ textDecoration: "none", color: "#fff", fontWeight: 600 }}>Tasks</a></li>
        <li><a href="#" style={{ textDecoration: "none", color: "#fff", fontWeight: 600 }}>Explore</a></li>
        <li><a href="#" style={{ textDecoration: "none", color: "#fff", fontWeight: 600 }}>About</a></li>
      </ul>
    </nav>
  );
}
export default Header;