import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function NewReviewThreshold(props) {
  const navigate = useNavigate();
  // Define state variables for form fields
  const [description, setDescription] = useState("");
  const [checkNumber, setCheckNumber] = useState("");
  const [transactionNumber, setTransactionNumber] = useState("");
  const [checkAmount, setCheckAmount] = useState("");
  const [carDiffAmount, setCarDiffAmount] = useState(false);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data
    // Example:
    // Redirect to previous page or any other action
    navigate(-1);
  };

  // Handle cancel button click
  const handleCancel = () => {
    navigate(-1); // Navigate back to previous page
  };
  const { location } = props;
  const { state } = location || {};
  const { institution } = state || {};

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title-header">Review Threshold</h1>
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="inline-div">
              <label htmlFor="institution">Institution:</label>
              <input
                type="text"
                id="institution"
                value={institution || ""} // Use default value if undefined
                readOnly
              />
            </div>
            <div className="inline-div">
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="inline-div">
              <label htmlFor="accountNumber">
                Number of checks equals or exceeds:
              </label>
              <input
                type="text"
                id="accountNumber"
                value={checkNumber}
                onChange={(e) => setCheckNumber(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="container">
            <div className="inline-div">
              <label htmlFor="transactionNumber">
                Transaction amount equals or exceeds:
              </label>
              <input
                type="text"
                id="transactionNumber"
                value={transactionNumber}
                onChange={(e) => setTransactionNumber(e.target.value)}
                required
              />
            </div>
            <div className="inline-div">
              <label htmlFor="checkAmount">
                Any check amount equals or exceeds:
              </label>
              <input
                type="text"
                id="checkAmount"
                value={checkAmount}
                onChange={(e) => setCheckAmount(e.target.value)}
              />
            </div>
            <div className="inline-div">
              <label>
                CAR amount differs from Check amount: 
                <input
                  type="checkbox"
                  checked={carDiffAmount}
                  onChange={(e) => setCarDiffAmount(e.target.checked)}
                />
              </label>
            </div>
          </div>
          <div className="button-row">
            <button className="save-button">Save</button>
            <button className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewReviewThreshold;
