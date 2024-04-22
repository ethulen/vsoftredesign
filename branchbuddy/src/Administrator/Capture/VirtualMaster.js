import React from "react";
import "./captureStyles.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const VirtualMaster = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1); // Navigate back to previous page
  };
  return (
    <div className="container">
      <div className="form-container">
        <div className="title-header">
          <h1>Virtual Master</h1>
        </div>
        <div>
          <label htmlFor="institution">Institution:</label>
          <select id="institution">
            <option value="1">do not use</option>
            <option value="3">003 FNB of Hutchinson</option>
            <option value="7">007 Peoples Bank & Trust Co</option>
            <option value="13">013 KANZA Bank</option>
            <option value="29">029 Fusion Bank</option>
            <option value="43">043 The Citizens State Bank</option>
            <option value="55">055 Southwest National Bank</option>
            <option value="58">058 Valley State Bank</option>
            <option value="74">074 Valley State Bank</option>
            <option value="216">216 PCB Bank</option>
            <option value="232">232 EH National Bank</option>
            <option value="250">250 Gunnison Bank & Trust Co.</option>
            <option value="253">253 Goldwater Bank</option>
            <option value="262">262 Presence Bank</option>
            <option value="275">275 Golden Pacific Bank</option>
            <option value="278">278 Lewis & Clark Bank</option>
            <option value="293">293 Vintage Bank Kansas</option>
            <option value="303">303 TriCounty Trust Company</option>
            <option value="308">308 Oregon Pacific Bank</option>
            <option value="315">315 Oregon Coast Bank</option>
            <option value="319">319 First Nat Bk of Germantown</option>
            <option value="350">350 BAndera Bank</option>
            <option value="559">559 Johnson City Bank</option>
            <option value="632">632 Farmers & Merchants St Bk</option>
            <option value="808">808 Agility Bank</option>
            <option value="813">813 Heritage Bank</option>
            <option value="814">814 New Horizon Bank</option>
            <option value="820">820 Legacy Bank</option>
            <option value="832">832 Community Bank Delaware</option>
            <option value="922">922 Data Center Inc</option>
          </select>
        </div>
        <div>
          <label htmlFor="virtualID">Virtual ID:</label>
          <select id="virtualID">
            <option value="1">Customer Debit</option>
            <option value="2">Customer Credit</option>
          </select>
        </div>
        <div>
          <label htmlFor="virtualDescription">Virtual Description:</label>
          <input type="text" id="virtualDescription" />
        </div>
        <div>
          <label htmlFor="tranCode">Tran Code:</label>
          <input type="text" id="tranCode" />
        </div>
        <div>
          <label htmlFor="accountNumber">Account Number:</label>
          <input type="text" id="accountNumber" />
        </div>
        <div>
          <label htmlFor="routingAndTransit">Routing & Transit:</label>
          <input type="text" id="routingAndTransit" />
        </div>
        <div>
          <label htmlFor="serialNumber">Serial Number:</label>
          <input type="text" id="serialNumber" />
        </div>
        <div>
          <label htmlFor="imageFile">Image File:</label>
          <input type="text" id="imageFile" />
        </div>
        <div>
          <label htmlFor="allowModifyAccount">
            Allow modify account after adjustment:
          </label>
          <select id="allowModifyAccount">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="adviceInd">Advice Ind:</label>
          <select id="adviceInd">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="adviceTemplateFile">Advice Template File:</label>
          <input type="text" id="adviceTemplateFile" />
        </div>
        <div>
          <label htmlFor="backInd">Back Ind:</label>
          <select id="backInd">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="imagesAcross">Images Across:</label>
          <select id="imagesAcross">
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div>
          <label htmlFor="creditInd">Credit Ind:</label>
          <select id="creditInd">
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        <div>
          <label htmlFor="eclType">ECL Type:</label>
          <select id="eclType">
            <option value="Not Set">Not Set</option>
            <option value="ATM ECL - 12">ATM ECL - 12</option>
            <option value="Third Party ECL - 99">Third Party ECL - 99</option>
            <option value="VSoft Branch ECL - 1">VSoft Branch ECL - 1</option>
          </select>
        </div>
        <div>
          <label htmlFor="adjustmentType">Adjustment Type:</label>
          <select id="adjustmentType">
            <option value="Deposit Correction">Deposit Correction</option>
            <option value="GL/FED Adjustment">GL/FED Adjustment</option>
          </select>
        </div>
        <div>
          <label htmlFor="adjustmentErrorType">Adjustment Error Type:</label>
          <input type="text" id="adjustmentErrorType" />
        </div>
        <div>
          <label htmlFor="autoAdjustInd">Auto Adjust Ind:</label>
          <select id="autoAdjustInd">
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        <div>
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
    </div>
  );
};

export default VirtualMaster;
