import React, { useState } from "react";

function TableRow({
    index,
    handleInputChange,
    handleCheckboxChange,
  }) {
    const [codeNumber, setCodeNumber] = useState("");
    const [codeDescription, setCodeDescription] = useState("");
    const [isChecked, setIsChecked] = useState(false);
  
    const handleCodeNumberChange = (e) => {
      setCodeNumber(e.target.value);
      handleInputChange(index, 1, e.target.value);
    };
  
    const handleCodeDescriptionChange = (e) => {
      setCodeDescription(e.target.value);
      handleInputChange(index, 2, e.target.value);
    };
  
    const handleCheckbox = () => {
      setIsChecked(!isChecked);
      handleCheckboxChange(index, !isChecked);
    };
  
    return (
      <tr>
        <td>
          <input type="checkbox" checked={isChecked} onChange={handleCheckbox} />
        </td>
        <td>
          <input
            type="text"
            value={codeNumber}
            onChange={handleCodeNumberChange}
          />
        </td>
        <td>
          <input
            type="text"
            value={codeDescription}
            onChange={handleCodeDescriptionChange}
          />
        </td>
      </tr>
    );
  }
  
  function ApplicationCodeTable() {
    const [rows, setRows] = useState([
      {
        text1: "Row 1 Text 1",
        dropdown: "Option 1",
        text2: "Row 1 Text 2",
        isChecked: false,
      },
      {
        text1: "Row 2 Text 1",
        dropdown: "Option 2",
        text2: "Row 2 Text 2",
        isChecked: false,
      },
      // Add more rows as needed
    ]);
  
    const handleInputChange = (index, field, value) => {
      const updatedRows = [...rows];
      updatedRows[index][`text${field}`] = value;
      setRows(updatedRows);
    };
  
    const handleDropdownChange = (index, value) => {
      const updatedRows = [...rows];
      updatedRows[index].dropdown = value;
      setRows(updatedRows);
    };
  
    const handleCheckboxChange = (index, isChecked) => {
      const updatedRows = [...rows];
      updatedRows[index].isChecked = isChecked;
      setRows(updatedRows);
    };
  
    const handleAddRow = () => {
      setRows([...rows, { text1: "", dropdown: "", text2: "" }]);
    };
  
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th />
              <th>Code Description</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                index={index}
                handleInputChange={handleInputChange}
                handleDropdownChange={handleDropdownChange}
                handleCheckboxChange={handleCheckboxChange}
              />
            ))}
          </tbody>
        </table>
        <button className="addButton" onClick={handleAddRow}>
          Add Row
        </button>
      </div>
    );
  }
  
  export default ApplicationCodeTable;
  