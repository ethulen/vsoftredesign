import React, { useState } from "react";
import Select from "react-select";
import TableInput from "./TableInput";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function BranchList() {
  const [selectedSite, setSelectedSite] = useState(null);

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1); // Navigate back to previous page
  };

  const handleSiteChange = (selectedOption) => {
    setSelectedSite(selectedOption);
  };

  const sites = [
    { value: "site1", label: "Site 1" },
    { value: "site2", label: "Site 2" },
    { value: "site3", label: "Site 3" },
  ];

  return (
    <div className="branch-group">
      <div className="form-container">
        <h1 className="title-header">Branch Groups Sorters</h1>
        <div className="select-container">
          <Select
            value={selectedSite}
            onChange={handleSiteChange}
            options={sites}
            placeholder="Select a site"
          />
        </div>

        <div>
          <TableInput
            headers={[
              "Branch Name",
              "Block Range From",
              "Block Range To",
              "Status",
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

export default BranchList;
