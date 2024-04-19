import React, { useState } from "react";
import Select from "react-select";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ECLConsolidation() {
  const [selectedInstitution, setSelectedInstitution] = useState(null);
  const [selectedConsolidationType, setSelectedConsolidationType] = useState(null);

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1); // Navigate back to previous page
  };

  const handleInstitutionChange = (selectedOption) => {
    setSelectedInstitution(selectedOption);
    setSelectedConsolidationType(null);
  };

  const handleConsolidationTypeChange = (selectedOption) => {
    setSelectedConsolidationType(selectedOption);
  };

  // Dummy data for institutions, branches, and ATMs
  const institutions = [
    { value: "institution1", label: "Institution 1" },
    { value: "institution2", label: "Institution 2" },
    { value: "institution3", label: "Institution 3" },
  ];

  const consolidationTypes = [
    { value: "separate", label: "Separate Jobs per Branch" },
    { value: "consolidate", label: "Consolidate Jobs acrss Branches per sending Institution" },
    { value: "no", label: "No Consolidation" },
  ];
  const consolidationTypeOptions = selectedInstitution ? consolidationTypes : [];

  return (
    <div className="branch-group">
      <div className="form-container">
        <h1 className="title-header">ECL Consolidation</h1>
        <div className="select-container">
          <Select
            value={selectedInstitution}
            onChange={handleInstitutionChange}
            options={institutions}
            placeholder="Select a sending institution"
          />
          <Select
            value={selectedConsolidationType}
            onChange={handleConsolidationTypeChange}
            options={consolidationTypeOptions}
            placeholder="Select a Consolidation Type"
          />
        </div>

        <div className="branch-form-group title-header">
            <a href="/consolidationSchedules">Consolidation Schedules</a>
        </div>

        <div className="button-row">
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

export default ECLConsolidation;
