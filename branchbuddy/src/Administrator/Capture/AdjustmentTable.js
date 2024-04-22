import React, { useState } from "react";

function TableRow({
  index,
  handleInputChange,
  handleDropdownChange,
  handleCheckboxChange,
}) {
  const [adjustmentOption, setAdjustmentOption] = useState("");
  const [annotation, setAnnotation] = useState("");
  const [adjustmentTemplate, setAdjustmentTemplate] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleAdjustmentOptionChange = (e) => {
    setAdjustmentOption(e.target.value);
    handleInputChange(index, 1, e.target.value);
  };

  const handleAnnotationChange = (e) => {
    setAnnotation(e.target.value);
    handleInputChange(index, 2, e.target.value);
  };

  const handleSelectChange = (e) => {
    setAdjustmentTemplate(e.target.value);
    handleDropdownChange(index, e.target.value);
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
          value={adjustmentOption}
          onChange={handleAdjustmentOptionChange}
          disabled={!isChecked}
        />
      </td>
      <td>
        <select
          value={adjustmentTemplate}
          onChange={handleSelectChange}
          disabled={!isChecked}
        >
          <option value="">Select an option</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </td>
      <td>
        <input
          type="text"
          value={annotation}
          onChange={handleAnnotationChange}
          disabled={!isChecked}
        />
      </td>
    </tr>
  );
}

function AdjustmentTable({ index }) {
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
    const [isChecked, setIsChecked] = useState(false); // Initialize isChecked state
  
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
      setRows([...rows, { text1: "", dropdown: "", text2: "", isChecked: false }]); // Add isChecked to new row
    };
    const handleCheckbox = () => {
      setIsChecked(!isChecked);
      handleCheckboxChange(index, !isChecked);
    };
  
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th />
              <th>Adjustment Option</th>
              <th>Adjustment Template</th>
              <th>Annotation</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                index={index}
                disabled={!isChecked}
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
  

export default AdjustmentTable;
