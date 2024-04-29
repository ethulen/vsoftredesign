import React, { useState } from "react";
import "./styles.css";

const BlockRangeDefinition = ({ initialData }) => {
  const [data, setData] = useState(initialData || []);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleAddRow = () => {
    const newData = [...data, { branchName: "", blockRangeFrom: "", blockRangeTo: "", status: "" }];
    setData(newData);
  };

  const handleCheckbox = (index) => {
    const selectedIndex = selectedRows.indexOf(index);
    if (selectedIndex === -1) {
      setSelectedRows([...selectedRows, index]);
    } else {
      setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
    }
  };

  const handleDeleteRows = () => {
    const newData = [...data];
    selectedRows.sort((a, b) => b - a).forEach((index) => {
      newData.splice(index, 1);
    });
    setData(newData);
    setSelectedRows([]);
  };

  const isDeleteDisabled = selectedRows.length === 0 || data.length === 1;

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title-header">Block Range Definition</h1>
        {/* Dropdown for Institution Id */}
        <div className="form-group">
          <label htmlFor="institutionId">Institution Id:</label>
          <select id="institutionId">
            {/* Options for Institution Id */}
            <option value="1">1</option>
            <option value="2">2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <table>
          <thead>
            <tr>
              <th></th>
              <th>Branch Name</th>
              <th>Block Range From</th>
              <th>Block Range To</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((setting, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(index)}
                    onChange={() => handleCheckbox(index)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={setting.branchName}
                    onChange={(e) => {
                      const newData = [...data];
                      newData[index].branchName = e.target.value;
                      setData(newData);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={setting.blockRangeFrom}
                    onChange={(e) => {
                      const newData = [...data];
                      newData[index].blockRangeFrom = e.target.value;
                      setData(newData);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={setting.blockRangeTo}
                    onChange={(e) => {
                      const newData = [...data];
                      newData[index].blockRangeTo = e.target.value;
                      setData(newData);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={setting.status}
                    onChange={(e) => {
                      const newData = [...data];
                      newData[index].status = e.target.value;
                      setData(newData);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button-row">
          <button className="addButton" onClick={handleAddRow}>
            Add
          </button>
          <button className="addButton">Save</button>
          <button onClick={handleDeleteRows} disabled={isDeleteDisabled} className="cancel-button">
            Delete
          </button>
          <button className="cancel-button" onClick={handleDeleteRows}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockRangeDefinition;
