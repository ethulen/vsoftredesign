import React, { useState } from "react";
import JobCutoffTable from "./JobCutoffTable";
import "./styles.css";
import { Link } from "react-router-dom";

function JobCutoffDefinition() {
  return (
    <div className="branch-group">
      <div className="form-container">
        <h1 className="title-header">Job Cutoff Definition</h1>
        <div className="branch-form-group">
          <JobCutoffTable />
        </div>

        <div className="button-row">
          <Link to="/saveBlockRangeDefinition">
            <button className="addButton">Save</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobCutoffDefinition;
