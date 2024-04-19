import React, { useState } from "react";
import Select from "react-select";
import TableInput from "./TableInput";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function BranchGroupsSorters() {
  const [selectedInstitution, setSelectedInstitution] = useState(null);
  const [selectedSite, setSelectedSite] = useState(null);
  const [group, setGroup] = useState(null);

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1); // Navigate back to previous page
  };

  const handleInstitutionChange = (selectedOption) => {
    setSelectedInstitution(selectedOption);
    setSelectedSite(null);
    setGroup(null);
  };

  const handleSiteChange = (selectedOption) => {
    setSelectedSite(selectedOption);
    setGroup(null);
  };

  const handleGroupChange = (selectedOption) => {
    setGroup(selectedOption);
  };

  const branchGroups = [
    { value: "branchID1", label: "1" },
    { value: "branchID2", label: "2" },
    { value: "branchID3", label: "3" },
  ];
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
  const siteOptions = selectedInstitution ? sites : [];
  const branchGroupOptions = selectedSite ? branchGroups : [];

  return (
    <div className="branch-group">
      <div className="form-container">
        <h1 className="title-header">Branch Group Sorters</h1>
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
            value={group}
            onChange={handleGroupChange}
            options={branchGroupOptions}
            placeholder="Select a Group"
          />
        </div>

        <div>
          <TableInput
            headers={[
              "Branch",
              "Branch Sorter ID Style",
              "Sorter Serial Number",
              "Starting Seq Num",
              "Increment Seq Num",
            ]}
          />
        </div>

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

export default BranchGroupsSorters;
