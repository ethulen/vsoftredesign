import "./index.css";
import React from "react";

function Header() {
  return (
    <div className="header">
      <a href="#default" className="logo">
        BranchBuddy
      </a>
      <div className="header-right">
        <a href="#home">
          Home
        </a>
        <a href="#home">
          Login
        </a>
      </div>
    </div>
  );
}

export default Header;
