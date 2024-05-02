import React, { useState } from "react";

const SortPattern = () => {
  const [branchIQA, setBranchIQA] = useState(false);
  const [centralSiteIQA, setCentralSiteIQA] = useState(false);
  const [arpFlag, setARPFlag] = useState(false);
  const [endorse, setEndorse] = useState(false);
  const [image, setImage] = useState(false);
  const [rejectAll, setRejectAll] = useState(false);
  const [microfilm, setMicrofilm] = useState(false);
  const [iris, setIris] = useState(false);
  const [creditsFirst, setCreditsFirst] = useState(false);
  const [iclV, setIclV] = useState(false);
  const [excludeSymbols, setExcludeSymbols] = useState(false);
  const [bundleInd, setBundleInd] = useState(false);
  const [currency, setCurrency] = useState(false);
  const [duplicateSortPatternDetectionEnabled, setDuplicateSortPatternDetectionEnabled] =
    useState(false);
  const [stopPayMatchInd, setStopPayMatchInd] = useState(false);
  const [externalAccountConversion, setExternalAccountConversion] =
    useState(false);
  const [duplicateBranchCaptureDetectionEnabled, setDuplicateBranchCaptureDetectionEnabled] =
    useState(false);
  const [adjustmentIndicator, setAdjustmentIndicator] = useState("");
  const [autoAdjustDbThreshold, setAutoAdjustDbThreshold] = useState("");
  const [autoAdjustCrThreshold, setAutoAdjustCrThreshold] = useState("");

  const setDefaults = () => {
    setBranchIQA(false);
    setCentralSiteIQA(false);
    setARPFlag(false);
    setEndorse(false);
    setImage(false);
    setRejectAll(false);
    setMicrofilm(false);
    setIris(false);
    setCreditsFirst(false);
    setIclV(false);
    setExcludeSymbols(false);
    setBundleInd(false);
    setCurrency(false);
    setDuplicateSortPatternDetectionEnabled(false);
    setStopPayMatchInd(false);
    setExternalAccountConversion(false);
    setDuplicateBranchCaptureDetectionEnabled(false);
    setAdjustmentIndicator("");
    setAutoAdjustDbThreshold("");
    setAutoAdjustCrThreshold("");
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="title-header">Parameters</h2>
        <div className="container">
          <div className="inline-div">
            <label>Sort Pattern ID:</label>
            <select>
              <option value="DCI003">DCI003 - ATM - 3</option>
              <option value="DCI007">DCI007 - ATM - 7</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="inline-div">
            <label>Description:</label>
            <textarea></textarea>
          </div>
          <div className="inline-div">
            <label>Institution:</label>
            <select>
              <option value="1">do not use</option>
              <option value="3">003 FNB of Hutchinson</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="inline-div">
            <label>Site ID:</label>
            <select>
              <option value="1">DCI Hutch</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label for="rejectCount">Reject Count:</label>
            <input
              type="number"
              id="rejectCount"
              name="rejectCount"
              min="1"
              max="100"
            />
          </div>
          <div className="inline-div">
            <label for="bundleItemCount">Bundle Item Count:</label>
            <input
              type="number"
              id="bundleItemCount"
              name="bundleItemCount"
              min="1"
              max="250"
            />
          </div>
          <div className="inline-div">
            <label for="pocketCount">Pocket Count:</label>
            <input
              type="number"
              id="pocketCount"
              name="pocketCount"
              min="1"
              max="99"
            />
          </div>
          <div className="inline-div">
            <label>Low Speed Sort Pattern:</label>
            <select>
              <option value="DCI003">DCI003 - ATM - 3</option>
              <option value="DCI007">DCI007 - ATM - 7</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label for="workType">Work Type:</label>
            <select>
              <option value="pod">Proof of Deposit</option>
              <option value="inclearing">inclearing</option>
              <option value="null">null</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="inline-div">
            <label for="conversionSortPattern">Conversion Sort Pattern:</label>
            <select>
              <option value="DCI003">DCI003 - ATM - 3</option>
              <option value="DCI007">DCI007 - ATM - 7</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="inline-div">
            <label for="carLar">CAR/LAR:</label>
            <select>
              <option value="carUsed">CAR used</option>
              <option value="carNotUsed">CAR not used</option>
              <option value="amountEntry">Amount Entry</option>
              <option value="null">null</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="inline-div">
            <label>Auto Research Load to start after:</label>
            <select>
              <option value="capture">Capture</option>
              <option value="balancing">Balancing</option>
              <option value="extraction">Extraction</option>
              <option value="transmission">Transmission</option>
              <option value="never">Never</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label>Balancing Type:</label>
            <select>
              <option value="Default Block Level">Default Block Level</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="inline-div">
            <label>Default Cash Letter Type:</label>
            <select>
              <option value="0">Conventional</option>
              <option value="1">ECL - X9.37(FED)</option>
              <option value="2">ECL - X9.37(ANSI)</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="inline-div">
            <label>Extract ID:</label>
            <select>
              <option value="1">Valley State</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="inline-div">
            <label>Default Currency Code:</label>
            <input type="text" placeholder="Enter currency code" />
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label>Settlement Id:</label>
            <input type="text" placeholder="Enter Settlement Id" />
          </div>
          <div className="inline-div">
            <label>Extraction:</label>
            <select>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="inline-div">
            <label>ECL Profile:</label>
            <select>
              <option value="20">ATM - DCI058</option>
              <option value="22">ATM - DCI232</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="inline-div">
            <label>Virtual Sorter Job Status:</label>
            <select>
              <option value="1">JOB OPEN</option>
              <option value="2">JOB CLOSED</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label>Virtual Sorter Block Status:</label>
            <select>
              <option value="0">CAPTURE IN PROGRESS</option>
              <option value="1">CAPTURE COMPLETED</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="inline-div">
            <label>Virtual Sorter Batch Status:</label>
            <select>
              <option value="-9">ICLV IN PROGRESS</option>
              <option value="-3">IRIS COMPLETE</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="inline-div">
            <label>Endorse ID:</label>
            <select>
              <option value="0">NULL ENDORSEMENT</option>
              <option value="1">Some Endorsement</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="inline-div">
            <label>Insert Credit:</label>
            <select>
              <option value="Y">Yes</option>
              <option value="N">No</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        <h2 className="title-header">Image Analysis Options</h2>
        <div className="container">
          <div className="inline-div">
            <label>
              Branch IQA:
              <input
                type="checkbox"
                checked={branchIQA}
                onChange={() => setBranchIQA(!branchIQA)}
              />
            </label>
          </div>
          <div className="inline-div">
            <label>
              Central Site IQA:
              <input
                type="checkbox"
                checked={centralSiteIQA}
                onChange={() => setCentralSiteIQA(!centralSiteIQA)}
              />
            </label>
          </div>
          <div className="inline-div">
            <label>
              ARP Flag:
              <input
                type="checkbox"
                checked={arpFlag}
                onChange={() => setARPFlag(!arpFlag)}
              />
            </label>
          </div>
          <div className="inline-div">
            <label>Image Usability Type:</label>
            <select>
              <option value="2">OnUs Items</option>
              <option value="3">Transit Items</option>
              <option value="">Null</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="inline-div">
            <label>Image Quality Type:</label>
            <select>
              <option value="1">Transit Items</option>
              <option value="2">OnUs Items</option>
              <option value="">Null</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <h2 className="title-header">Sort Pattern Options</h2>
        <div className="container">
          <div className="inline-div">
            <label>
              Endorse:
              <input
                type="checkbox"
                checked={endorse}
                onChange={() => setEndorse(!endorse)}
              />
            </label>
          </div>
          <div className="inline-div">
            <label>
              Image:
              <input
                type="checkbox"
                checked={image}
                onChange={() => setImage(!image)}
              />
            </label>
          </div>
          <div className="inline-div">
            <label>
              Reject All:
              <input
                type="checkbox"
                checked={rejectAll}
                onChange={() => setRejectAll(!rejectAll)}
              />
            </label>
          </div>
          <div className="inline-div">
            <label>
              Microfilm:
              <input
                type="checkbox"
                checked={microfilm}
                onChange={() => setMicrofilm(!microfilm)}
              />
            </label>
          </div>
          <div className="inline-div">
            <label>
              IRIS:
              <input
                type="checkbox"
                checked={iris}
                onChange={() => setIris(!iris)}
              />
            </label>
          </div>
          <div className="inline-div">
            <label>
              Credits First:
              <input
                type="checkbox"
                checked={creditsFirst}
                onChange={() => setCreditsFirst(!creditsFirst)}
              />
            </label>
          </div>
        </div>
        <div className="container">
          <div className="inline-div">
            <label>
              ICLV:
              <input
                type="checkbox"
                checked={iclV}
                onChange={() => setIclV(!iclV)}
              />
            </label>
          </div>
          <div className="inline-div">
            <label>
              Exclude Symbols:
              <input
                type="checkbox"
                checked={excludeSymbols}
                onChange={() => setExcludeSymbols(!excludeSymbols)}
              />
            </label>
          </div>
          <div className="inline-div">
            <label>
              Bundle Ind:
              <input
                type="checkbox"
                checked={bundleInd}
                onChange={() => setBundleInd(!bundleInd)}
              />
            </label>
          </div>
          <div className="inline-div">
            <label>
              Currency:
              <input
                type="checkbox"
                checked={currency}
                onChange={() => setCurrency(!currency)}
              />
            </label>
          </div>
          <div className="inline-div">
            <label>
              Duplicate Detection Enabled:
              <input
                type="checkbox"
                checked={duplicateSortPatternDetectionEnabled}
                onChange={() =>
                  setDuplicateSortPatternDetectionEnabled(!duplicateSortPatternDetectionEnabled)
                }
              />
            </label>
          </div>
          <div className="inline-div">
            <label>
              Stop Pay Match Ind:
              <input
                type="checkbox"
                checked={stopPayMatchInd}
                onChange={() => setStopPayMatchInd(!stopPayMatchInd)}
              />
            </label>
          </div>
          <div className="inline-div">
            <label>
              External Account Conversion:
              <input
                type="checkbox"
                checked={externalAccountConversion}
                onChange={() =>
                  setExternalAccountConversion(!externalAccountConversion)
                }
              />
            </label>
          </div>
        </div>
        <h2 className="title-header">Branch Capture</h2>
        <div className="container">
          <div>
            <label>
              Duplicate Detection Enabled:
              <input
                type="checkbox"
                checked={duplicateBranchCaptureDetectionEnabled}
                onChange={() =>
                  setDuplicateBranchCaptureDetectionEnabled(!duplicateBranchCaptureDetectionEnabled)
                }
              />
            </label>
          </div>
          <div>
            <label>
              Adjustment Indicator:
              <select
                value={adjustmentIndicator}
                onChange={(e) => setAdjustmentIndicator(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Not Available">Not Available</option>
                <option value="Manual Only">Manual Only</option>
                <option value="All (Manual/Auto)">All (Manual/Auto)</option>
                <option value="Manual/Semi Auto">Manual/Semi Auto</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Auto Adjust Db. Threshold:
              <input
                type="text"
                value={autoAdjustDbThreshold}
                onChange={(e) => setAutoAdjustDbThreshold(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Auto Adjust Cr. Threshold:
              <input
                type="text"
                value={autoAdjustCrThreshold}
                onChange={(e) => setAutoAdjustCrThreshold(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="button-row">
          <button className="addButton" onClick={setDefaults}>Add</button>
          <button className="addButton">Save</button>
          <button className="cancel-button">Delete</button>
          <button className="cancel-button" onClick={setDefaults}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SortPattern;
