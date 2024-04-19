import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function BlockRangeDefinition() {
  const navigate = useNavigate();
  const [processingInstitution, setProcessingInstitution] = useState(false);
  const [mfaEnabled, setMfaEnabled] = useState(false);
  const handleCancel = () => {
    navigate(-1); // Navigate back to previous page
  };

  return (
    <div className="block-range-definition">
      {/* Dropdown for Institution Id */}
      <div className="form-group">
        <label htmlFor="institutionId">Institution Id:</label>
        <select id="institutionId">
          {/* Options for Institution Id */}
          <option value="1">1</option>
          <option value="2">2</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Text field for Institution Name */}
      <div className="form-group">
        <label htmlFor="institutionName">Institution Name:</label>
        <input type="text" id="institutionName" />
      </div>

      {/* Text field for Address */}
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" />
      </div>

      {/* Text field for City */}
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input type="text" id="city" />
      </div>

      {/* Text field for State */}
      <div className="form-group">
        <label htmlFor="state">State:</label>
        <input type="text" id="state" />
      </div>

      {/* Text field for Zip */}
      <div className="form-group">
        <label htmlFor="zip">Zip:</label>
        <input type="text" id="zip" />
      </div>

      {/* Text field for Tel. No */}
      <div className="form-group">
        <label htmlFor="telNo">Tel. No:</label>
        <input type="text" id="telNo" />
      </div>

      {/* Text field for Tax ID */}
      <div className="form-group">
        <label htmlFor="taxId">Tax ID:</label>
        <input type="text" id="taxId" />
      </div>

      {/* Dropdown for Credits First */}
      <div className="form-group">
        <label htmlFor="creditsFirst">Credits First:</label>
        <select id="creditsFirst">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      {/* Text field for Routing Number */}
      <div className="form-group">
        <label htmlFor="routingNumber">Routing Number:</label>
        <input type="text" id="routingNumber" />
      </div>

      {/* Checkbox for Processing Institution */}
      <label style={{ marginLeft: "10px" }}>
        Processing Institution:
        <input
          type="checkbox"
          checked={processingInstitution}
          onChange={(e) => setProcessingInstitution(e.target.checked)}
        />
      </label>

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

      {/* Text field for Email */}
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" />
      </div>

      {/* Checkbox for Multi Factor Authentication (MFA) Enabled */}
      <label style={{ marginLeft: "10px" }}>
        BIC Enabled:
        <input
          type="checkbox"
          checked={mfaEnabled}
          onChange={(e) => setMfaEnabled(e.target.checked)}
        />
      </label>

      <h2>Virtual Credit</h2>

      {/* Text field for Routing */}
      <div className="form-group">
        <label htmlFor="routing">Routing:</label>
        <input type="text" id="routing" />
      </div>

      {/* Text field for Account */}
      <div className="form-group">
        <label htmlFor="account">Account:</label>
        <input type="text" id="account" />
      </div>

      {/* Text field for Tran Code */}
      <div className="form-group">
        <label htmlFor="tranCode">Tran Code:</label>
        <input type="text" id="tranCode" />
      </div>

      {/* Text field for Serial */}
      <div className="form-group">
        <label htmlFor="serial">Serial:</label>
        <input type="text" id="serial" />
      </div>
      <br />

      <h2>Branch Capture</h2>

      <div className="form-group">
        <input type="checkbox" id="dupDetectionEnabled" />
        <label htmlFor="dupDetectionEnabled">
          Duplication Detection Enabled
        </label>
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
  );
}

export default BlockRangeDefinition;
