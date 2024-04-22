import React from "react";
import "./captureStyles.css";

function SettingsTable() {
  const dummySettings = [
    {
      institution: "ABC Bank",
      duplicateItemsEnabled: true,
      daysToLookInArchive: 30,
      daysToLookInArchiveInclearing: 60,
      maxDuplicatesInArchive: 3,
      markAsDuplicateIfReturned: true,
    },
    {
      institution: "XYZ Bank",
      duplicateItemsEnabled: false,
      daysToLookInArchive: 60,
      daysToLookInArchiveInclearing: 90,
      maxDuplicatesInArchive: 5,
      markAsDuplicateIfReturned: false,
    },
    // Add more dummy settings as needed
  ];

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title-header">Cash Letter Group</h1>
        <table>
          <thead>
            <tr>
              <th>Institution</th>
              <th>Duplicate Items Enabled</th>
              <th>Days To Look In Archive</th>
              <th>Days To Look In Archive (Inclearing)</th>
              <th>Max. Duplicates In Archive</th>
              <th>Mark item as duplicate if returned</th>
            </tr>
          </thead>
          <tbody>
            {dummySettings.map((setting, index) => (
              <tr key={index}>
                <td>{setting.institution}</td>
                <td>{setting.duplicateItemsEnabled ? "Yes" : "No"}</td>
                <td>{setting.daysToLookInArchive}</td>
                <td>{setting.daysToLookInArchiveInclearing}</td>
                <td>{setting.maxDuplicatesInArchive}</td>
                <td>{setting.markAsDuplicateIfReturned ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SettingsTable;
