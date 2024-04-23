import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Site = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1); // Navigate back to previous page
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 style={{ width: "100%" }}>Site Configuration</h1>
        <div style={{ width: "100%" }}>
          <div>
            <label htmlFor="site">Site:</label>
            <select id="site">
              <option value="1">DCI Hutch</option>
            </select>
          </div>
          <div>
            <label htmlFor="siteType">Site Type:</label>
            <input type="text" id="siteType" />
          </div>
          <div>
            <label htmlFor="siteDescription">Site Description:</label>
            <input type="text" id="siteDescription" />
          </div>
          <div>
            <label htmlFor="inputPath">Input Path:</label>
            <input type="text" id="inputPath" />
          </div>
          <div>
            <label htmlFor="archivePath">Archive Path:</label>
            <input type="text" id="archivePath" />
          </div>
          <div>
            <label htmlFor="outputPath">Output Path:</label>
            <input type="text" id="outputPath" />
          </div>
          <div>
            <label htmlFor="temporaryPath">Temporary Path:</label>
            <input type="text" id="temporaryPath" />
          </div>
          <div>
            <label htmlFor="offlineArchivePath">Offline Archive Path:</label>
            <input type="text" id="offlineArchivePath" />
          </div>
          <div>
            <label htmlFor="favoritesPath">Favorites Path:</label>
            <input type="text" id="favoritesPath" />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input type="text" id="city" />
            <label htmlFor="state">State:</label>
            <input type="text" id="state" />
            <label htmlFor="zip">Zip:</label>
            <input type="text" id="zip" />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" />
            <label htmlFor="backupIndicator">Backup Indicator:</label>
            <select id="backupIndicator">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div>
            <label htmlFor="siteComingled">Site Comingled:</label>
            <select id="siteComingled">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div>
            <label htmlFor="supportedCashLetterTypes">
              Supported Cash Letter Types:
            </label>
            <select id="supportedCashLetterTypes" multiple>
              <option value="Conventional">Conventional</option>
              <option value="X9.37FED">X9.37FED</option>
              <option value="X9.37ANSI">X9.37ANSI</option>
              <option value="EPX">EPX</option>
              <option value="IRD">IRD</option>
            </select>
          </div>
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
};

export default Site;
