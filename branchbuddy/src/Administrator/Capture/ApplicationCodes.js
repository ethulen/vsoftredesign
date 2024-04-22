import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ApplicationCodeTable from "./ApplicationCodeTable";

// Dummy data for institutions, branches, and ATMs
const institutions = [
  { value: "institution1", label: "Institution 1" },
  { value: "institution2", label: "Institution 2" },
  { value: "institution3", label: "Institution 3" },
];

function ApplicationCodes() {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1); // Navigate back to previous page
  };

  const [selectedInstitution, setSelectedInstitution] = useState(null);

  const handleInstitutionChange = (selectedOption) => {
    setSelectedInstitution(selectedOption);
  };


  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title-header">Application Codes</h1>
        <div className="select-container">
          <Select
            value={selectedInstitution}
            onChange={handleInstitutionChange}
            options={institutions}
            placeholder="Select an institution"
          />
        </div>
        <div>
          <ApplicationCodeTable />
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
export default ApplicationCodes;
