import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Institutions = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1); // Navigate back to previous page
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title-header">Institutions</h1>
        <div className="container">
          <div className="inline-div">
            <label htmlFor="institutionId">Institution Id:</label>
            <select id="institutionId">
              <option value="01">01 - do not use</option>
              <option value="03">03 - 003 FNB of Hutchinson</option>
              <option value="07">07 - 007 Peoples Bank & Trust Co</option>
              {/* Add more institutions here */}
            </select>
          </div>
          <div className="inline-div">
            <label htmlFor="institutionName">Institution Name:</label>
            <input type="text" id="institutionName" />
          </div>
          <div className="inline-div">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" />
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" />
          </div>
          <div className="inline-div">
            <label htmlFor="state">State:</label>
            <input type="text" id="state" />
          </div>
          <div className="inline-div">
            <label htmlFor="zip">Zip:</label>
            <input type="text" id="zip" />
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label htmlFor="telNo">Tel. No:</label>
            <input type="text" id="telNo" />
          </div>
          <div className="inline-div">
            <label htmlFor="taxId">Tax ID:</label>
            <input type="text" id="taxId" />
          </div>
          <div className="inline-div">
            <label htmlFor="creditsFirst">Credits First:</label>
            <select id="creditsFirst">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label htmlFor="routingNumber">Routing Number:</label>
            <input type="text" id="routingNumber" />
          </div>
          <div className="inline-div">
            <label htmlFor="processingInstitution">
              Processing Institution:
            </label>
            <input type="text" id="processingInstitution" />
          </div>
          <div className="inline-div">
            <label htmlFor="logoFilePath">Logo File Path:</label>
            <input type="text" id="logoFilePath" />
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label htmlFor="vcFilePath">VC File Path:</label>
            <input type="text" id="vcFilePath" />
          </div>
          <div className="inline-div">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div className="inline-div">
            <label htmlFor="mfaEnable">
              Multi Factor Authentication(MFA) Enable:
            </label>
            <select id="mfaEnable">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div>
          <h3 className="title-header">Virtual Credit Routing</h3>
          <div className="container">
            <div className="inline-div">
              <label htmlFor="virtualCreditRouting">Routing:</label>
              <input type="text" id="virtualCreditRouting" />
            </div>
            <div className="inline-div">
              <label htmlFor="virtualCreditAccount">Account:</label>
              <input type="text" id="virtualCreditAccount" />
            </div>
          </div>
          <div className="container">
            <div className="inline-div">
              <label htmlFor="virtualCreditTranCode">Tran Code:</label>
              <input type="text" id="virtualCreditTranCode" />
            </div>
            <div className="inline-div">
              <label htmlFor="virtualCreditSerial">Serial:</label>
              <input type="text" id="virtualCreditSerial" />
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <h3 className="title-header">Branch Capture</h3>
          <div>
            <label htmlFor="duplicateDetectionEnabled">
              Duplicate Detection Enabled:
            </label>
            <select id="duplicateDetectionEnabled">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
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

export default Institutions;
