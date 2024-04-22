import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./captureStyles.css";

function ProfileForm() {
  const [profileId, setProfileId] = useState("");
  const [profileName, setProfileName] = useState("");
  const [cashLetterType, setCashLetterType] = useState("");
  const [profileType, setProfileType] = useState("");
  const [isATMProfile, setIsATMProfile] = useState(false);

  const handleProfileIdChange = (e) => {
    setProfileId(e.target.value);
  };

  const handleProfileNameChange = (e) => {
    setProfileName(e.target.value);
  };

  const handleCashLetterTypeChange = (e) => {
    setCashLetterType(e.target.value);
  };

  const handleProfileTypeChange = (e) => {
    setProfileType(e.target.value);
  };

  const handleATMProfileChange = (e) => {
    setIsATMProfile(e.target.checked);
  };

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1); // Navigate back to previous page
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title-header">ECL Profiles</h1>
        <div>
          <label htmlFor="profileId">Profile ID:</label>
          <select
            id="profileId"
            value={profileId}
            onChange={handleProfileIdChange}
          >
            {/* Add options for Profile ID dropdown */}
          </select>
        </div>
        <div>
          <label htmlFor="profileName">Profile Name:</label>
          <input
            type="text"
            id="profileName"
            value={profileName}
            onChange={handleProfileNameChange}
          />
        </div>
        <div>
          <label htmlFor="cashLetterType">Cash Letter Type:</label>
          <select
            id="cashLetterType"
            value={cashLetterType}
            onChange={handleCashLetterTypeChange}
          >
            {/* Add options for Cash Letter Type dropdown */}
          </select>
        </div>
        <div>
          <label htmlFor="profileType">Profile Type:</label>
          <select
            id="profileType"
            value={profileType}
            onChange={handleProfileTypeChange}
          >
            {/* Add options for Profile Type dropdown */}
          </select>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              id="atmProfile"
              checked={isATMProfile}
              onChange={handleATMProfileChange}
            />
            ATM Profile
          </label>
        </div>

        <table>
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Test Mode</td>
              <td>
                <select>
                  <option>Live</option>
                  <option>Test</option>
                  {/* Add more options as needed */}
                </select>
              </td>
            </tr>
            <tr>
              <td>File Path *</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>FED Routing *</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>Electronic Return Acceptance *</td>
              <td>
                <select>
                  <option>
                    Will accept final return notifications and image returns
                  </option>
                  <option>Will accept final return notifications only</option>
                  <option>Will accept image returns only</option>
                  <option>
                    Will accept preliminary return notifications and final
                    return notifications
                  </option>
                  <option>
                    Will accept preliminary return notifications and image
                    returns
                  </option>
                  {/* Add more options as needed */}
                </select>
              </td>
            </tr>
            <tr>
              <td>Archive Type *</td>
              <td>
                <select>
                  <option>Electronic</option>
                  <option>Check</option>
                  <option>Instrument</option>
                  <option>Image</option>
                  <option>...</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Contact Name *</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>Contact Phone *</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>Settlement Days *</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>Onus Ind *</td>
              <td>
                <select>
                  <option>Onus</option>
                  <option>Onus + Transit</option>
                  {/* Add more options as needed */}
                </select>
              </td>
            </tr>
            <tr>
              <td>Cr Ind *</td>
              <td>
                <select>
                  <option>Credits</option>
                  <option>Credits + Debits</option>
                  {/* Add more options as needed */}
                </select>
              </td>
            </tr>
            <tr>
              <td>FED Name *</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>Include Rejects *</td>
              <td>
                <select>
                  <option>No</option>
                  <option>Yes</option>
                  {/* Add more options as needed */}
                </select>
              </td>
            </tr>
            <tr>
              <td>FED Origin Routing *</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>FED Origin Name *</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>Include IA Results *</td>
              <td>
                <select>
                  <option>Do Not Include</option>
                  <option>Include</option>
                  {/* Add more options as needed */}
                </select>
              </td>
            </tr>
            <tr>
              <td>User Institution RT as ECE RT *</td>
              <td>
                <select>
                  <option>Include Inst RT as ECE RT</option>
                  <option>User Origin RT from profile as ECE RT</option>
                  {/* Add more options as needed */}
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="button-row">
          <Link to="/addBlockRangeDefinition">
            <button className="addButton">Add Profile</button>
          </Link>
          <Link to="/addBlockRangeDefinition">
            <button className="addButton">Add Parameter</button>
          </Link>
          <Link to="/saveBlockRangeDefinition">
            <button className="addButton">Save</button>
          </Link>
          <Link to="/deleteBlockRangeDefinition">
            <button className="cancel-button">Delete Profile</button>
          </Link>
          <Link to="/deleteBlockRangeDefinition">
            <button className="cancel-button">Delete Parameter</button>
          </Link>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;
