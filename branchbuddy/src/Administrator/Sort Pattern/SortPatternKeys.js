import React, { useState } from "react";

const SortPatternKeys = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      checked: false,
      keyName: "",
      fieldNumber: "",
      fieldLength: "",
      keyStart: "",
      keyLength: "",
    },
  ]);

  const handleCheckChange = (id) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, checked: !row.checked } : row
      )
    );
  };

  const handleInputChange = (id, field, value) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const addRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      {
        id: prevRows.length + 1,
        checked: false,
        keyName: "",
        fieldNumber: "",
        fieldLength: "",
        keyStart: "",
        keyLength: "",
      },
    ]);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="title-header">Parameters</h2>

        <label>Sort Pattern ID:</label>
        <select>
          <option value="DCI003">DCI003 - ATM - 3</option>
          <option value="DCI007">DCI007 - ATM - 7</option>
          {/* Add more options as needed */}
        </select>
        <div>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Key Name</th>
                <th>Field Number</th>
                <th>Field Length</th>
                <th>Key Start</th>
                <th>Key Length</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={row.checked}
                      onChange={() => handleCheckChange(row.id)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.keyName}
                      onChange={(e) =>
                        handleInputChange(row.id, "keyName", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.fieldNumber}
                      onChange={(e) =>
                        handleInputChange(row.id, "fieldNumber", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.fieldLength}
                      onChange={(e) =>
                        handleInputChange(row.id, "fieldLength", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.keyStart}
                      onChange={(e) =>
                        handleInputChange(row.id, "keyStart", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.keyLength}
                      onChange={(e) =>
                        handleInputChange(row.id, "keyLength", e.target.value)
                      }
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
          <button className="cancel-button">Delete</button>
          <button className="cancel-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortPatternKeys;
