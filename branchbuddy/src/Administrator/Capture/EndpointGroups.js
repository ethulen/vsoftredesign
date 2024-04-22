import React, { useState } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const EndpointGroups = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptionsRight, setSelectedOptionsRight] = useState([]);
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1); // Navigate back to previous page
  };
  const options = [
    { value: "1", label: "Columns1/elements1" },
    { value: "2", label: "Columns2/elements2" },
    { value: "3", label: "Columns3/elements3" },
    { value: "4", label: "Columns4/elements4" },
  ];

  const handleSelect = (event) => {
    const selectedValues = event.target.selectedOptions
      ? Array.from(event.target.selectedOptions, (option) => option.value)
      : [];
    setSelectedOptions(selectedValues);
  };

  const handleSelectRight = (event) => {
    const selectedValues = event.target.selectedOptions
      ? Array.from(event.target.selectedOptions, (option) => option.value)
      : [];
    setSelectedOptionsRight(selectedValues);
  };

  const handleMoveAllToRight = () => {
    setSelectedOptionsRight(options.map((option) => option.value));
  };

  const handleMoveSelectedToRight = () => {
    const newOptions = options.filter(
      (option) => !selectedOptions.includes(option.value)
    );
    setSelectedOptionsRight((prevState) => [
      ...prevState,
      ...newOptions.map((option) => option.value),
    ]);
  };

  const handleMoveSelectedToLeft = () => {
    setSelectedOptionsRight((prevState) =>
      prevState.filter((option) => !selectedOptionsRight.includes(option))
    );
  };

  const handleMoveAllToLeft = () => {
    setSelectedOptionsRight([]);
  };
  return (
    <div className="container">
      <div className="form-container">
        <div>
          <h1>Endpoint Groups</h1>
        </div>
        <label></label>
        <br/>
        <div>
          <div>
            <label htmlFor="institution">Institution:</label>
            <select id="institution">
              <option value="1">do not use</option>
              <option value="3">003 FNB of Hutchinson</option>
              <option value="7">007 Peoples Bank & Trust Co</option>
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
          <div>
            <label htmlFor="site">Site:</label>
            <select id="site">
              <option value="1">DCI Hutch</option>
            </select>
          </div>
          <div>
            <label htmlFor="endpointGroup">Endpoint Group:</label>
            <select id="endpointGroup">
              <option value="1">do not use</option>
              <option value="6">DCI</option>
            </select>
          </div>
          <div>
            <label htmlFor="endpointGroupName">Endpoint Group Name:</label>
            <input type="text" id="endpointGroupName" />
          </div>

          <Row>
            <Col>
              <ListGroup>
                {options.map((option) => (
                  <ListGroup.Item key={option.value} onClick={handleSelect}>
                    {option.label}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col className="text-center">
              <Button onClick={handleMoveAllToRight}>Assign All</Button>
              <Button onClick={handleMoveSelectedToRight}>Assign</Button>
              <Button onClick={handleMoveSelectedToLeft}>Remove</Button>
              <Button onClick={handleMoveAllToLeft}>Remove All</Button>
            </Col>
            <Col>
              <ListGroup>
                {options.map((option) => (
                  <ListGroup.Item
                    key={option.value}
                    onClick={handleSelectRight}
                  >
                    {option.label}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </div>
        <div className="button-row">
          <Link to="/addBlockRangeDefinition">
            <button className="addButton">Add</button>
          </Link>
          <Link to="/saveBlockRangeDefinition">
            <button className="addButton">Save</button>
          </Link>
          <Link to="/deleteBlockRangeDefinition">
            <button className="cancel-button">Delete</button>
          </Link>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndpointGroups;
