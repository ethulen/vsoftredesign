import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const ConsolidationSchedules = ({ initialData }) => {
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
  const [selectedDay, setSelectedDay] = useState("");

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  return (
    <div className="branch-group">
      <div className="form-container">
        <h1 className="title-header">Consolidation Schedules</h1>
        <div className="button-row">
          <div>
            <input
              type="radio"
              id="monday"
              name="day"
              value="Monday"
              checked={selectedDay === "Monday"}
              onChange={handleDayChange}
            />
            <label htmlFor="monday">Monday</label>
          </div>
          <div>
            <input
              type="radio"
              id="tuesday"
              name="day"
              value="Tuesday"
              checked={selectedDay === "Tuesday"}
              onChange={handleDayChange}
            />
            <label htmlFor="tuesday">Tuesday</label>
          </div>
          <div>
            <input
              type="radio"
              id="wednesday"
              name="day"
              value="Wednesday"
              checked={selectedDay === "Wednesday"}
              onChange={handleDayChange}
            />
            <label htmlFor="wednesday">Wednesday</label>
          </div>
          <div>
            <input
              type="radio"
              id="thursday"
              name="day"
              value="Thursday"
              checked={selectedDay === "Thursday"}
              onChange={handleDayChange}
            />
            <label htmlFor="thursday">Thursday</label>
          </div>
          <div>
            <input
              type="radio"
              id="friday"
              name="day"
              value="Friday"
              checked={selectedDay === "Friday"}
              onChange={handleDayChange}
            />
            <label htmlFor="friday">Friday</label>
          </div>
          <div>
            <input
              type="radio"
              id="saturday"
              name="day"
              value="Saturday"
              checked={selectedDay === "Saturday"}
              onChange={handleDayChange}
            />
            <label htmlFor="saturday">Saturday</label>
          </div>
          <div>
            <input
              type="radio"
              id="sunday"
              name="day"
              value="Sunday"
              checked={selectedDay === "Sunday"}
              onChange={handleDayChange}
            />
            <label htmlFor="sunday">Sunday</label>
          </div>
          <p>Selected Day: {selectedDay}</p>
        </div>

        <div style={{ width: "100%", marginBottom: "20px" }}>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Hour:Minute</th>
                  <th>Action</th>
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
                  </tr>
                ))}
              </tbody>
            </table>
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
}

export default ConsolidationSchedules;
