import React, { useState } from "react";

const RolePrivilege = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedObjectType, setSelectedObjectType] = useState("");
  const [selectedDefaultModule, setSelectedDefaultModule] = useState("");
  const [selectedDefaultPage, setSelectedDefaultPage] = useState("");

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleObjectTypeChange = (e) => {
    setSelectedObjectType(e.target.value);
  };

  const handleDefaultModuleChange = (e) => {
    setSelectedDefaultModule(e.target.value);
  };

  const handleDefaultPageChange = (e) => {
    setSelectedDefaultPage(e.target.value);
  };

  return (
    <div className="container">
      <div className="form-container">
      <h1 className="title-header">Role Privilege</h1>
        <div>
          <label htmlFor="role">Role:</label>
          <select id="role" value={selectedRole} onChange={handleRoleChange}>
            <option value="">Select A Role</option>
            <option value="01">01 - Select A Role</option>
            <option value="06">$SYS$ - SYS Bank Operator</option>
            <option value="07">Bank Operator</option>
            <option value="08">DCI Operator</option>
            <option value="09">Admin</option>
            <option value="10">Bank Admin</option>
          </select>
        </div>
        <div>
          <label htmlFor="objectType">Object Types:</label>
          <select
            id="objectType"
            value={selectedObjectType}
            onChange={handleObjectTypeChange}
          >
            <option value="">All objects</option>
            <option value="External Programs">External Programs</option>
            <option value="Web Links">Web Links</option>
          </select>
        </div>
        <div>
          <label htmlFor="defaultModule">Default Module:</label>
          <select
            id="defaultModule"
            value={selectedDefaultModule}
            onChange={handleDefaultModuleChange}
          >
            <option value="">Not defined</option>
            <option value="Operations">Operations</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Reports">Reports</option>
            <option value="Research">Research</option>
          </select>
        </div>
        <div>
          <label htmlFor="defaultPage">Default Page:</label>
          <select
            id="defaultPage"
            value={selectedDefaultPage}
            onChange={handleDefaultPageChange}
          >
            <option value="">Not defined</option>
            <option value="Operations">Operations</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Reports">Reports</option>
            <option value="Research">Research</option>
          </select>
        </div>

        <div>{/* put in table and radio buttons indicating access here */}</div>

        <div className="button-row">
          <button className="addButton">Save</button>
          <button className="cancel-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RolePrivilege;
