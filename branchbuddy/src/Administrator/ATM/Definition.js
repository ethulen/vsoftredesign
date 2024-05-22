import React, { useState } from "react";
import Select from "react-select";
import "./styles.css";
import { Link } from "react-router-dom";

// Dummy data for institutions, branches, and ATMs
const institutions = [
  { value: "institution1", label: "Institution 1" },
  { value: "institution2", label: "Institution 2" },
  { value: "institution3", label: "Institution 3" },
];

// Dummy data for branches and ATMs
const branches = [
  { value: "branch1", label: "Branch 1" },
  { value: "branch2", label: "Branch 2" },
  { value: "branch3", label: "Branch 3" },
];

const atmsData = {
  branch1: [
    {
      id: 1,
      atmName: "ATM 1",
      vendor: "Vendor 1",
      sourceInstitution: "Source Institution 1",
      sourceBranch: "Source Branch 1",
      sourceATM: "Source ATM 1",
      startTime: "09:00",
      endTime: "18:00",
    },
    {
      id: 2,
      atmName: "ATM 2",
      vendor: "Vendor 2",
      sourceInstitution: "Source Institution 2",
      sourceBranch: "Source Branch 2",
      sourceATM: "Source ATM 2",
      startTime: "10:00",
      endTime: "19:00",
    },
  ],
  branch2: [
    {
      id: 3,
      atmName: "ATM 3",
      vendor: "Vendor 3",
      sourceInstitution: "Source Institution 3",
      sourceBranch: "Source Branch 3",
      sourceATM: "Source ATM 3",
      startTime: "08:00",
      endTime: "17:00",
    },
    {
      id: 4,
      atmName: "ATM 4",
      vendor: "Vendor 4",
      sourceInstitution: "Source Institution 4",
      sourceBranch: "Source Branch 4",
      sourceATM: "Source ATM 4",
      startTime: "09:30",
      endTime: "18:30",
    },
  ],
  branch3: [
    {
      id: 5,
      atmName: "ATM 5",
      vendor: "Vendor 5",
      sourceInstitution: "Source Institution 5",
      sourceBranch: "Source Branch 5",
      sourceATM: "Source ATM 5",
      startTime: "07:30",
      endTime: "16:30",
    },
    {
      id: 6,
      atmName: "ATM 6",
      vendor: "Vendor 6",
      sourceInstitution: "Source Institution 6",
      sourceBranch: "Source Branch 6",
      sourceATM: "Source ATM 6",
      startTime: "08:30",
      endTime: "17:30",
    },
  ],
};

function Definition() {
  const [selectedInstitution, setSelectedInstitution] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedATM, setSelectedATM] = useState(null);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const handleInstitutionChange = (selectedOption) => {
    setSelectedInstitution(selectedOption);
    setSelectedBranch(null); // Reset selected branch when institution changes
    setSelectedATM(null); // Reset selected ATM when institution changes
  };

  const handleBranchChange = (selectedOption) => {
    setSelectedBranch(selectedOption);
    setSelectedATM(null); // Reset selected ATM when branch changes
  };

  const handleATMChange = (selectedOption) => {
    setSelectedATM(selectedOption);
  };

  const handleRecordsPerPageChange = (selectedOption) => {
    setRecordsPerPage(selectedOption.value);
  };

  // Get branch options based on selected institution
  const branchOptions = selectedInstitution ? branches : [];

  // Get ATM options based on selected branch
  const atmOptions = selectedBranch ? atmsData[selectedBranch.value] : [];

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title-header">ATM Definition</h1>
        <div className="select-container">
          <Select
            value={selectedInstitution}
            onChange={handleInstitutionChange}
            options={institutions}
            placeholder="Select an institution"
          />
          <Select
            value={selectedBranch}
            onChange={handleBranchChange}
            options={branchOptions}
            placeholder="Select a branch"
          />
          <Select
            value={selectedATM}
            onChange={handleATMChange}
            options={atmOptions}
            placeholder="Select an ATM"
            getOptionLabel={(option) => (option ? option.atmName : "")} // Display ATM name
          />
          <Select
            value={{
              value: recordsPerPage,
              label: `${recordsPerPage} per page`,
            }}
            onChange={handleRecordsPerPageChange}
            options={[
              { value: 10, label: "10 per page" },
              { value: 20, label: "20 per page" },
              { value: 50, label: "50 per page" },
              { value: 80, label: "80 per page" },
              { value: 100, label: "100 per page" },
            ]}
            placeholder="Records per page"
          />
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Branch</th>
              <th>ATM Name</th>
              <th>Vendor</th>
              <th>Source Institution</th>
              <th>Source Branch</th>
              <th>Source ATM</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
          </thead>
          <tbody>
            {selectedATM && (
              <tr>
                <td>{selectedBranch.label}</td>
                <td>{selectedATM.atmName}</td>
                <td>{selectedATM.vendor}</td>
                <td>{selectedATM.sourceInstitution}</td>
                <td>{selectedATM.sourceBranch}</td>
                <td>{selectedATM.sourceATM}</td>
                <td>{selectedATM.startTime}</td>
                <td>{selectedATM.endTime}</td>
              </tr>
            )}
          </tbody>
        </table>

        <Link to="/addATM">
          <button className="addButton">Add ATM</button>
        </Link>
      </div>
    </div>
  );
}

export default Definition;
