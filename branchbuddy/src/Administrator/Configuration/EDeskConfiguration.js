import React, {useState} from "react";
import axios from "axios";

const EDeskConfiguration = () => {
  const [institution, setInstitution] = useState("");
  const [passwordExpiry, setPasswordExpiry] = useState("");
  const [minPasswordLength, setMinPasswordLength] = useState("");
  const [maxPasswordLength, setMaxPasswordLength] = useState("");
  const [repeatCharacters, setRepeatCharacters] = useState("");
  const [unallowedPasswords, setUnallowedPasswords] = useState("");
  const [lockUnsuccessfulLogins, setLockUnsuccessfulLogins] = useState("");
  const [userInactivityDays, setUserInactivityDays] = useState("");
  const [deleteUser, setDeleteUser] = useState(false);
  const [defaultPasswordExpiryDays, setDefaultPasswordExpiryDays] = useState("");
  const [passwordChangeLimit, setPasswordChangeLimit] = useState("");
  const [specialCharacters, setSpecialCharacters] = useState("");
  const [logonMessage1, setLogonMessage1] = useState("");
  const [logonMessage2, setLogonMessage2] = useState("");
  // Define other state variables for form fields

  const handleSave = () => {
    // Prepare configuration data
    const configuration = {
      institution,
      passwordExpiry,
      minPasswordLength,
      maxPasswordLength,
      repeatCharacters,
      unallowedPasswords,
      lockUnsuccessfulLogins,
      userInactivityDays,
      deleteUser,
      defaultPasswordExpiryDays,
      passwordChangeLimit,
      specialCharacters,
      logonMessage1,
      logonMessage2,
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
    setInstitution("");
    setPasswordExpiry("");
    setMinPasswordLength("");
    setMaxPasswordLength("");
    setRepeatCharacters("");
    setUnallowedPasswords("");
    setLockUnsuccessfulLogins("");
    setUserInactivityDays("");
    setDeleteUser(false);
    setDefaultPasswordExpiryDays("");
    setPasswordChangeLimit("");
    setSpecialCharacters("");
    setLogonMessage1("");
    setLogonMessage2("");
    // Reset other form field values here
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 style={{ width: "100%" }}>eDesk Configuration</h1>
        <div className="container">
          <div className="inline-div">
            <label htmlFor="institution">Institution:</label>
            <select id="institution">
              <option value="00">ALL INSTITUTIONS</option>
              <option value="01">do not use</option>
              <option value="03">003 FNB of Hutchinson</option>
              <option value="07">007 Peoples Bank & Trust Co</option>
              <option value="13">013 KANZA Bank</option>
              <option value="29">029 Fusion Bank</option>
              <option value="43">043 The Citizens State Bank</option>
              <option value="55">055 Southwest National Bank</option>
              <option value="58">058 Valley State Bank</option>
              <option value="74">074 Valley State Bank</option>
              <option value="216">216 PCB Bank</option>
              <option value="232">232 EH National Bank</option>
              <option value="250">250 Gunnison Bank & Trust Co.</option>
              <option value="253">253 Goldwater Bank</option>
              <option value="262">262 Presence Bank</option>
              <option value="275">275 Golden Pacific Bank</option>
              <option value="278">278 Lewis & Clark Bank</option>
              <option value="293">293 Vintage Bank Kansas</option>
              <option value="303">303 TriCounty Trust Company</option>
              <option value="304">304 Movement Bank</option>
              <option value="308">308 Oregon Pacific Bank</option>
              <option value="315">315 Oregon Coast Bank</option>
              <option value="319">319 First Nat Bk of Germantown</option>
              <option value="350">350 BAndera Bank</option>
              <option value="559">559 Johnson City Bank</option>
              <option value="632">632 Farmers & Merchants St Bk</option>
              <option value="808">808 Agility Bank</option>
              <option value="813">813 Heritage Bank</option>
              <option value="814">814 New Horizon Bank</option>
              <option value="820">820 Legacy Bank</option>
              <option value="832">832 Community Bank Delaware</option>
              <option value="922">922 Data Center Inc</option>
            </select>
          </div>
          <div className="inline-div">
            <label htmlFor="passwordExpiry">Password Expiry:</label>
            <select id="passwordExpiry">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="inline-div">
            <label htmlFor="minPasswordLength">Minimum Password Length:</label>
            <input type="text" id="minPasswordLength" />
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label htmlFor="maxPasswordLength">Maximum Password Length:</label>
            <input type="text" id="maxPasswordLength" />
          </div>
          <div className="inline-div">
            <label htmlFor="repeatCharacters">
              No. Of Repeat Characters in password:
            </label>
            <input type="text" id="repeatCharacters" />
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label htmlFor="unallowedPasswords">
              No Of Unallowed Earlier UsedPasswords:
            </label>
            <input type="text" id="unallowedPasswords" />
          </div>
          <div className="inline-div">
            <label htmlFor="lockUnsuccessfulLogins">
              Lock For Unsuccessful Logins:
            </label>
            <input type="text" id="lockUnsuccessfulLogins" />
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label htmlFor="userInactivityDays">
              User Inactivity Days (Delete/Lock):
            </label>
            <input type="text" id="userInactivityDays" />
          </div>
          <div className="inline-div">
            <label htmlFor="deleteUser">Delete User</label>
            <input type="checkbox" id="deleteUser" 
            checked={deleteUser}
            onChange={(e) => setDeleteUser(e.target.value)}/>
          </div>
          <div className="inline-div">
            <label htmlFor="defaultPasswordExpiryDays">
              Default Password Expiry Days:
            </label>
            <input type="text" id="defaultPasswordExpiryDays" />
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label htmlFor="passwordChangeLimit">
              Password Change Limit Per Day:
            </label>
            <input type="text" id="passwordChangeLimit" />
          </div>
          <div className="inline-div">
            <label htmlFor="specialCharacters">
              Special Characters for password:
            </label>
            <input
              type="text"
              id="specialCharacters"
              defaultValue="!@#$%^&;*()[]{};=+_-:&;?/,\~`"
            />
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <label htmlFor="logonMessage1">Logon Message 1:</label>
          <input type="text" id="logonMessage1" />
        </div>
        <div style={{ width: "100%" }}>
          <label htmlFor="logonMessage2">Logon Message 2:</label>
          <input type="text" id="logonMessage2" />
        </div>
        <div className="button-row">
          <button className="addButton" onClick={handleSave}>Save</button>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EDeskConfiguration;
