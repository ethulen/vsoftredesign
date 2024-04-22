import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Endpoint() {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1); // Navigate back to previous page
  };
  const endpointIdOptions = [
    { value: "1", label: "Valley State Bank" },
    { value: "2", label: "EH National Bank" },
    { value: "3", label: "FNB Hutch" },
    // Add more options as needed
  ];

  const alternateEndpointIdOptions = [
    { value: "1", label: "1 - Valley State Bank" },
    { value: "2", label: "2 - EH National Bank" },
    { value: "3", label: "3 - FNB Hutch" },
    // Add more options as needed
  ];

  const eclFedWorkTypeOptions = [
    { value: "1", label: "Fine-Sort Deferred" },
    { value: "2", label: "Pre-Sort Deferred" },
    { value: "3", label: "Mixed Deferred" },
    { value: "7", label: "Mixed 100 %" },
    { value: "8", label: "Mixed Dollar Cut" },
    { value: "A", label: "Fine-Sort Normal" },
    { value: "B", label: "Pre-Sort Normal" },
    { value: "C", label: "Mixed Normal" },
    { value: "D", label: "High Volume Mixed" },
    { value: "E", label: "Electronic Group Sort" },
    { value: "H", label: "Treasury Normal" },
    { value: "I", label: "Postal Money Order" },
    // Add more options as needed
  ];

  const eclProfileOptions = [
    { value: "ATM - DCI003", label: "ATM - DCI003" },
    { value: "ATM - DCI007", label: "ATM - DCI007" },
    // Add more options as needed
    { value: "Outgoing - DCI922", label: "Outgoing - DCI922" },
  ];

  const bofdRequiredOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  const cashLetterTypeOptions = [
    {
      value: "Forward Presentment",
      label: "Forward Presentment: Conventional ECL - X9.37(FED)",
    },
    {
      value: "Outgoing Returns",
      label: "Outgoing Returns: Conventional ECL - X9.37(FED)",
    },
    // Add more options as needed
  ];

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title-header">Endpoint</h1>
        <div>
          <label htmlFor="endpointId">Endpoint ID:</label>
          <select id="endpointId">
            {endpointIdOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="alternateEndpointId">Alternate Endpoint ID:</label>
          <select id="alternateEndpointId">
            {alternateEndpointIdOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="endpointName">Endpoint Name:</label>
          <input type="text" id="endpointName" />
        </div>
        <div>
          <label htmlFor="endpointType">Endpoint Type:</label>
          <input type="text" id="endpointType" />
        </div>
        <div>
          <label htmlFor="rtNumber">RT Number:</label>
          <input type="text" id="rtNumber" />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" />
        </div>
        {/* Add remaining fields */}
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input type="text" id="state" />
        </div>
        <div>
          <label htmlFor="zip">Zip:</label>
          <input type="text" id="zip" />
        </div>
        <div>
          <label htmlFor="instructions">Instructions:</label>
          <input type="text" id="instructions" />
        </div>
        <div>
          <label htmlFor="site">Site:</label>
          <input type="text" id="site" />
        </div>
        <div>
          <label htmlFor="eclFedWorkType">ECL FED Work Type:</label>
          <select id="eclFedWorkType">
            {eclFedWorkTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="eclProfile">ECL Profile:</label>
          <select id="eclProfile">
            {eclProfileOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="bofdRequired">BOFD Required:</label>
          <select id="bofdRequired">
            {bofdRequiredOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3>Due From</h3>
          <div>
            <div style={{ display: "inline-block" }}>
              <label htmlFor="dueFromAccount">Account:</label>
              <input type="text" id="dueFromAccount" />
            </div>
            <div style={{ display: "inline-block" }}>
              <label htmlFor="accountType">Account Type:</label>
              <input type="text" id="accountType" />
            </div>
            <div style={{ display: "inline-block" }}>
              <label htmlFor="routing">Routing:</label>
              <input type="text" id="routing" />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3>Cash Letter Types</h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ flex: 1 }}>
              <label htmlFor="forwardPresentment">Forward Presentment:</label>
              <select id="forwardPresentment">
                <option value="conventionalECL">
                  Conventional ECL - X9.37(FED)
                </option>
                <option value="ansiECL">ECL - X9.37(ANSI)</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="outgoingReturns">Outgoing Returns:</label>
              <select id="outgoingReturns">
                <option value="epExchgIRD">ECL - EP Exchg IRD</option>
                <option value="epExchgInc">ECL - EP Exchg (inc)</option>
              </select>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ flex: 1 }}>
              <label htmlFor="incomingReturns">
                Incoming Returns:
              </label>
              <select id="incomingReturns">
                <option value="wachovia">ECL - WACHOVIA</option>
                <option value="svpco">ECL - SVPCO</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="adjustments">Adjustments:</label>
              <select id="adjustments">
                <option value="conventionalECL">
                  Conventional ECL - X9.37(FED)
                </option>
                <option value="ansiECL">ECL - X9.37(ANSI)</option>
              </select>
            </div>
          </div>
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
}

export default Endpoint;
