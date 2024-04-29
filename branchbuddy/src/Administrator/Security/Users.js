import React from "react";

const Users = () => {
  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title-header">Users</h1>
        <div className="container">
          <div className="inline-div">
            <label htmlFor="institution">Institution:</label>
            <select id="institution">{/* Options for institutions */}</select>
          </div>
          <div className="inline-div">
            <label htmlFor="userId">User ID:</label>
            <select id="userId">{/* Options for user IDs */}</select>
          </div>
          <div className="inline-div">
            <label htmlFor="userName">User Name:</label>
            <input type="text" id="userName" />
          </div>
          <div className="inline-div">
            <label htmlFor="defaultRole">Default Role:</label>
            <select id="defaultRole">{/* Options for default roles */}</select>
          </div>
          <div className="inline-div">
            <label htmlFor="defaultSite">Default Site:</label>
            <select id="defaultSite">{/* Options for default sites */}</select>
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label htmlFor="module">Module:</label>
            <input type="text" id="module" />
          </div>
          <div className="inline-div">
            <label htmlFor="defaultPage">Default edesk Page:</label>
            <input type="text" id="defaultPage" />
          </div>
          <div className="inline-div">
            <label htmlFor="mobileNum">Mobile Num:</label>
            <input type="text" id="mobileNum" />
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label htmlFor="email">EMAIL:</label>
            <input type="email" id="email" />
          </div>
          <div className="inline-div">
            <label htmlFor="password">Enter Password:</label>
            <input type="password" id="password" />
          </div>
          <div className="inline-div">
            <label htmlFor="confirmPassword">Reenter Password:</label>
            <input type="password" id="confirmPassword" />
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label htmlFor="passwordExpiry">Password Expiry Days:</label>
            <input type="number" id="passwordExpiry" />
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="accountLocked" />
            <label htmlFor="accountLocked">Account Locked</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="changePasswordNextLogon" />
            <label htmlFor="changePasswordNextLogon">
              Change password at next logon
            </label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="userBelongsToBranch" />
            <label htmlFor="userBelongsToBranch">User belongs to Branch?</label>
          </div>
        </div>
        <div className="button-row">
          <button className="addButton">Add</button>
          <button className="addButton">Save</button>
          <button className="cancel-button">Delete</button>
          <button className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Users;
