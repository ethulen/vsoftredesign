import React, { useState } from "react";
import "./index.css";
import { Link } from 'react-router-dom';

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
            <Link to="/edeskconfig">Edesk Configuration</Link>
            <Link to="/site">Site</Link>
            <Link to="/printers">Printers</Link>
            <Link to="/imagepaths">Image Paths</Link>
            <Link to="/systemparams">System Parameters</Link>
            <Link to="/eclinbox">ECL Inbox</Link>
          </div>
          <a href="#" onClick={handleMenuClick}>
            Branch Capture
          </a>
          <div className="submenu">
            <Link to="/branchlist">Branch List</Link>
            <Link to="/branch">Branch</Link>
            <Link to="/branchgroups">Branch Groups</Link>
            <Link to="/branchgroupsorters">Branch Group Sorters</Link>
            <Link to="/blockrangedefinition">Block Range Definition</Link>
            <Link to="/jobcutoffdefinition">Job Cutoff Definition</Link>
            <Link to="/eclconsolidation">ECL Consolidation</Link>
            <Link to="/consolidationschedules">Consolidation Schedules</Link>
          </div>
          <a href="#" onClick={handleMenuClick}>
            ATM
          </a>
          <div className="submenu">
            <Link to="/definition">Definition</Link>
            <Link to="/reviewthreshold">Review Threshold</Link>
            <Link to="/atmvirtualdocs">ATM Virtual Docs</Link>
          </div>
          <a href="#" onClick={handleMenuClick}>
            Security
          </a>
          <div className="submenu">
            <Link to="/users">Users</Link>
            <Link to="/resetusersettings">Reset User Settings</Link>
            <Link to="/restrictuser">Restrict Acct - User</Link>
            <Link to="/restrictrole">Restrict Acct - Role</Link>
            <Link to="/roleprivilege">Role Privilege</Link>
            <Link to="/institutions">Institutions</Link>
            <Link to="/roles">Roles</Link>
          </div>
          <a href="#" onClick={handleMenuClick}>
            Capture
          </a>
          <div className="submenu">
            <Link to="/applicationcodes">Application Codes</Link>
            <Link to="/worktypes">Work Types</Link>
            <Link to="/dupitemsconfig">Dup Items Config</Link>
            <Link to="/endpoint">Endpoint</Link>
            <Link to="/endpointgroups">Endpoint Groups</Link>
            <Link to="/eclprofiles">ECL Profiles</Link>
            <Link to="/cashlettergroup">Cash Letter Group</Link>
            <Link to="/virtualmaster">Virtual Master</Link>
            <Link to="/adjustmentconfig">Adjustment Config</Link>
          </div>
          <a href="#" onClick={handleMenuClick}>
            Sort Pattern
          </a>
          <div className="submenu">
            <Link to="/sortpattern">Sort Pattern</Link>
            <Link to="/sortpatternkeys">Sort Pattern Keys</Link>
            <Link to="/sortpatternpockets">Sort Pattern Pockets</Link>
            <Link to="/sortpatternselectors">Sort Pattern Selectors</Link>
            <Link to="/sortpatterntables">Sort Pattern Tables</Link>
            <Link to="/micrconversion">MICR Conversion</Link>
          </div>
        </div>
        <a href="#" onClick={handleMenuClick}>
          Operations
        </a>
        <div className="submenu">
          <a href="#" onClick={handleMenuClick}>
            Capture
          </a>
          <div className="submenu">
            <Link to="/amountentry">Amount Entry</Link>
            <Link to="/cashletterrequest">Cash Letter Request</Link>
            <Link to="/rejectrepair">Reject Repair</Link>
            <Link to="/balancing">Balancing</Link>
          </div>
          <a href="#" onClick={handleMenuClick}>
            ATM
          </a>
          <div className="submenu">
            <Link to="/transactionreview">Transaction Review</Link>
            <Link to="/adviceprinting">Advice Printing</Link>
            <Link to="/exceptions">Exceptions</Link>
            <Link to="/atmuserunlock">ATM User Unlock</Link>
          </div>   
        </div>
        <a href="#" onClick={handleMenuClick}>
          Supervisor
        </a>
        <div className="submenu">
          <a href="#" onClick={handleMenuClick}>
            Capture
          </a>
          <div className="submenu">
            <Link to="/startofday">Start Of Day</Link>
            <Link to="/datadeletion">Data Deletion</Link>
            <Link to="/databasemaintenance">Database Maintenance</Link>
          </div>
          <a href="#" onClick={handleMenuClick}>
            Digital Dashboard
          </a>
          <div className="submenu">
            <Link to="/inwardecls">Inward ECLs</Link>
            <Link to="/atm">ATM</Link>
            <Link to="/cashlettercontrol">Cash Letter Control</Link>
            <Link to="/dashboardsl">Dashboard SL</Link>
          </div>
          <a href="#" onClick={handleMenuClick}>
            Status
          </a>
          <div className="submenu">
            <Link to="/jobstatus">Job Status</Link>
            <Link to="/blockstatus">Block Status</Link>
            <Link to="/batchstatus">Batch Status</Link>
            <Link to="/workstatus">Work Status</Link>
          </div>
          <a href="#" onClick={handleMenuClick}>
            ATM
          </a>
          <div className="submenu">
            <Link to="/atmreview">ATM Review</Link>
            <Link to="/eclreview">ECL Review</Link>
          </div>   
        </div>
        <a href="#" onClick={handleMenuClick}>
          Reports
        </a>
        <div className="submenu">
          <a href="#" onClick={handleMenuClick}>
            Security Reports
          </a>
          <div className="submenu">
            <Link to="/userprofilesreport">User Profiles Report</Link>
            <Link to="/audituserchange">Audit User Change</Link>
            <Link to="/successfullogins">Successful Logins</Link>
            <Link to="/roleprivileges">Role Privileges</Link>
            <Link to="/unsuccessfullogins">Unsuccessful Logins</Link>
            <Link to="/roleaudit">Role Audit</Link>
            <Link to="/researchrestrictaudit">Research Restrict Audit</Link>
            <Link to="/institutionaudit">Institution Audit</Link>
            <Link to="/useracctretraudit">User Acct Retr Audit</Link>
            <Link to="/institutiongroupaudit">Institution Group Audit</Link>
            <Link to="/rolesacctrestraudit">Roles Acct Restr Audit</Link>
          </div>
          <a href="#" onClick={handleMenuClick}>
            Capture
          </a>
          <div className="submenu">
            <Link to="/blocktotal">Block Total</Link>
            <Link to="/consolidatedapptotal">Consolidated App Total</Link>
            <Link to="/x937report">X937 Report</Link>
            <Link to="/mastersbyjob">Masters by Job</Link>
            <Link to="/clrecapendpoint">C L Recap (Endpoint)</Link>
            <Link to="/clrecapjob">C L Recap (Job)</Link>
          </div>
          <a href="#" onClick={handleMenuClick}>
            Research
          </a>
          <div className="submenu">
            <Link to="/researchitemaudit">Research Item Audit</Link>
            <Link to="/dailyitemtotal">Daily Item Total</Link>
            <Link to="/bundlesummary">Bundle Summary</Link>
            <Link to="/applicationtools">Application Tools</Link>
          </div>
          <a href="#" onClick={handleMenuClick}>
            ATM Report
          </a>
          <div className="submenu">
            <Link to="/atmreport">ATM Report</Link>
            <Link to="/onuscheckdetail">ONUS Check Detail</Link>
            <Link to="/checkitemdetail">Check Item Detail</Link>
            <Link to="/adjustmentdetail">Adjustment Detail</Link>
            <Link to="/itemdetail">Item Detail</Link>
            <Link to="/operatorstatistics">Operator Statistics</Link>
            <Link to="/eod">End of Day</Link>
          </div>   
        </div>
        <a href="#" onClick={handleMenuClick}>
          Research
        </a>
        <div className="submenu">
          <a href="#" onClick={handleMenuClick}>
            Check Archive
          </a>
          <div className="submenu">
            <Link to="/capture">Capture</Link>
            <Link to="/checkarchive">Check Archive</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
