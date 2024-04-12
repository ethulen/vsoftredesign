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
            <a href="/branchgroupsorters">Branch Group Sorters</a>
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
        <a href="#" onClick={handleMenuClick}>
          Operations
        </a>
        <div className="submenu">
          <a href="#" onClick={handleMenuClick}>
            Capture
          </a>
          <div className="submenu">
            <a href="/amountentry">Amount Entry</a>
            <a href="/cashletterrequest">Cash Letter Request</a>
            <a href="/rejectrepair">Reject Repair</a>
            <a href="/balancing">Balancing</a>
          </div>
          <a href="#" onClick={handleMenuClick}>
            ATM
          </a>
          <div className="submenu">
            <a href="/transactionreview">Transaction Review</a>
            <a href="/adviceprinting">Advice Printing</a>
            <a href="/exceptions">Exceptions</a>
            <a href="/atmuserunlock">ATM User Unlock</a>
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
            <a href="/startofday">Start Of Day</a>
            <a href="/datadeletion">Data Deletion</a>
            <a href="/databasemaintenance">Database Maintenance</a>
          </div>
          <a href="#" onClick={handleMenuClick}>
            Digital Dashboard
          </a>
          <div className="submenu">
            <a href="/inwardecls">Inward ECLs</a>
            <a href="/atm">ATM</a>
            <a href="/cashlettercontrol">Cash Letter Control</a>
            <a href="/dashboardsl">Dashboard SL</a>
          </div>
          <a href="#" onClick={handleMenuClick}>
            Status
          </a>
          <div className="submenu">
            <a href="/jobstatus">Job Status</a>
            <a href="/blockstatus">Block Status</a>
            <a href="/batchstatus">Batch Status</a>
            <a href="/workstatus">Work Status</a>
          </div>
          <a href="#" onClick={handleMenuClick}>
            ATM
          </a>
          <div className="submenu">
            <a href="/atmreview">ATM Review</a>
            <a href="/eclreview">ECL Review</a>
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
            <a href="/userprofilesreport">User Profiles Report</a>
            <a href="/audituserchange">Audit User Change</a>
            <a href="/successfullogins">Successful Logins</a>
            <a href="/roleprivileges">Role Privileges</a>
            <a href="/unsuccessfullogins">Unsuccessful Logins</a>
            <a href="/roleaudit">Role Audit</a>
            <a href="/researchrestrictaudit">Research Restrict Audit</a>
            <a href="/institutionaudit">Institution Audit</a>
            <a href="/useracctretraudit">User Acct Retr Audit</a>
            <a href="/institutiongroupaudit">Institution Group Audit</a>
            <a href="/rolesacctrestraudit">Roles Acct Restr Audit</a>
          </div>
          <a href="#" onClick={handleMenuClick}>
            Capture
          </a>
          <div className="submenu">
            <a href="/blocktotal">Block Total</a>
            <a href="/consolidatedapptotal">Consolidated App Total</a>
            <a href="/x937report">X937 Report</a>
            <a href="/mastersbyjob">Masters by Job</a>
            <a href="/clrecapendpoint">C L Recap (Endpoint)</a>
            <a href="/clrecapjob">C L Recap (Job)</a>
          </div>
          <a href="#" onClick={handleMenuClick}>
            Research
          </a>
          <div className="submenu">
            <a href="/researchitemaudit">Research Item Audit</a>
            <a href="/dailyitemtotal">Daily Item Total</a>
            <a href="/bundlesummary">Bundle Summary</a>
            <a href="/applicationtools">Application Tools</a>
          </div>
          <a href="#" onClick={handleMenuClick}>
            ATM Report
          </a>
          <div className="submenu">
            <a href="/atmreport">ATM Report</a>
            <a href="/onuscheckdetail">ONUS Check Detail</a>
            <a href="/checkitemdetail">Check Item Detail</a>
            <a href="/adjustmentdetail">Adjustment Detail</a>
            <a href="/itemdetail">Item Detail</a>
            <a href="/operatorstatistics">Operator Statistics</a>
            <a href="/eod">End of Day</a>
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
            <a href="/capture">Capture</a>
            <a href="/checkarchive">Check Archive</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
