import React, { useState } from "react";

const ECLInbox = () => {
  const [rows, setRows] = useState([{ parameter: "", value: "" }]);
  const [data, setData] = useState([
    {
      id: 1,
      inboxName: "Inbox 1",
      fileCategory: "Category A",
      eclType: "ECL Type 1",
      inboxPath: "/inbox/path/1",
      virtualSorterPath: "/virtual/sorter/path/1",
      parameters: "Parameter 1",
      sorterId: "Sorter 1",
    },
    {
      id: 2,
      inboxName: "Inbox 2",
      fileCategory: "Category B",
      eclType: "ECL Type 2",
      inboxPath: "/inbox/path/2",
      virtualSorterPath: "/virtual/sorter/path/2",
      parameters: "Parameter 2",
      sorterId: "Sorter 2",
    },
    {
      id: 3,
      inboxName: "Inbox 3",
      fileCategory: "Category C",
      eclType: "ECL Type 3",
      inboxPath: "/inbox/path/3",
      virtualSorterPath: "/virtual/sorter/path/3",
      parameters: "Parameter 3",
      sorterId: "Sorter 3",
    },
  ]);
  const [selectedRows, setSelectedRows] = useState([]);

  const addRow = () => {
    const newRow = {
      id: data.length + 1,
      inboxName: "",
      fileCategory: "",
      eclType: "",
      inboxPath: "",
      virtualSorterPath: "",
      parameters: "",
      sorterId: "",
    };
    setData([...data, newRow]);
  };
  const deleteLastRow = () => {
    setRows(rows.slice(0, -1));
  };
  const deleteSelectedRows = () => {
    const updatedData = data.filter((row) => !selectedRows.includes(row.id));
    setData(updatedData);
  };

  const handleCheckboxChange = (id) => {
    const updatedSelectedRows = [...selectedRows];
    if (updatedSelectedRows.includes(id)) {
      // Remove the id if it exists in the selectedRows array
      const index = updatedSelectedRows.indexOf(id);
      updatedSelectedRows.splice(index, 1);
    } else {
      // Add the id if it doesn't exist in the selectedRows array
      updatedSelectedRows.push(id);
    }
    setSelectedRows(updatedSelectedRows);
  };

  const handleInputChange = (id, field, value) => {
    const updatedData = data.map((row) => {
      if (row.id === id) {
        return {
          ...row,
          [field]: value,
        };
      }
      return row;
    });
    setData(updatedData);
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="title-header">
          <h1>ECL Inbox</h1>
        </div>
        <div>
          <label htmlFor="institution">Institution:</label>
          <select id="institution">
            <option value="1">do not use</option>
            <option value="3">003 FNB of Hutchinson</option>
            <option value="7">007 Peoples Bank & Trust Co</option>
            <option value="13">013 KANZA Bank</option>
            <option value="29">029 Fusion Bank</option>
            <option value="43">043 The Citizens State Bank</option>
            <option value="55">055 Southwest National Bank</option>
            <option value="58">058 Valley State Bank</option>
            <option value="74">074 Valley State Bank</option>
            <option value="216">216 PCB Bank</option>
            <option value="232">232 EH National Bank</option>
            <option value="250">250 Gunnison Bank & Trust Co.</option>
            <option value="253">253 Goldwater Bank</option>
            <option value="262">262 Presence Bank</option>
            <option value="275">275 Golden Pacific Bank</option>
            <option value="278">278 Lewis & Clark Bank</option>
            <option value="293">293 Vintage Bank Kansas</option>
            <option value="303">303 TriCounty Trust Company</option>
            <option value="308">308 Oregon Pacific Bank</option>
            <option value="315">315 Oregon Coast Bank</option>
            <option value="319">319 First Nat Bk of Germantown</option>
            <option value="350">350 BAndera Bank</option>
            <option value="559">559 Johnson City Bank</option>
            <option value="632">632 Farmers & Merchants St Bk</option>
            <option value="808">808 Agility Bank</option>
            <option value="813">813 Heritage Bank</option>
            <option value="814">814 New Horizon Bank</option>
            <option value="820">820 Legacy Bank</option>
            <option value="832">832 Community Bank Delaware</option>
            <option value="922">922 Data Center Inc</option>
          </select>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th />
                <th>ID</th>
                <th>Inbox Name</th>
                <th>File Category</th>
                <th>ECL Type</th>
                <th>Inbox Path</th>
                <th>Virtual Sorter Path</th>
                <th>Parameters (ECL Profile)</th>
                <th>Sorter ID</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(row.id)}
                      onChange={() => handleCheckboxChange(row.id)}
                    />
                  </td>
                  <td>{row.id}</td>
                  <td>
                    <input
                      type="text"
                      value={row.inboxName}
                      onChange={(e) =>
                        handleInputChange(row.id, "inboxName", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.fileCategory}
                      onChange={(e) =>
                        handleInputChange(row.id, "fileCategory", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.eclType}
                      onChange={(e) =>
                        handleInputChange(row.id, "eclType", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.inboxPath}
                      onChange={(e) =>
                        handleInputChange(row.id, "inboxPath", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.virtualSorterPath}
                      onChange={(e) =>
                        handleInputChange(row.id, "virtualSorterPath", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.parameters}
                      onChange={(e) =>
                        handleInputChange(row.id, "parameters", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.sorterId}
                      onChange={(e) =>
                        handleInputChange(row.id, "sorterId", e.target.value)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <div className="button-row">
            <button className="addButton" onClick={addRow}>
              Add
            </button>
            <button className="addButton">Save</button>
            <button className="cancel-button" onClick={deleteSelectedRows}>Delete</button>
            <button className="cancel-button" onClick={deleteLastRow}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECLInbox;
