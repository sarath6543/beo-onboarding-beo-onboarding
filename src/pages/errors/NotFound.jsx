import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" style={styles.link}>
        Go back to Dashboard
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "5rem",
    fontFamily: "Arial, sans-serif",
  },
  link: {
    marginTop: "1rem",
    display: "inline-block",
    textDecoration: "none",
    color: "#007bff",
  },
};

export default NotFound;
