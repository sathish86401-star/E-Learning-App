import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { user, isLoggedIn, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "15px 30px", background: "#282c34", color: "#fff" }}>
      <h2>E-Learning Hub</h2>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
        <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>About Us</Link>
        <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact Us</Link>
        {isLoggedIn ? (
          <>
            <Link to="/profile" style={{ color: "#61dafb", textDecoration: "none" }}>Profile ({user.name})</Link>
            <button onClick={handleLogout} style={{ padding: "5px 10px", cursor: "pointer" }}>Logout</button>
          </>
        ) : (
          <Link to="/login" style={{ color: "#61dafb", textDecoration: "none" }}>Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;