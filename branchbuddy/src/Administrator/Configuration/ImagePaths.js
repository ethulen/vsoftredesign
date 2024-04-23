import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ImagePaths = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1); // Navigate back to previous page
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
          <table>
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
                      onChange={(e) => handleFileChange(row.id, e.target.files[0])}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
  );
};

export default ImagePaths;
