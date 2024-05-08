import React, {useState} from "react";
import axios from "axios";

const Site = () => {
  const [site, setSite] = useState("");
  const [siteType, setSiteType] = useState("");
  const [siteDescription, setSiteDescription] = useState("");
  const [inputPath, setInputPath] = useState("");
  const [archivePath, setArchivePath] = useState("");
  const [outputPath, setOutputPath] = useState("");
  const [temporaryPath, setTemporaryPath] = useState("");
  const [offlineArchivePath, setOfflineArchivePath] = useState("");
  const [favoritesPath, setFavoritesPath] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [backupIndicator, setBackupIndicator] = useState("");
  const [siteComingled, setSiteCommingled] = useState("");
  const [supportedCashLetterTypes, setSupportedCashLetterTypes] = useState("");
  const handleSave = () => {
    // Prepare configuration data
    const configuration = {
      site,
      siteType,
      siteDescription,
      inputPath,
      archivePath,
      outputPath,
      temporaryPath,
      offlineArchivePath,
      favoritesPath,
      address,
      city,
      zip,
      phone,
      backupIndicator,
      siteComingled,
      supportedCashLetterTypes,
      // Include other form field values here
    };

    // Send POST request to backend
    axios
      .post("/api/saveConfiguration", configuration)
      .then((response) => {
        console.log(response.data);
        // Optionally, you can navigate to another page or display a success message
      })
      .catch((error) => {
        console.error("Error saving configuration:", error);
      });
  };
  const handleCancel = () => {
    // Reset form values to default
    setSite("");
    setSiteType("");
    setSiteDescription("");
    setInputPath("");
    setArchivePath("");
    setOutputPath("");
    setTemporaryPath("");
    setOfflineArchivePath("");
    setFavoritesPath("");
    setAddress("");
    setCity("");
    setZip("");
    setPhone("");
    setBackupIndicator("");
    setSiteCommingled("");
    setSupportedCashLetterTypes("");
    // Reset other form field values here
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
          <div className="container">
            <div className="inline-div">
              <label htmlFor="city">City:</label>
              <input type="text" id="city" />
            </div>
            <div className="inline-div">
              <label htmlFor="state">State:</label>
              <input type="text" id="state" />
            </div>
            <div className="inline-div">
              <label htmlFor="zip">Zip:</label>
              <input type="text" id="zip" />
            </div>
          </div>
          <div className="container">
            <div className="inline-div">
              <label htmlFor="phone">Phone:</label>
              <input type="text" id="phone" />
            </div>
            <div className="inline-div">
              <label htmlFor="backupIndicator">Backup Indicator:</label>
              <select id="backupIndicator">
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
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
            <button className="addButton" onClick={handleCancel}>Add</button>
            <button className="addButton" onClick={handleSave}>Save</button>
            <button className="cancel-button">Delete</button>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Site;
