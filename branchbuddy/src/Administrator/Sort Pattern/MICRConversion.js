import React, { useState } from "react";

const MICRConversion = () => {
  const [conversionId, setConversionId] = useState("");
  const [description, setDescription] = useState("");

  const setDefaults = () => {
    setConversionId("");
    setDescription("");
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="title-header">MICR Conversion</h2>
        <div className="container">
          <div className="inline-div">
            <label>Sort Pattern:</label>
            <select>
              <option value="3">DCI003 - ATM</option>
              <option value="7">DCI007 - ATM</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <label>Conversion ID:</label>
            <input
              type="text"
              value={conversionId}
              onChange={(e) => setConversionId(e.target.value)}
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
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

export default MICRConversion;
