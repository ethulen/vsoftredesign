import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const WorkTypes = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1); // Navigate back to previous page
  };
  return (
    <div className="container">
      <div className="form-container">
        <h1>Work Types</h1>
        <table>
          <thead>
            <tr>
              <th>Work Type ID</th>
              <th>Description</th>
              <th>Paid Exception</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><input type="text" id="description" /></td>
              <td>
                <select id="paidException">
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td><input type="text" id="description" /></td>
              <td>
                <select id="paidException">
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
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

export default WorkTypes;
