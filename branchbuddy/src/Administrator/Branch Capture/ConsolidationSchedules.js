import React, { useState } from "react";
import TableInput from "./TableInput";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ConsolidationSchedules() {
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

        <div className="branch-form-group">
          <TableInput headers={["Hour: Minute", "Action"]} />
        </div>

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
  );
}

export default ConsolidationSchedules;
