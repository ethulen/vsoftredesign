import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function NewVirtualDocs(props) {
  const navigate = useNavigate();
  // Define state variables for form fields
  const [documentType, setDocumentType] = useState("");
  const [accontNumber, setAccontNumber] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [tranCode, setTranCode] = useState("");
  const [p44, setP44] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data
    // Example:
    // Redirect to previous page or any other action
    navigate(-1);
  };

  // Handle cancel button click
  const handleCancel = () => {
    navigate(-1); // Navigate back to previous page
  };
  const { location } = props;
  const { state } = location || {};
  const { institution, groupBranch, atmName } = state || {};
  console.log({
    documentType,
    accontNumber,
    routingNumber,
    serialNumber,
    tranCode,
    p44,
  });

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="institution">Institution:</label>
          <input
            type="text"
            id="institution"
            value={institution || ""} // Use default value if undefined
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="groupBranch">Group/Branch:</label>
          <input
            type="text"
            id="groupBranch"
            value={groupBranch || ""} // Use default value if undefined
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="atmName">ATM Name:</label>
          <input
            type="text"
            id="atmName"
            value={atmName || ""} // Use default value if undefined
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="documentType">Document Type:</label>
          <input
            type="text"
            id="documentType"
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="accountNumber">Account Number:</label>
          <input
            type="text"
            id="accountNumber"
            value={accontNumber}
            onChange={(e) => setAccontNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="routingNumber">Routing Number:</label>
          <input
            type="text"
            id="routingNumber"
            value={routingNumber}
            onChange={(e) => setRoutingNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="serialNumber">Serial Number:</label>
          <input
            type="text"
            id="serialNumber"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tranCode">Tran Code:</label>
          <input
            type="text"
            id="tranCode"
            value={tranCode}
            onChange={(e) => setTranCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="p44">P44:</label>
          <input
            type="text"
            id="p44"
            value={p44}
            onChange={(e) => setP44(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button className="save-button">Save</button>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewVirtualDocs;
