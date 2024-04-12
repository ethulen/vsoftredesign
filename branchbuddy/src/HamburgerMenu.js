import React, { useState } from "react";
import "./index.css";

function HamburgerMenu() {
  const [clickCount, setClickCount] = useState(0);

  const handleHamburgerClick = () => {
    setClickCount(clickCount + 1);
    const navLinks = document.querySelector(".nav-links");
    navLinks.style.display = clickCount % 2 === 0 ? "none" : "block";
  };

  const handleMenuClick = (event) => {
    const submenu = event.target.nextElementSibling;
    if (submenu) {
      submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
    }
  };

  return (
    <div className="hamburger-menu">
      <button className="hamburger-button" onClick={handleHamburgerClick}>
        {" "}
        ☰{" "}
      </button>
      <div className="nav-links">
        <a href="#" onClick={handleMenuClick}>
          Administrator
        </a>
        <div className="submenu">
          <a href="#" onClick={handleMenuClick}>
            Configuration
          </a>
          <div className="submenu">
            <a href="/edeskconfig">Edesk Configuration</a>
            <a href="/site">Site</a>
            <a href="/printers">Printers</a>
            <a href="/imagepaths">Image Paths</a>
            <a href="/systemparams">System Parameters</a>
            <a href="/eclinbox">ECL Inbox</a>
          </div>
          <a href="#" onClick={handleMenuClick}>
            Branch Capture
          </a>
          <div className="submenu">
            <a href="/branchlist">Branch List</a>
            <a href="/branch">Branch</a>
            <a href="/branchgroups">Branch Groups</a>
            <a href="branchgroupsorters">Branch Group Sorters</a>
            <a href="/blockrangedefinition">Block Range Definition</a>
            <a href="/jobcutoffdefinition">Job Cutoff Definition</a>
            <a href="/eclconsolidation">ECL Consolidation</a>
            <a href="/consolidationschedules">Consolidation Schedules</a>
          </div>
          <a href="#" onClick={handleMenuClick}>
            ATM
          </a>
          <div className="submenu">
            <a href="/definition">Definition</a>
            <a href="/reviewthreshold">Review Threshold</a>
            <a href="/atmvirtualdocs">ATM Virtual Docs</a>
          </div>
          <a href="#" onClick={handleMenuClick}>
            Security
          </a>
          <div className="submenu">
            <a href="/users">Users</a>
            <a href="/resetusersettings">Reset User Settings</a>
            <a href="/restrictuser">Restrict Acct - User</a>
            <a href="/restrictrole">Restrict Acct - Role</a>
            <a href="/roleprivilege">Role Privilege</a>
            <a href="/institutions">Institutions</a>
            <a href="/intitutiongroup">Institution Group</a>
            <a href="/roles">Roles</a>
          </div>
          <a href="#" onClick={handleMenuClick}>
            Capture
          </a>
          <div className="submenu">
            <a href="/applicationcodes">Application Codes</a>
            <a href="/worktypes">Work Types</a>
            <a href="/dupitemsconfig">Dup Items Config</a>
            <a href="/endpoint">Endpoint</a>
            <a href="/endpointgroups">Endpoint Groups</a>
            <a href="/eclprofiles">ECL Profiles</a>
            <a href="/cashlettergroup">Cash Letter Group</a>
            <a href="/virtualmaster">Virtual Master</a>
            <a href="/adjustmentconfig">Adjustment Config</a>
          </div>
          <a href="#" onClick={handleMenuClick}>
            Sort Pattern
          </a>
          <div className="submenu">
            <a href="/sortpattern">Sort Pattern</a>
            <a href="/sortpatternkeys">Sort Pattern Keys</a>
            <a href="/sortpatternpockets">Sort Pattern Pockets</a>
            <a href="/sortpatternselectors">Sort Pattern Selectors</a>
            <a href="/sortpatterntables">Sort Pattern Tables</a>
            <a href="/micrconversion">MICR Conversion</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
