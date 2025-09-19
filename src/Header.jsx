function Header() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}><a href="#">Home</a></li>
        <li style={styles.li}><a href="#">Tasks</a></li>
        <li style={styles.li}><a href="#">Explore</a></li>
        <li style={styles.li}><a href="#">About</a></li>
      </ul>
    </nav>
  );
}
const styles = {
  nav: {
    backgroundColor: "#c77dff", 
    padding: "10px",
  },
  ul: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  li: {
    color: "white",
    fontWeight: "bold",
  }
};


export default Header;
