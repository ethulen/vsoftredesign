import "./index.css";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <a href="#default" className="logo">
        BranchBuddy
      </a>
      <div className="header-right">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Header;
