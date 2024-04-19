import React, { useState } from 'react';
import "./styles.css";

function TableRow({ index, handleInputChange, handleTimeChange, handleDropdownChange }) {
  const [textValue, setTextValue] = useState('');
  const [timeValue, setTimeValue] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
    handleInputChange(index, e.target.value);
  };

  const handleTimeInputChange = (e) => {
    setTimeValue(e.target.value);
    handleTimeChange(index, e.target.value);
  };

  const handleSelectChange = (e) => {
    setDropdownValue(e.target.value);
    handleDropdownChange(index, e.target.value);
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          value={textValue}
          onChange={handleTextChange}
        />
      </td>
      <td>
        <input
          type="time"
          value={timeValue}
          onChange={handleTimeInputChange}
        />
      </td>
      <td>
        <select value={dropdownValue} onChange={handleSelectChange}>
          <option value="">Select an option</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </td>
    </tr>
  );
}

function JobCutoffTable() {
  const [rows, setRows] = useState([]);

  const handleInputChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].text = value;
    setRows(updatedRows);
  };

  const handleTimeChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].time = value;
    setRows(updatedRows);
  };

  const handleDropdownChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].dropdown = value;
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows([...rows, { text: '', time: '', dropdown: '' }]);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Institution</th>
            <th>Cutoff Time</th>
            <th>Process Flag</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              index={index}
              handleInputChange={handleInputChange}
              handleTimeChange={handleTimeChange}
              handleDropdownChange={handleDropdownChange}
            />
          ))}
        </tbody>
      </table>
      <button className="save-button" onClick={handleAddRow}>Add Row</button>
    </div>
  );
}

export default JobCutoffTable;
