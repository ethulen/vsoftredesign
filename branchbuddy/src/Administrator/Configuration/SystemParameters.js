import React, { useState } from "react";

const SystemParameters = () => {
  const [rows, setRows] = useState([{ parameter: "", value: "" }]);

  const addRow = () => {
    setRows([...rows, { parameter: "", value: "" }]);
  };

  const deleteLastRow = () => {
    setRows(rows.slice(0, -1));
  };

  const handleParameterChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].parameter = value;
    setRows(updatedRows);
  };

  const handleValueChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].value = value;
    setRows(updatedRows);
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
          <table>
            <thead>
              <tr>
                <th>Parameters</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      value={row.parameter}
                      onChange={(e) =>
                        handleParameterChange(index, e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.value}
                      onChange={(e) => handleValueChange(index, e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="button-row">
          <button className="addButton" onClick={addRow}>
            Add
          </button>
          <button className="addButton">Save</button>
          <button className="cancel-button" onClick={deleteLastRow}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SystemParameters;
