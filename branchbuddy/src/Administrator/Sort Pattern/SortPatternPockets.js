import React, { useState } from "react";

const SortPatternPockets = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      checked: false,
      pocketRej: "",
      pocketType: "",
      endpointId: "",
      endorse: "",
      powerEncode: "",
      sortPattern: "",
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
        pocketRej: "",
        pocketType: "",
        endpointId: "",
        endorse: "",
        powerEncode: "",
        sortPattern: "",
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
                <th>Select</th>
                <th>Pocket Rej.</th>
                <th>Pocket Type</th>
                <th>Endpoint ID</th>
                <th>Endorse</th>
                <th>Power Encode</th>
                <th>Sort Pattern</th>
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
                      value={row.pocketRej}
                      onChange={(e) =>
                        handleInputChange(row.id, "pocketRej", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.pocketType}
                      onChange={(e) =>
                        handleInputChange(row.id, "pocketType", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.endpointId}
                      onChange={(e) =>
                        handleInputChange(row.id, "endpointId", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.endorse}
                      onChange={(e) =>
                        handleInputChange(row.id, "endorse", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.powerEncode}
                      onChange={(e) =>
                        handleInputChange(row.id, "powerEncode", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.sortPattern}
                      onChange={(e) =>
                        handleInputChange(row.id, "sortPattern", e.target.value)
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
          <button className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SortPatternPockets;
