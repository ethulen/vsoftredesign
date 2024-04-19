import React, { useState } from "react";
import Select from "react-select";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import TableInput from "./TableInput";

// Dummy data for institutions, branches, and ATMs
const institutions = [
  { value: "institution1", label: "Institution 1" },
  { value: "institution2", label: "Institution 2" },
  { value: "institution3", label: "Institution 3" },
];

const sites = [
  { value: "site1", label: "Site 1" },
  { value: "site2", label: "Site 2" },
  { value: "site3", label: "Site 3" },
];

// Dummy data for branches and ATMs
const branches = [
  { value: "branch1", label: "Branch 1" },
  { value: "branch2", label: "Branch 2" },
  { value: "branch3", label: "Branch 3" },
];

// Dummy data for branches and ATMs
const branchIDs = [
  { value: "branchID1", label: "1" },
  { value: "branchID2", label: "2" },
  { value: "branchID3", label: "3" },
];

function Branch() {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1); // Navigate back to previous page
  };

  const [selectedInstitution, setSelectedInstitution] = useState(null);
  const [selectedSite, setSelectedSite] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedBranchID, setSelectedBranchID] = useState(null);
  const [central, setCentral] = useState(false);
  const [atmEnabled, setATMEnabled] = useState(false);
  const [tellerEnabled, setTellerEnabled] = useState(false);
  const [bicEnabled, setBicEnabled] = useState(false);
  const [ATMECLProfiles, setATMECLProfiles] = useState(null);

  const handleInstitutionChange = (selectedOption) => {
    setSelectedInstitution(selectedOption);
    setSelectedSite(null); // Reset selected site when institution changes
    setSelectedBranch(null); // Reset selected branch when institution changes
    setSelectedBranchID(null); // Reset selected Branch ID when institution changes
    setATMECLProfiles(null);
  };

  const handleSiteChange = (selectedOption) => {
    setSelectedSite(selectedOption);
    setSelectedBranch(null);
    setSelectedBranchID(null); // Reset selected Branch ID when branch changes
    setATMECLProfiles(null);
  };

  const handleBranchChange = (selectedOption) => {
    setSelectedBranch(selectedOption);
    setSelectedBranchID(null); // Reset selected Branch ID when branch changes
    setATMECLProfiles(null);
  };

  const handleBranchIDChange = (selectedOption) => {
    setSelectedBranchID(selectedOption);
    setATMECLProfiles(null);
  };

  const handleATMECLProfileChange = (selectedOption) => {
    setATMECLProfiles(selectedOption);
  };

  const siteOptions = selectedInstitution ? sites : [];

  // Get branch options based on selected institution
  const branchOptions = selectedSite ? branches : [];

  const branchIDOptions = selectedBranch ? branchIDs : [];

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title-header">Branch</h1>
        <div className="select-container">
          <Select
            value={selectedInstitution}
            onChange={handleInstitutionChange}
            options={institutions}
            placeholder="Select an institution"
          />
          <Select
            value={selectedSite}
            onChange={handleSiteChange}
            options={siteOptions}
            placeholder="Select a site"
          />
          <Select
            value={selectedBranch}
            onChange={handleBranchChange}
            options={branchOptions}
            placeholder="Select a branch"
          />
          <div className="button-row">
            <Select
              value={selectedBranchID}
              onChange={handleBranchIDChange}
              options={branchIDOptions}
              placeholder="Select an branch ID"
            />
            <br />
            <label style={{ marginLeft: "20px" }}>
              Central:
              <input
                type="checkbox"
                checked={central}
                onChange={(e) => setCentral(e.target.checked)}
              />
            </label>
          </div>
        </div>

        {/* Text field for Custom Branch ID */}
        <div className="branch-form-group">
          <label htmlFor="customBranchID">Custom Branch ID:</label>
          <input type="text" id="customBranchID" />
        </div>

        <div className="button-row">
          <label style={{ marginLeft: "10px" }}>
            ATM Enabled:
            <input
              type="checkbox"
              checked={atmEnabled}
              onChange={(e) => setATMEnabled(e.target.checked)}
            />
          </label>
          <br />
          <label style={{ marginLeft: "20px" }}>
            Teller Enabled:
            <input
              type="checkbox"
              checked={tellerEnabled}
              onChange={(e) => setTellerEnabled(e.target.checked)}
            />
          </label>
          <br />
          <label style={{ marginLeft: "20px" }}>
            BIC Enabled:
            <input
              type="checkbox"
              checked={bicEnabled}
              onChange={(e) => setBicEnabled(e.target.checked)}
            />
          </label>
        </div>

        {/* Text field for Address */}
        <div className="branch-form-group">
          <label htmlFor="address1">Address 1:</label>
          <input type="text" id="address1" />
        </div>

        <div className="branch-form-group">
          <label htmlFor="address2">Address 2:</label>
          <input type="text" id="address2" />
        </div>

        <div className="button-row">
          {/* Text field for City */}
          <div className="branch-form-group">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" />
          </div>

          {/* Text field for State */}
          <div className="branch-form-group">
            <label htmlFor="state">State:</label>
            <input type="text" id="state" />
          </div>

          {/* Text field for Zip */}
          <div className="branch-form-group">
            <label htmlFor="zip">Zip:</label>
            <input type="text" id="zip" />
          </div>
        </div>

        {/* Text field for Tel. No */}
        <div className="branch-form-group">
          <label htmlFor="telNo">Phone: </label>
          <input type="text" id="telNo" />
        </div>

        {/* Text field for Email */}
        <div className="branch-form-group">
          <label htmlFor="emailECL">Email (ECL Files):</label>
          <input type="text" id="emailECL" />
        </div>

        {/* Text field for Email */}
        <div className="branch-form-group">
          <label htmlFor="emailEOD">Email (EOD Files):</label>
          <input type="text" id="emailEOD" />
        </div>

        <div>
          <TableInput
            headers={["Contact Name", "Phone1", "Phone2", "Fax", "Email"]}
          />
        </div>

        <div className="select-container">
          <label htmlFor="branchGroupDigits">Branch Group Digits:</label>
          <input type="text" id="branchGroupDigits" />
          <label htmlFor="sorterIDDigits">Sorter ID Digits:</label>
          <input type="text" id="sorterIDDigits" />
          <label htmlFor="itemSeqNumDigits">Item Seq Num Digits:</label>
          <input type="text" id="itemSEQNumDigits" />
          <label htmlFor="totalDigits">Total Digits:</label>
          <input type="text" id="totalDigits" />
        </div>

        <div className="branch-form-group">
          <Select
            value={ATMECLProfiles}
            onChange={handleATMECLProfileChange}
            options={siteOptions}
            placeholder="Transmission Processing Parameters(ATM ECL Profiles): "
          />
        </div>
        <br />

        <div className="button-row">
          <Link to="/addBlockRangeDefinition">
            <button className="addButton">Add</button>
          </Link>
          <Link to="/saveBlockRangeDefinition">
            <button className="addButton">Save</button>
          </Link>
          <Link to="/deleteBlockRangeDefinition">
            <button className="cancel-button">Delete</button>
          </Link>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Branch;
