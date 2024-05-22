import React, { useState } from "react";

const Users = () => {
  const [isAddingUser, setIsAddingUser] = useState(false);
  const handleAdd = () => {
    // Assuming you have a state variable for the users data and a function to update it, let's call it setUsersData
    setIsAddingUser(true);
    const newUserData = {
      userId: "", // Initially empty for the new user
      userName: "", // Initialize other fields as needed
      defaultRole: "",
      defaultSite: "",
      module: "",
      defaultPage: "",
      mobileNum: "",
      email: "",
      password: "",
      confirmPassword: "",
      passwordExpiry: "",
      accountLocked: false,
      changePasswordNextLogon: false,
      userBelongsToBranch: false,
    };
  };

  const [formData, setFormData] = useState({
    institution: "",
    userId: "",
    userName: "",
    defaultRole: "",
    defaultSite: "",
    module: "",
    defaultPage: "",
    mobileNum: "",
    email: "",
    password: "",
    confirmPassword: "",
    passwordExpiry: 180,
    accountLocked: false,
    changePasswordNextLogon: false,
    userBelongsToBranch: false,
  });

  // Dummy data for dropdown options
  const institutions = [
    { value: "institution1", label: "Institution 1" },
    { value: "institution2", label: "Institution 2" },
    { value: "institution3", label: "Institution 3" },
  ];

  const roles = [
    { value: "role1", label: "Role 1" },
    { value: "role2", label: "Role 2" },
    { value: "role3", label: "Role 3" },
  ];

  const sites = [
    { value: "site1", label: "Site 1" },
    { value: "site2", label: "Site 2" },
    { value: "site3", label: "Site 3" },
  ];

  const modules = [
    { value: "module1", label: "Module 1" },
    { value: "module2", label: "Module 2" },
    { value: "module3", label: "Module 3" },
  ];

  const pages = [
    { value: "page1", label: "Page 1" },
    { value: "page2", label: "Page 2" },
    { value: "page3", label: "Page 3" },
  ];

  // Dummy data for user IDs
  const userIds = [
    { value: "user1", label: "User 1" },
    { value: "user2", label: "User 2" },
    { value: "user3", label: "User 3" },
  ];
  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title-header">Users</h1>
        <div className="container">
          <div className="inline-div">
            <label htmlFor="institution">Institution:</label>
            <select
              id="institution"
              value={formData.institution}
              onChange={handleInputChange}
            >
              <option value="">Select an institution</option>
              {institutions.map((institution) => (
                <option key={institution.value} value={institution.value}>
                  {institution.label}
                </option>
              ))}
            </select>
          </div>
          <div className="inline-div">
            <label htmlFor="userId">User ID:</label>
            {isAddingUser ? (
              <input
                type="text"
                id="userId"
                value={formData.userId}
                required
              />
            ) : (
              <select
                id="userId"
                value={formData.userId}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a user ID</option>
                {userIds.map((userId) => (
                <option key={userId.value} value={userId.value}>
                  {userId.label}
                </option>
              ))}
              </select>
            )}
          </div>
          <div className="inline-div">
            <label htmlFor="userName">User Name:</label>
            <input type="text" id="userName" />
          </div>
          <div className="inline-div">
            <label htmlFor="defaultRole">Default Role:</label>
            <select
              id="defaultRole"
              value={formData.defaultRole}
              onChange={handleInputChange}
            >
              <option value="">Select a role</option>
              {roles.map((defaultRole) => (
                <option key={defaultRole.value} value={defaultRole.value}>
                  {defaultRole.value}
                </option>
              ))}
            </select>
          </div>
          <div className="inline-div">
            <label htmlFor="defaultSite">Default Site:</label>
            <select
              id="defaultSite"
              value={formData.defaultSite}
              onChange={handleInputChange}
            >
              <option value="">Select a role</option>
              {sites.map((defaultSite) => (
                <option key={defaultSite.value} value={defaultSite.value}>
                  {defaultSite.value}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label htmlFor="module">Module:</label>
            <select
              id="module"
              value={formData.module}
              onChange={handleInputChange}
            >
              <option value="">Select a module</option>
              {modules.map((module) => (
                <option key={module.value} value={module.value}>
                  {module.value}
                </option>
              ))}
            </select>
          </div>
          <div className="inline-div">
            <label htmlFor="defaultPage">Default edesk Page:</label>
            <select
              id="defaultPage"
              value={formData.defaultPage}
              onChange={handleInputChange}
            >
              <option value="">Select a page</option>
              {pages.map((defaultPage) => (
                <option key={defaultPage.value} value={defaultPage.value}>
                  {defaultPage.value}
                </option>
              ))}
            </select>
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
          <button className="addButton" onClick={handleAdd}>
            Add
          </button>
          <button className="addButton">Save</button>
          <button className="cancel-button">Delete</button>
          <button className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Users;
