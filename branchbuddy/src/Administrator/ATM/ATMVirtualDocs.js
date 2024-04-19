import React, { useState } from "react";
import "./styles.css"; // Import the CSS file
import { Link } from "react-router-dom";

function ATMVirtualDocs() {
  // State for selected institution, group/branch, and ATM
  const [selectedInstitution, setSelectedInstitution] = useState("");
  const [selectedGroupBranch, setSelectedGroupBranch] = useState("");
  const [selectedATM, setSelectedATM] = useState("");
  const [isFormValid, setIsFormValid] = useState(false); // State to track form validity

  // Sample data for dropdown options
  const institutions = ["Institution 1", "Institution 2", "Institution 3"];
  const groupsBranches = {
    "Institution 1": ["Group/Branch 1A", "Group/Branch 1B", "Group/Branch 1C"],
    "Institution 2": ["Group/Branch 2A", "Group/Branch 2B", "Group/Branch 2C"],
    "Institution 3": ["Group/Branch 3A", "Group/Branch 3B", "Group/Branch 3C"]
  };
  const ATMs = {
    "Group/Branch 1A": ["ATM 1A1", "ATM 1A2", "ATM 1A3"],
    "Group/Branch 1B": ["ATM 1B1", "ATM 1B2", "ATM 1B3"],
    "Group/Branch 1C": ["ATM 1C1", "ATM 1C2", "ATM 1C3"],
    // Add more ATMs for other branches
  };

  // Function to handle institution selection
  const handleInstitutionSelect = (event) => {
    setSelectedInstitution(event.target.value);
    // Reset selected group/branch and ATM when a new institution is selected
    setSelectedGroupBranch("");
    setSelectedATM("");
    setIsFormValid(false); // Reset form validity
  };

  // Function to handle group/branch selection
  const handleGroupBranchSelect = (event) => {
    setSelectedGroupBranch(event.target.value);
    // Reset selected ATM when a new group/branch is selected
    setSelectedATM("");
    setIsFormValid(false); // Reset form validity
  };

  // Function to handle ATM selection
  const handleATMSelect = (event) => {
    setSelectedATM(event.target.value);
    setIsFormValid(true); // Set form validity to true when all dropdowns are selected
  };

  return (
    <div className="atm-virtual-docs-container">
      <h2 className="atm-virtual-docs-heading">ATM Virtual Docs</h2>
      {/* Institution dropdown */}
      <div>
        <label className="atm-virtual-docs-label" htmlFor="institutionSelect">Institution: </label>
        <select
          className="atm-virtual-docs-select"
          id="institutionSelect"
          value={selectedInstitution}
          onChange={handleInstitutionSelect}
        >
          <option value="">Select an institution</option>
          {institutions.map((institution, index) => (
            <option key={index} className="atm-virtual-docs-option" value={institution}>{institution}</option>
          ))}
        </select>
      </div>

      {/* Group/Branch dropdown */}
      <div>
        <label className="atm-virtual-docs-label" htmlFor="groupBranchSelect">Group/Branch: </label>
        <select
          className="atm-virtual-docs-select"
          id="groupBranchSelect"
          value={selectedGroupBranch}
          onChange={handleGroupBranchSelect}
          disabled={!selectedInstitution} // Disable if institution is not selected
        >
          <option value="">Select a group/branch</option>
          {groupsBranches[selectedInstitution] &&
            groupsBranches[selectedInstitution].map((groupBranch, index) => (
              <option key={index} className="atm-virtual-docs-option" value={groupBranch}>{groupBranch}</option>
            ))}
        </select>
      </div>

      {/* ATM dropdown */}
      <div>
        <label className="atm-virtual-docs-label" htmlFor="ATMSelect">ATM: </label>
        <select
          className="atm-virtual-docs-select"
          id="ATMSelect"
          value={selectedATM}
          onChange={handleATMSelect}
          disabled={!selectedGroupBranch} // Disable if group/branch is not selected
        >
          <option value="">Select an ATM</option>
          {ATMs[selectedGroupBranch] &&
            ATMs[selectedGroupBranch].map((ATM, index) => (
              <option key={index} className="atm-virtual-docs-option" value={ATM}>{ATM}</option>
            ))}
        </select>
      </div>

      {/* Display message if form is invalid */}
      {!isFormValid && <p className="atm-virtual-docs-error">Please select all dropdowns.</p>}

      <Link
        to={{
          pathname: '/addvirtualdocs',
          state: { selectedInstitution, selectedGroupBranch, selectedATM }
        }}
      ><button className="addButton">Add Virtual Docs</button></Link>
    </div>
  );
}

export default ATMVirtualDocs;
