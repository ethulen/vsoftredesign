import React, { useState } from "react";

const SortPatternSelector = () => {
  const [lowDocId, setLowDocId] = useState("");
  const [highDocId, setHighDocId] = useState("");
  const [formIdentification, setFormIdentification] = useState("");
  const [jobName, setJobName] = useState("");
  const [noDocSplitId, setNoDocSplitId] = useState(false);
  const [intermediateSelector, setIntermediateSelector] = useState(false);
  const [serialThreshold, setSerialThreshold] = useState("");
  const [position44Threshold, setPosition44Threshold] = useState("");
  const [routingTransitThreshold, setRoutingTransitThreshold] = useState("");
  const [accountThreshold, setAccountThreshold] = useState("");
  const [trancodeThreshold, setTrancodeThreshold] = useState("");
  const [amountThreshold, setAmountThreshold] = useState("");

  const setDefaults = () => {
    setLowDocId("");
    setHighDocId("");
    setFormIdentification("");
    setJobName("");
    setNoDocSplitId(false);
    setIntermediateSelector(false);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="title-header">Sort Pattern Selector</h2>
        <div className="container">
          <div className="inline-div">
            <label>Sort Pattern:</label>
            <select>
              <option value="3">DCI003 - ATM</option>
              <option value="7">DCI007 - ATM</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="inline-div">
            <label>Selector ID:</label>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="inline-div">
            <label>Pocket:</label>
            <select>
              <option value="1">Reject</option>
              <option value="2">OnUs</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="inline-div">
            <label>Endpoint ID:</label>
            <select>
              <option value="1">Valley State Bank</option>
              <option value="2">EH National Bank</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label>Application Code:</label>
            <select>
              <option value="1">Debits</option>
              <option value="2">Credits</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="inline-div">
            <label>Account CDV:</label>
            <select>
              <option value="">Null</option>
              <option value="0">Null CDV routine</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="inline-div">
            <label>RT Length:</label>
            <input type="text" placeholder="US RT" />
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label>Pass Number:</label>
            <input type="text" value="Prime Pass" readOnly />
          </div>
          <div className="inline-div">
            <label>Do CIF Lookup:</label>
            <input type="checkbox" />
          </div>
          <div className="inline-div">
            <label>Do CIF Account Type LookUp:</label>
            <input type="checkbox" />
          </div>
          <div className="inline-div">
            <label>Duplicate Detection Enabled (Central Site):</label>
            <input type="checkbox" />
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label>Credit Float Days:</label>
            <input type="text" />
          </div>
          <div className="inline-div">
            <label>On-Us Pricing:</label>
            <input type="text" />
          </div>
          <div className="inline-div">
            <label>MICR Conversion Selector:</label>
            <select>
              <option value="">Null</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <select name="cars" id="cars" multiple>
              <option value="serial">Serial</option>
              <option value="position44">Position44</option>
              <option value="routingTransit">Routing & Transit</option>
              <option value="account">Account</option>
              <option value="trancode">Trancode</option>
              <option value="amount">Amount</option>
            </select>
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label>Serial Threshold:</label>
            <input
              type="number"
              value={serialThreshold}
              onChange={(e) => setSerialThreshold(e.target.value)}
            />
          </div>
          <div className="inline-div">
            <label>Position44 Threshold:</label>
            <input
              type="number"
              value={position44Threshold}
              onChange={(e) => setPosition44Threshold(e.target.value)}
            />
          </div>
          <div className="inline-div">
            <label>Routing & Transit Threshold:</label>
            <input
              type="text"
              value={routingTransitThreshold}
              onChange={(e) => setRoutingTransitThreshold(e.target.value)}
            />
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label>Account:</label>
            <input
              type="number"
              value={accountThreshold}
              onChange={(e) => setAccountThreshold(e.target.value)}
            />
          </div>
          <div className="inline-div">
            <label>Trancode:</label>
            <input
              type="number"
              value={trancodeThreshold}
              onChange={(e) => setTrancodeThreshold(e.target.value)}
            />
          </div>
          <div className="inline-div">
            <label>Amount:</label>
            <input
              type="text"
              value={amountThreshold}
              onChange={(e) => setAmountThreshold(e.target.value)}
            />
          </div>
        </div>
        <h2 className="title-header">CAR Parameters</h2>
        <div className="container">
          <div className="inline-div">
            <label>Low Doc ID:</label>
            <input
              type="number"
              value={lowDocId}
              onChange={(e) => setLowDocId(e.target.value)}
            />
          </div>
          <div className="inline-div">
            <label>High Doc ID:</label>
            <input
              type="number"
              value={highDocId}
              onChange={(e) => setHighDocId(e.target.value)}
            />
          </div>
          <div className="inline-div">
            <label>Form Identification:</label>
            <input
              type="text"
              value={formIdentification}
              onChange={(e) => setFormIdentification(e.target.value)}
            />
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label>Job Name:</label>
            <input
              type="checkbox"
              value={jobName}
              onChange={(e) => setJobName(e.target.value)}
            />
          </div>
          <div className="inline-div">
            <label>No Doc Split ID:</label>
            <input
              type="text"
              checked={noDocSplitId}
              onChange={(e) => setNoDocSplitId(e.target.value)}
            />
          </div>
          <div className="inline-div">
            <label>Intermediate Selector:</label>
            <input
              type="text"
              checked={intermediateSelector}
              onChange={(e) => setIntermediateSelector(e.target.value)}
            />
          </div>
        </div>
        <h2 className="title-header">Image Analysis Options</h2>
        <div className="container">
          <div className="inline-div">
            <label>Image Quality Type:</label>
            <select>
              <option value="transitItems">Transit Items</option>
              <option value="onusItems">OnUs Items</option>
              <option value="">Null</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="inline-div">
            <label>Image Usability Type:</label>
            <select>
              <option value="transitItems">Transit Items</option>
              <option value="onusItems">OnUs Items</option>
              <option value="">Null</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <div className="button-row">
          <button className="addButton" onClick={setDefaults}>
            Add
          </button>
          <button className="addButton">Save</button>
          <button className="cancel-button">Delete</button>
          <button className="cancel-button" onClick={setDefaults}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortPatternSelector;
