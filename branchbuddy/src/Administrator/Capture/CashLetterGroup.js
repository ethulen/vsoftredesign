import React, { useState } from 'react';
import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./captureStyles.css";

function CashLetterGroup() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptionsRight, setSelectedOptionsRight] = useState([]);
  const options = [
    { value: '1', label: 'Columns1/elements1' },
    { value: '2', label: 'Columns2/elements2' },
    { value: '3', label: 'Columns3/elements3' },
    { value: '4', label: 'Columns4/elements4' },
  ];

  const handleSelect = (event) => {
    const selectedValues = event.target.selectedOptions ? Array.from(event.target.selectedOptions, (option) => option.value) : [];
    setSelectedOptions(selectedValues);
  };
  
  const handleSelectRight = (event) => {
    const selectedValues = event.target.selectedOptions ? Array.from(event.target.selectedOptions, (option) => option.value) : [];
    setSelectedOptionsRight(selectedValues);
  };  

  const handleMoveAllToRight = () => {
    setSelectedOptionsRight(options.map(option => option.value));
  };

  const handleMoveSelectedToRight = () => {
    const newOptions = options.filter(option => !selectedOptions.includes(option.value));
    setSelectedOptionsRight(prevState => [...prevState, ...newOptions.map(option => option.value)]);
  };

  const handleMoveSelectedToLeft = () => {
    setSelectedOptionsRight(prevState => prevState.filter(option => !selectedOptionsRight.includes(option)));
  };

  const handleMoveAllToLeft = () => {
    setSelectedOptionsRight([]);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title-header">Cash Letter Group</h1>
        <Row>
          <Col>
            <ListGroup>
              {options.map(option => (
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
              {options.map(option => (
                <ListGroup.Item key={option.value} onClick={handleSelectRight}>
                  {option.label}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CashLetterGroup;
