import React from "react";
import { useNavigate } from "react-router-dom";

const ResetUserSettings = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1); // Navigate back to previous page
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title-header">Reset User Settings</h1>
        <div className="container">
          <div className="inline-div">
            <label htmlFor="institution">Institution:</label>
            <select id="institution">{/* Options for institutions */}</select>
          </div>
          <div className="inline-div">
            <label htmlFor="user">User:</label>
            <select id="user">{/* Options for users */}</select>
          </div>
          <div className="inline-div">
            <label htmlFor="changePassword">Change Password</label>
            <input type="password" id="changePassword" />
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label htmlFor="reEnterPassword">Re-Enter Password</label>
            <input type="password" id="reEnterPassword" />
          </div>
          <div className="inline-div">
            <label htmlFor="roleId">Role ID:</label>
            <input type="text" id="roleId" />
          </div>
          <div className="inline-div">
            <label htmlFor="roleName">Role Name:</label>
            <input type="text" id="roleName" />
          </div>
        </div>
        <div className="container">
          <div className="inline-div checkbox-section">
            <input type="checkbox" id="lockAccount" />
            <label htmlFor="lockAccount">Lock Account</label>
          </div>
          <div className="inline-div checkbox-section">
            <input type="checkbox" id="changePasswordNextLogon" />
            <label htmlFor="changePasswordNextLogon">
              Change Password at Next Logon
            </label>
          </div>
          <div className="inline-div checkbox-section">
            <input type="checkbox" id="logoutUser" />
            <label htmlFor="logoutUser">Log Out User</label>
          </div>
        </div>
        <div className="button-row">
          <button className="save-button">Save</button>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetUserSettings;
