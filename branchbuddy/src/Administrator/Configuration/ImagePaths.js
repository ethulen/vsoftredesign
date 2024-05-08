import React, { useState } from "react";

const ImagePaths = () => {
  const handleCancel = () => {
    // Get reference to the table
    const table = document.getElementById('imagePaths');
  
    // Check if the table has any rows
    if (table.rows.length > 0) {
      // Delete the last row
      table.deleteRow(table.rows.length - 1);
    } else {
      console.log('Table is empty!');
    }
  };

  const handleDelete = () => {
    // Get reference to the table
    const table = document.getElementById('imagePaths');
  
    // Get reference to the selected row
    const selectedRow = table.querySelector('tr.selected');
  
    // Check if a row is selected
    if (selectedRow) {
      // Delete the selected row
      selectedRow.remove();
    } else {
      console.log('No row selected!');
    }
  };

  const handleAdd = () => {
    // Assuming rows is a state variable containing the current rows
    // Create a new row object with default values
    const newRow = {
      id: rows.length + 1, // Generate a unique ID for the new row
      checked: false,
      imageType: 'Type A',
      path: ''
    };
  
    // Update the state to add the new row
    setRows([...rows, newRow]);
  };
  

  const [rows, setRows] = useState([
    { id: 1, imageType: "Type A", path: "", checked: false },
    { id: 2, imageType: "Type B", path: "", checked: false },
    { id: 3, imageType: "Type C", path: "", checked: false },
  ]);

  const handleCheckboxChange = (id) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, checked: !row.checked } : row
    );
    setRows(updatedRows);
  };

  const handleImageTypeChange = (id, value) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, imageType: value } : row
    );
    setRows(updatedRows);
  };

  const handlePathChange = (id, value) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, path: value } : row
    );
    setRows(updatedRows);
  };

  const handleFileChange = (id, file) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, path: file.name } : row
    );
    setRows(updatedRows);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 style={{ width: "100%" }}>eDesk Configuration</h1>
        <div>
          <h1>Paths</h1>
          <table id="imagePaths">
            <thead>
              <tr>
                <th>Checkbox</th>
                <th>Image Type</th>
                <th>Path</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={row.checked}
                      onChange={() => handleCheckboxChange(row.id)}
                    />
                  </td>
                  <td>
                    <select
                      value={row.imageType}
                      onChange={(e) =>
                        handleImageTypeChange(row.id, e.target.value)
                      }
                    >
                      <option value="Type A">Type A</option>
                      <option value="Type B">Type B</option>
                      <option value="Type C">Type C</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.path}
                      onChange={(e) => handlePathChange(row.id, e.target.value)}
                    />
                    <input
                      type="file"
                      id={`path${row.id}`}
                      onChange={(e) =>
                        handleFileChange(row.id, e.target.files[0])
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="button-row">
          <button className="addButton" onClick={handleAdd}>Add</button>
          <button className="addButton">Save</button>
          <button className="cancel-button" onClick={handleDelete}>Delete</button>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImagePaths;
