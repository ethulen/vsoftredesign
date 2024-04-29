import React, { useState } from "react";

const RolesDefinition = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [description, setDescription] = useState("");
  const [institutionGroup, setInstitutionGroup] = useState("");
  const [concurrentSession, setConcurrentSession] = useState(false);
  const [rdcOptions, setRdcOptions] = useState({
    home: false,
    merchant: false,
    mobile: false,
    mobileMerchant: false,
    mobileAgent: false,
    branch: false,
    mobileBranch: false,
  });
  const [captureDetails, setCaptureDetails] = useState("");
  const [researchOptions, setResearchOptions] = useState({
    editResearchItem: false,
    logMicrRequests: false,
    logImageRequests: false,
    accessToUserSite: false,
    accessToAllSites: false,
    changePriority: false,
  });
  const [researchAccess, setResearchAccess] = useState("");
  const [allowRichClient, setAllowRichClient] = useState(false);
  const [allowIrdPrint, setAllowIrdPrint] = useState(false);
  const [merchantType, setMerchantType] = useState("");

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleInstitutionGroupChange = (e) => {
    setInstitutionGroup(e.target.value);
  };

  const handleConcurrentSessionChange = (e) => {
    setConcurrentSession(e.target.checked);
  };

  const handleRdcOptionChange = (option) => {
    setRdcOptions({ ...rdcOptions, [option]: !rdcOptions[option] });
  };

  const handleCaptureDetailsChange = (e) => {
    setCaptureDetails(e.target.value);
  };

  const handleResearchOptionChange = (option) => {
    setResearchOptions({
      ...researchOptions,
      [option]: !researchOptions[option],
    });
  };

  const handleResearchAccessChange = (e) => {
    setResearchAccess(e.target.value);
  };

  const handleAllowRichClientChange = (e) => {
    setAllowRichClient(e.target.checked);
  };

  const handleAllowIrdPrintChange = (e) => {
    setAllowIrdPrint(e.target.checked);
  };

  const handleMerchantTypeChange = (e) => {
    setMerchantType(e.target.value);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title-header">Roles</h1>
        <div className="container">
          <div className="inline-div">
            <label htmlFor="role">Role:</label>
            <select id="role" value={selectedRole} onChange={handleRoleChange}>
              <option value="">Select A Role</option>
              <option value="8">DCI Operator</option>
              <option value="6">$SYS$</option>
              <option value="1">Select A Role</option>
              <option value="7">Bank Operator</option>
              <option value="9">Admin</option>
              <option value="10">Bank Admin</option>
            </select>
          </div>
          <div className="inline-div">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="inline-div">
            <label htmlFor="institutionGroup">Institution Group:</label>
            <input
              type="text"
              id="institutionGroup"
              value={institutionGroup}
              onChange={handleInstitutionGroupChange}
            />
          </div>
        </div>
        <div className="container">
          <div className="inline-div checkbox-container">
            <label htmlFor="concurrentSession">Concurrent Session:</label>
            <input
              type="checkbox"
              id="concurrentSession"
              checked={concurrentSession}
              onChange={handleConcurrentSessionChange}
            />
          </div>
          <div className="inline-div">
            <label>RDC Options:</label>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="rdcHome"
                checked={rdcOptions.home}
                onChange={() => handleRdcOptionChange("home")}
              />
              <label htmlFor="rdcHome">Home</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="rdcMerchant"
                checked={rdcOptions.merchant}
                onChange={() => handleRdcOptionChange("merchant")}
              />
              <label htmlFor="rdcMerchant">Merchant</label>
            </div>
            {/* Repeat similar divs for other RDC options */}
          </div>
          <div className="inline-div">
            <label htmlFor="captureDetails">Capture Details:</label>
            <input
              type="text"
              id="captureDetails"
              value={captureDetails}
              onChange={handleCaptureDetailsChange}
            />
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label>Research Options:</label>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="researchEditResearchItem"
                checked={researchOptions.editResearchItem}
                onChange={() => handleResearchOptionChange("editResearchItem")}
              />
              <label htmlFor="researchEditResearchItem">
                Edit Research Item
              </label>
            </div>
            {/* Repeat similar divs for other research options */}
          </div>
          <div className="inline-div">
            <label htmlFor="researchAccess">Research Access:</label>
            <input
              type="text"
              id="researchAccess"
              value={researchAccess}
              onChange={handleResearchAccessChange}
            />
          </div>
          <div className="inline-div checkbox-container">
            <label htmlFor="allowRichClient">Allow Rich Client:</label>
            <input
              type="checkbox"
              id="allowRichClient"
              checked={allowRichClient}
              onChange={handleAllowRichClientChange}
            />
          </div>
        </div>
        <div className="container">
          <div className="inline-div checkbox-container">
            <label htmlFor="allowIrdPrint">Allow IRD Print:</label>
            <input
              type="checkbox"
              id="allowIrdPrint"
              checked={allowIrdPrint}
              onChange={handleAllowIrdPrintChange}
            />
          </div>
          <div className="inline-div">
            <label htmlFor="merchantType">Merchant Type:</label>
            <input
              type="text"
              id="merchantType"
              value={merchantType}
              onChange={handleMerchantTypeChange}
            />
          </div>
        </div>
        <div className="button-row">
          <button className="addButton">Save</button>
          <button className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default RolesDefinition;
