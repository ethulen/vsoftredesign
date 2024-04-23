import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ECLInbox = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1); // Navigate back to previous page
  };
  const data = [
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
  ];
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
                  <td>{row.id}</td>
                  <td>{row.inboxName}</td>
                  <td>{row.fileCategory}</td>
                  <td>{row.eclType}</td>
                  <td>{row.inboxPath}</td>
                  <td>{row.virtualSorterPath}</td>
                  <td>{row.parameters}</td>
                  <td>{row.sorterId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
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
    </div>
  );
};

export default ECLInbox;
