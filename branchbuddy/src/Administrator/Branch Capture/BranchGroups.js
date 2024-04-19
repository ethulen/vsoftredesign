import React, { useState } from "react";
import Select from "react-select";
import MultiselectComponent from "./MultiselectComponent";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function BranchGroups() {
  const [groupID, setGroupID] = useState(null);
  const [virtualSorter, setVirtualSorter] = useState(null);

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1); // Navigate back to previous page
  };

  const handleGroupIDChange = (selectedOption) => {
    setGroupID(selectedOption);
    setVirtualSorter(null);
  };

  const handleVirtualSorterChange = (selectedOption) => {
    setVirtualSorter(selectedOption);
  };

  const branchGroupIDs = [
    { value: "branchID1", label: "1" },
    { value: "branchID2", label: "2" },
    { value: "branchID3", label: "3" },
  ];
  const virtualSorters = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
  ];

  const virtualSorterOptions = groupID ? virtualSorters : [];

  return (
    <div className="branch-group">
      <div className="form-container">
        <h1 className="title-header">Branch Groups</h1>
        <div className="select-container">
          <Select
            value={groupID}
            onChange={handleGroupIDChange}
            options={branchGroupIDs}
            placeholder="Select an institution"
          />
          <Select
            value={virtualSorter}
            onChange={handleVirtualSorterChange}
            options={virtualSorterOptions}
            placeholder="Select a site"
          />
        </div>
        <div className="branch-form-group">
          <label htmlFor="groupName">Group Name:</label>
          <input type="text" id="groupName" />
        </div>
        {/* File input field for Logo File Path */}
        <div className="form-group">
          <label htmlFor="logoFilePath">Logo File Path:</label>
          <input type="file" id="logoFilePath" />
        </div>
        {/* File input field for VC File Path */}
        <div className="form-group">
          <label htmlFor="vcFilePath">VC File Path:</label>
          <input type="file" id="vcFilePath" />
        </div>
        <div className="branch-form-group">
          <label htmlFor="srmID">SRM ID:</label>
          <input type="text" id="srmID" />
        </div>
        <div className="branch-form-group">
          <label htmlFor="blocksPerJob">Blocks Per Job:</label>
          <input type="text" id="blocksPerJob" />
        </div>

        <div className="multiselect-container branch-form-group">
          <MultiselectComponent />
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

export default BranchGroups;
