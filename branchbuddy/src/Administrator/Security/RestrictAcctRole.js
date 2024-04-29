import React, { useState } from "react";

const UserAccountRestriction = () => {
  const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [lastAddedRowId, setLastAddedRowId] = useState(null);

  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleAddRow = () => {
    const newRow = {
      fromAccount: "",
      toAccount: "",
      rtNumber: "",
    };
    setRows([...rows, newRow]);
    setLastAddedRowId(newRow.id);
  };

  const handleDeleteRows = () => {
    const updatedRows = rows.filter((row) => !selectedRows.includes(row.id));
    setRows(updatedRows);
    setSelectedRows([]);
  };
  const handleCancelAddRow = () => {
    if (lastAddedRowId) {
      const updatedRows = rows.filter((row) => row.id !== lastAddedRowId);
      setRows(updatedRows);
      setLastAddedRowId(null);
    }
  };
  const handleCheckboxChange = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title-header">Roles Account Restriction</h1>
        <div className="container">
          <div className="inline-div">
            <label htmlFor="role">Role:</label>
            <select id="role" value={selectedRole} onChange={handleRoleChange}>
              <option value="">Select A Role</option>
              <option value="$SYS$">SYS Bank Operator</option>
              <option value="DCI Operator">DCI Operator</option>
              <option value="Admin">Admin</option>
              <option value="Bank Admin">Bank Admin</option>
            </select>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div className="container">
            <div className="inline-div">
              <p>Search allowed only</p>
              <div>
                <label>
                  <input type="radio" name="criteria" value="include" />
                  Include Criteria
                </label>
                <label>
                  <input type="radio" name="criteria" value="exclude" />
                  Exclude Criteria
                </label>
              </div>
            </div>
            <div className="inline-div">
              <p>Criteria:</p>
              <div>
                <label>
                  <input type="radio" name="accountType" value="range" />
                  Range Of Accounts
                </label>
                <label>
                  <input type="radio" name="accountType" value="specific" />
                  Specific Accounts
                </label>
              </div>
            </div>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>From Account</th>
                  <th>To Account</th>
                  <th>RT Number</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(row.id)}
                        onChange={() => handleCheckboxChange(row.id)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={row.fromAccount}
                        onChange={(e) => {
                          const updatedRow = {
                            ...row,
                            fromAccount: e.target.value,
                          };
                          const updatedRows = rows.map((r) =>
                            r.id === row.id ? updatedRow : r
                          );
                          setRows(updatedRows);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={row.toAccount}
                        onChange={(e) => {
                          const updatedRow = {
                            ...row,
                            toAccount: e.target.value,
                          };
                          const updatedRows = rows.map((r) =>
                            r.id === row.id ? updatedRow : r
                          );
                          setRows(updatedRows);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={row.rtNumber}
                        onChange={(e) => {
                          const updatedRow = {
                            ...row,
                            rtNumber: e.target.value,
                          };
                          const updatedRows = rows.map((r) =>
                            r.id === row.id ? updatedRow : r
                          );
                          setRows(updatedRows);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="button-row">
          <button className="addButton" onClick={handleAddRow}>
            Add Row
          </button>
          <button className="addButton">Save</button>
          <button className="cancel-button" onClick={handleDeleteRows}>
            Delete Selected Rows
          </button>
          <button className="cancel-button" onClick={handleCancelAddRow}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAccountRestriction;
