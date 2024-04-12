import "./index.css";
import React from "react";

function Header() {
  return (
    <div className="header">
      <a href="#default" className="logo">
        BranchBuddy
      </a>
      <div className="header-right">
        <a className="active" href="#home">
          Home
        </a>
        <a href="/admin">Admin</a>
        <a href="/operations">Operations</a>
        <a href="/supervisor">Supervisor</a>
        <a href="/reports">Reports</a>
        <a href="/research">Research</a>
      </div>
    </div>
  );
}

export default Header;
