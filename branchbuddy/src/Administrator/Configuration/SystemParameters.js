import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SystemParameters = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1); // Navigate back to previous page
  };
  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title-header">System Parameters</h1>
        <div>
          <label htmlFor="product">Product:</label>
          <select id="product">
            <option value="CheckArchive">CheckArchive</option>
            <option value="Capture">Capture</option>
          </select>
        </div>
        <div>
          <label htmlFor="site">Site:</label>
          <select id="site">
            <option value="Default">Default</option>
            <option value="DCI Hutch">DCI Hutch</option>
          </select>
        </div>
        <div>
          <label htmlFor="institution">Institution:</label>
          <select id="institution">
            <option value="Default">Default</option>
            <option value="do not use">do not use</option>
            <option value="003 FNB of Hutchinson">003 FNB of Hutchinson</option>
            <option value="007 Peoples Bank & Trust Co">
              007 Peoples Bank & Trust Co
            </option>
            {/* Add more institutions here */}
          </select>
        </div>
        <div>
          <label htmlFor="parametersValue">Parameters Value:</label>
          <select id="parametersValue">
            <option value="IMAGE_PATH">Image Path</option>
            <option value="IMAGE_TYPE_24_URL">Image Type 24 URL</option>
            <option value="FILTER_SPN_ID_BASED_ON_INST_ID">
              Indicating if fil
            </option>
            <option value="REMOTESERVERURL">Remote Server URL</option>
            <option value="RESEARCH_ITEMS_PER_PAGE">
              The number of items on e
            </option>
            {/* Add more parameters here */}
          </select>
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
};

export default SystemParameters;
