const Footer = () => {
  return (
    <footer style={{ textAlign: "center", padding: "20px", marginTop: "40px", background: "#f1f1f1", color: "#333" }}>
      <p>&copy; {new Date().getFullYear()} E-Learning Platform. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;