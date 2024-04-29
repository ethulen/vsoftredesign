import React, { useState } from "react";
import Select from "react-select";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const BranchGroupsSorters = ({ initialData }) => {
  const [selectedInstitution, setSelectedInstitution] = useState(null);
  const [selectedSite, setSelectedSite] = useState(null);
  const [group, setGroup] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [data, setData] = useState(initialData || []);

  const handleAddRow = () => {
    const newData = [
      ...data,
      { branch: "", branchSorterIDStyle: "", sorterSerialNumber: "", startingSeqNum: "", incrementSeqNum: "" },
    ];
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
    selectedRows
      .sort((a, b) => b - a)
      .forEach((index) => {
        newData.splice(index, 1);
      });
    setData(newData);
    setSelectedRows([]);
  };

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1); // Navigate back to previous page
  };

  const handleInstitutionChange = (selectedOption) => {
    setSelectedInstitution(selectedOption);
    setSelectedSite(null);
    setGroup(null);
  };

  const handleSiteChange = (selectedOption) => {
    setSelectedSite(selectedOption);
    setGroup(null);
  };

  const handleGroupChange = (selectedOption) => {
    setGroup(selectedOption);
  };

  const branchGroups = [
    { value: "branchID1", label: "1" },
    { value: "branchID2", label: "2" },
    { value: "branchID3", label: "3" },
  ];
  // Dummy data for institutions, branches, and ATMs
  const institutions = [
    { value: "institution1", label: "Institution 1" },
    { value: "institution2", label: "Institution 2" },
    { value: "institution3", label: "Institution 3" },
  ];

  const sites = [
    { value: "site1", label: "Site 1" },
    { value: "site2", label: "Site 2" },
    { value: "site3", label: "Site 3" },
  ];
  const siteOptions = selectedInstitution ? sites : [];
  const branchGroupOptions = selectedSite ? branchGroups : [];

  return (
    <div className="branch-group">
      <div className="form-container">
        <h1 className="title-header">Branch Group Sorters</h1>
        <div className="select-container">
          <Select
            value={selectedInstitution}
            onChange={handleInstitutionChange}
            options={institutions}
            placeholder="Select an institution"
          />
          <Select
            value={selectedSite}
            onChange={handleSiteChange}
            options={siteOptions}
            placeholder="Select a site"
          />
          <Select
            value={group}
            onChange={handleGroupChange}
            options={branchGroupOptions}
            placeholder="Select a Group"
          />
        </div>

        <div>
          <div style={{ width: "100%", marginBottom: "20px" }}>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Branch</th>
                  <th>Branch Sorter ID Style</th>
                  <th>Sorter Serial Number</th>
                  <th>Starting Seq Num</th>
                  <th>Increment Seq Num</th>
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
                        value={setting.branch}
                        onChange={(e) => {
                          const newData = [...data];
                          newData[index].branch = e.target.value;
                          setData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={setting.branchSorterIDStyle}
                        onChange={(e) => {
                          const newData = [...data];
                          newData[index].branchSorterIDStyle = e.target.value;
                          setData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={setting.sorterSerialNumber}
                        onChange={(e) => {
                          const newData = [...data];
                          newData[index].sorterSerialNumber = e.target.value;
                          setData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={setting.startingSeqNum}
                        onChange={(e) => {
                          const newData = [...data];
                          newData[index].startingSeqNum = e.target.value;
                          setData(newData);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={setting.incrementSeqNum}
                        onChange={(e) => {
                          const newData = [...data];
                          newData[index].incrementSeqNum = e.target.value;
                          setData(newData);
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
            <button className="addButton" onClick={handleAddRow}>Add</button>
            <button className="addButton">Save</button>
            <button className="cancel-button" onClick={handleDeleteRows}>Delete</button>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BranchGroupsSorters;
