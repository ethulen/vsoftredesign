import React, { useState } from "react";
import Select from "react-select";
import "./styles.css";

const BranchList = ({ initialData }) => {
  const [selectedSite, setSelectedSite] = useState(null);
  const [selectedInstitution, setSelectedInstitution] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [data, setData] = useState(initialData || []);
  const [rows, setRows] = useState([{ branchID: "", branchName: "", city: "", state: "", serial: "" }]);

  const handleAddRow = () => {
    const newData = [...data, { branchID: "", branchName: "", city: "", state: "", serial: "" }];
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

  const handleInstitutionChange = (selectedOption) => {
    setSelectedInstitution(selectedOption);
    setSelectedSite(null);
  };

  const handleSiteChange = (selectedOption) => {
    setSelectedSite(selectedOption);
  };

  const deleteLastRow = () => {
    setRows(rows.slice(0, -1));
  };

  const institutions = [
    { value: "Institution 1", label: "Institution 1" },
    { value: "Institution 2", label: "Institution 2" },
    { value: "Institution 3", label: "Institution 3" },
  ];

  const sites = [
    { value: "site1", label: "Site 1" },
    { value: "site2", label: "Site 2" },
    { value: "site3", label: "Site 3" },
  ];

  return (
    <div className="branch-group">
      <div className="form-container">
        <h1 className="title-header">Branch List</h1>
        <div className="select-container" style={{ width: "100%" }}>
          <Select
            value={selectedInstitution}
            onChange={handleInstitutionChange}
            options={institutions}
            placeholder="Select an institution"
          />
          <Select
            value={selectedSite}
            onChange={handleSiteChange}
            options={sites}
            placeholder="Select a site"
          />
        </div>

        <div style={{width:"100%", marginBottom: "20px"}}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Branch ID</th>
              <th>Branch Name</th>
              <th>City</th>
              <th>State</th>
              <th>Serial</th>
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
                    value={setting.branchID}
                    onChange={(e) => {
                      const newData = [...data];
                      newData[index].branchID = e.target.value;
                      setData(newData);
                    }}
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
                    value={setting.city}
                    onChange={(e) => {
                      const newData = [...data];
                      newData[index].city = e.target.value;
                      setData(newData);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={setting.state}
                    onChange={(e) => {
                      const newData = [...data];
                      newData[index].state = e.target.value;
                      setData(newData);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={setting.serial}
                    onChange={(e) => {
                      const newData = [...data];
                      newData[index].serial = e.target.value;
                      setData(newData);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        <div className="button-row">
            <button className="addButton" onClick={handleAddRow}>Add</button>
            <button className="addButton">Save</button>
            <button className="cancel-button" onClick={handleDeleteRows}>Delete</button>
          <button className="cancel-button" onClick={deleteLastRow}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default BranchList;
