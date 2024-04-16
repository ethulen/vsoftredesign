import React, { useState } from "react";
import "./styles.css";

function NewATMForm() {
  // Define state variables for form fields
  const [institution, setInstitution] = useState("");
  const [groupBranch, setGroupBranch] = useState("");
  const [vendor, setVendor] = useState("");
  const [atmName, setATMName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [email, setEmail] = useState("");
  const [locked, setLocked] = useState(false);
  const [review, setReview] = useState("");
  const [eclProfile, setECLProfile] = useState("");
  const [sourceInstitution, setSourceInstitution] = useState("");
  const [sourceBranch, setSourceBranch] = useState("");
  const [sourceATM, setSourceATM] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [glAccount, setGLAccount] = useState("");
  const [includeCashIn, setIncludeCashIn] = useState(false);
  const [includeCashOut, setIncludeCashOut] = useState(false);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data
  };

  return (
    <div className="form-container">
      <h2>ATM Setup Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Institution:
          <select
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
          >
            <option value="">Select Institution</option>
            <option value="institution1">Institution 1</option>
            <option value="institution2">Institution 2</option>
            <option value="institution3">Institution 3</option>
          </select>
        </label>
        <br />
        <label>
          Group/Branch:
          <select
            value={groupBranch}
            onChange={(e) => setGroupBranch(e.target.value)}
          >
            <option value="">Select Group/Branch</option>
            <option value="groupbranch1">Group/Branch 1</option>
            <option value="groupbranch2">Group/Branch 2</option>
            <option value="groupbranch3">Group/Branch 3</option>
          </select>
        </label>
        <br />
        <label>
          Vendor:
          <select value={vendor} onChange={(e) => setVendor(e.target.value)}>
            <option value="">Select Vendor</option>
            <option value="vendor1">Vendor 1</option>
            <option value="vendor2">Vendor 2</option>
            <option value="vendor3">Vendor 3</option>
          </select>
        </label>
        <br />
        <label>
          ATM Name:
          <input
            type="text"
            value={atmName}
            onChange={(e) => setATMName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Address 1:
          <input
            type="text"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
          />
        </label>
        <br />
        <label>
          Address 2:
          <input
            type="text"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Locked:
          <input
            type="checkbox"
            checked={locked}
            onChange={(e) => setLocked(e.target.checked)}
          />
        </label>
        <br />
        <label>
          Review:
          <select value={review} onChange={(e) => setReview(e.target.value)}>
            <option value="">Select Review</option>
            <option value="review1">Review 1</option>
            <option value="review2">Review 2</option>
            <option value="review3">Review 3</option>
          </select>
        </label>
        <br />
        <label>
          ECL Profile:
          <select
            value={eclProfile}
            onChange={(e) => setECLProfile(e.target.value)}
          >
            <option value="">Select ECL Profile</option>
            <option value="eclprofile1">ECL Profile 1</option>
            <option value="eclprofile2">ECL Profile 2</option>
            <option value="eclprofile3">ECL Profile 3</option>
          </select>
        </label>
        <br />
        <label>
          Source Institution:
          <input
            type="text"
            value={sourceInstitution}
            onChange={(e) => setSourceInstitution(e.target.value)}
          />
        </label>
        <br />
        <label>
          Source Branch:
          <input
            type="text"
            value={sourceBranch}
            onChange={(e) => setSourceBranch(e.target.value)}
          />
        </label>
        <br />
        <label>
          Source ATM:
          <input
            type="text"
            value={sourceATM}
            onChange={(e) => setSourceATM(e.target.value)}
          />
        </label>
        <br />
        <label>
          Start Time:
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </label>
        <br />
        <label>
          End Time:
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </label>
        <br />
        <label>
          GL Account For CASH Items:
          <input
            type="text"
            value={glAccount}
            onChange={(e) => setGLAccount(e.target.value)}
          />
        </label>
        <br />
        <label>
          Include Cash_In:
          <input
            type="checkbox"
            checked={includeCashIn}
            onChange={(e) => setIncludeCashIn(e.target.checked)}
          />
        </label>
        <br />
        <label>
          Include Cash_Out:
          <input
            type="checkbox"
            checked={includeCashOut}
            onChange={(e) => setIncludeCashOut(e.target.checked)}
          />
        </label>
        <br />
        <div className="submit-container">
          <button type="save">Save</button>
          <button type="cancel">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default NewATMForm;
