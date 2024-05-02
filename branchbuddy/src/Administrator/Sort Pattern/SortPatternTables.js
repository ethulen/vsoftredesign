import React, { useState } from "react";

const SortPatternTables = () => {
  const [sortPattern, setSortPattern] = useState("");
  const [tableId, setTableId] = useState("");
  const [tableType, setTableType] = useState("");
  const [keyName, setKeyName] = useState("");
  const [conversionId, setConversionId] = useState("");
  const [branchType, setBranchType] = useState("");
  const [branchNumber, setBranchNumber] = useState("");
  const [pageSize, setPageSize] = useState("");

  const [rows, setRows] = useState([
    {
      lowValue: "",
      highValue: "",
      branchType: "",
      branchNumber: "",
      conversionId: "",
    },
  ]);

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        lowValue: "",
        highValue: "",
        branchType: "",
        branchNumber: "",
        conversionId: "",
      },
    ]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newRows = [...rows];
    newRows[index][name] = value;
    setRows(newRows);
  };

  const setDefaults = () => {
    setSortPattern("");
    setTableId("");
    setTableType("");
    setKeyName("");
    setConversionId("");
    setBranchType("");
    setBranchNumber("");
    setPageSize("");
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="title-header">Sort Pattern Selector</h2>
        <div className="container">
          <div className="inline-div">
            <label>Sort Pattern:</label>
            <input
              type="text"
              value={sortPattern}
              onChange={(e) => setSortPattern(e.target.value)}
            />
          </div>
          <div className="inline-div">
            <label>Table ID:</label>
            <input
              type="text"
              value={tableId}
              onChange={(e) => setTableId(e.target.value)}
            />
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label>Table Type:</label>
            <input
              type="text"
              value={tableType}
              onChange={(e) => setTableType(e.target.value)}
            />
          </div>
          <div className="inline-div">
            <label>Key Name:</label>
            <input
              type="text"
              value={keyName}
              onChange={(e) => setKeyName(e.target.value)}
            />
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label>Conversion ID:</label>
            <input
              type="text"
              value={conversionId}
              onChange={(e) => setConversionId(e.target.value)}
            />
          </div>
          <div className="inline-div">
            <label>Branch Type:</label>
            <input
              type="text"
              value={branchType}
              onChange={(e) => setBranchType(e.target.value)}
            />
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label>Branch Number:</label>
            <input
              type="text"
              value={branchNumber}
              onChange={(e) => setBranchNumber(e.target.value)}
            />
          </div>
          <div className="inline-div">
            <label>Select Page Size:</label>
            <select onChange={(e) => setPageSize(e.target.value)}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
            </select>
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <table>
              <thead>
                <tr>
                  <th>Low Value</th>
                  <th>High Value</th>
                  <th>Branch Type</th>
                  <th>Branch Number</th>
                  <th>Conversion ID</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        name="lowValue"
                        value={row.lowValue}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="highValue"
                        value={row.highValue}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="branchType"
                        value={row.branchType}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="branchNumber"
                        value={row.branchNumber}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="conversionId"
                        value={row.conversionId}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="button-row">
          <button className="addButton" onClick={setDefaults}>
            Add Table
          </button>
          <button className="addButton" onClick={handleAddRow}>Add Row</button>
          <button className="addButton">Save</button>
          <button className="cancel-button">Delete Table</button>
          <button className="cancel-button">Delete Row</button>
          <button className="cancel-button" onClick={setDefaults}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortPatternTables;
