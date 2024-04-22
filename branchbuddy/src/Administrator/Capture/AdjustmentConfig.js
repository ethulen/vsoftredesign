import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AdjustmentTable from "./AdjustmentTable";

// Dummy data for institutions, branches, and ATMs
const institutions = [
  { value: "institution1", label: "Institution 1" },
  { value: "institution2", label: "Institution 2" },
  { value: "institution3", label: "Institution 3" },
];

// Dummy data for branches and ATMs
const adjustments = [
  { value: "dup", label: "Duplicate Items" },
  { value: "fail", label: "IQA/IUA Failed Items" },
];

function AdjustmentConfig() {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1); // Navigate back to previous page
  };

  const [selectedInstitution, setSelectedInstitution] = useState(null);
  const [selectedAdjustment, setSelectedAdjustment] = useState(null);

  const handleInstitutionChange = (selectedOption) => {
    setSelectedInstitution(selectedOption);
    setSelectedAdjustment(null); // Reset selected site when institution changes
  };

  const handleAdjustmentChange = (selectedOption) => {
    setSelectedAdjustment(selectedOption);
  };

  const adjustmentOptions = selectedAdjustment ? adjustments : [];

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title-header">Adjustment Configuration</h1>
        <div className="select-container">
          <Select
            value={selectedInstitution}
            onChange={handleInstitutionChange}
            options={institutions}
            placeholder="Select an institution"
          />
          <Select
            value={selectedAdjustment}
            onChange={handleAdjustmentChange}
            options={adjustmentOptions}
            placeholder="Select an Adjustment"
          />
        </div>
        <div>
          <label>Work Type: POD</label>
          <AdjustmentTable />
        </div>

        <div>
          <label>Work Type: Inclearing</label>
          <AdjustmentTable />
        </div>

        <div className="button-row">
          <Link to="/saveBlockRangeDefinition">
            <button className="addButton">Save</button>
          </Link>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
export default AdjustmentConfig;
