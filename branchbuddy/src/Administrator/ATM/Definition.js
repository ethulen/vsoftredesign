// ATMsPage.js
import React, { useState } from "react";
import Select from "react-select";

// Dummy data for branches and ATMs
const branches = [
  { value: "branch1", label: "Branch 1" },
  { value: "branch2", label: "Branch 2" },
  { value: "branch3", label: "Branch 3" }
];

const atmsData = {
  branch1: [
    { id: 1, atmName: "ATM 1", vendor: "Vendor 1", sourceInstitution: "Source Institution 1", sourceBranch: "Source Branch 1", sourceATM: "Source ATM 1", startTime: "09:00", endTime: "18:00" },
    { id: 2, atmName: "ATM 2", vendor: "Vendor 2", sourceInstitution: "Source Institution 2", sourceBranch: "Source Branch 2", sourceATM: "Source ATM 2", startTime: "10:00", endTime: "19:00" }
  ],
  branch2: [
    { id: 3, atmName: "ATM 3", vendor: "Vendor 3", sourceInstitution: "Source Institution 3", sourceBranch: "Source Branch 3", sourceATM: "Source ATM 3", startTime: "08:00", endTime: "17:00" },
    { id: 4, atmName: "ATM 4", vendor: "Vendor 4", sourceInstitution: "Source Institution 4", sourceBranch: "Source Branch 4", sourceATM: "Source ATM 4", startTime: "09:30", endTime: "18:30" }
  ],
  branch3: [
    { id: 5, atmName: "ATM 5", vendor: "Vendor 5", sourceInstitution: "Source Institution 5", sourceBranch: "Source Branch 5", sourceATM: "Source ATM 5", startTime: "07:30", endTime: "16:30" },
    { id: 6, atmName: "ATM 6", vendor: "Vendor 6", sourceInstitution: "Source Institution 6", sourceBranch: "Source Branch 6", sourceATM: "Source ATM 6", startTime: "08:30", endTime: "17:30" }
  ]
};

function ATMsPage() {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [atms, setATMs] = useState([]);

  const handleChange = selectedOption => {
    setSelectedBranch(selectedOption);
    setATMs(atmsData[selectedOption.value]);
  };

  return (
    <div>
      <h1>ATMs List</h1>
      <Select
        value={selectedBranch}
        onChange={handleChange}
        options={branches}
        placeholder="Select a branch"
      />
      <table>
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
          {atms.map(atm => (
            <tr key={atm.id}>
              <td>{selectedBranch.label}</td>
              <td>{atm.atmName}</td>
              <td>{atm.vendor}</td>
              <td>{atm.sourceInstitution}</td>
              <td>{atm.sourceBranch}</td>
              <td>{atm.sourceATM}</td>
              <td>{atm.startTime}</td>
              <td>{atm.endTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ATMsPage;
