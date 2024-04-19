import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function ReviewThreshold() {
  // State for selected bank
  const [selectedBank, setSelectedBank] = useState("");
  
  // State for ATM documents
  const [ATMDocuments, setATMDocuments] = useState([]);
  
  // State for loading status
  const [loading, setLoading] = useState(false);
  
  // Function to handle bank selection
  const handleBankSelect = (event) => {
    setSelectedBank(event.target.value);
  };

  // Function to fetch ATM documents based on selected bank
  const fetchATMDocuments = async (bank) => {
    setLoading(true);
    try {
      // Mocked ATM documents for demonstration
      const documents = [
        { reviewDescription: "Document 1", checkAmount: "$100", depositItemCount: 5, depositAmount: "$500" },
        { reviewDescription: "Document 2", checkAmount: "$150", depositItemCount: 3, depositAmount: "$450" },
        { reviewDescription: "Document 3", checkAmount: "$200", depositItemCount: 7, depositAmount: "$1400" }
      ];
      setATMDocuments(documents);
    } catch (error) {
      console.error("Error fetching ATM documents:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch ATM documents when the selected bank changes
  useEffect(() => {
    if (selectedBank) {
      fetchATMDocuments(selectedBank);
    }
  }, [selectedBank]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Review Threshold</h1>
      {/* Dropdown to choose a bank */}
      <div>
        <label htmlFor="bankSelect">Choose a bank:</label>
        <select id="bankSelect" value={selectedBank} onChange={handleBankSelect}>
          <option value="">Select a bank</option>
          <option value="bank1">Bank 1</option>
          <option value="bank2">Bank 2</option>
          {/* Add more options for other banks */}
        </select>
      </div>
      
      {/* Loading indicator */}
      {loading && <p>Loading...</p>}
      
      {/* Table to display ATM documents */}
      <table>
        <thead>
          <tr>
            <th>Review Description</th>
            <th>Check Amount</th>
            <th>Deposit Item Count</th>
            <th>Deposit Amount</th>
          </tr>
        </thead>
        <tbody>
          {ATMDocuments.map((document, index) => (
            <tr key={index}>
              <td>{document.reviewDescription}</td>
              <td>{document.checkAmount}</td>
              <td>{document.depositItemCount}</td>
              <td>{document.depositAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/addReviewThreshold">
        <button className="addButton">Add</button>
      </Link>
    </div>
  );
}

export default ReviewThreshold;
