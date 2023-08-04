import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        height: "50px",
        alignItems: "center",
        padding: "10px",
        background: "#ccc",
      }}
    >
      {/* <a href="/">Home</a>
      <a href="/list">List</a>
      <a href="/login">Login</a>
      <a href="/register">Register</a> */}

      <Link to="/">Home</Link>
      <Link to="/list">List</Link>
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </div>
  );
};

export default Header;
