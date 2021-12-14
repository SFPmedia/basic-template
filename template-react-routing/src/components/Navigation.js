import React from "react";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div className="navBar">
      <Link to="/">Home</Link>
      <Link to="/LoginPage">Login Page</Link>
    </div>
  );
};

export default Navigation;
