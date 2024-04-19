import React, { useState } from 'react';
import { Button, Col, FormControl, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SlArrowLeft, SlArrowRight, SlControlForward, SlControlRewind } from "react-icons/sl";

function MultiselectComponent() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptionsRight, setSelectedOptionsRight] = useState([]);
  const options = [
    { value: '1', label: 'Columns1/elements1' },
    { value: '2', label: 'Columns2/elements2' },
    { value: '3', label: 'Columns3/elements3' },
    { value: '4', label: 'Columns4/elements4' },
  ];

  const handleSelect = (event) => {
    const { options } = event.target;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setSelectedOptions(selectedValues);
  };

  const handleSelectRight = (event) => {
    const { options } = event.target;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setSelectedOptionsRight(selectedValues);
  };

  const handleMoveAllToRight = () => {
    setSelectedOptionsRight(options.map(option => option.value));
  };

  const handleMoveSelectedToRight = () => {
    const newOptions = options.filter(option => selectedOptions.indexOf(option.value) === -1);
    setSelectedOptionsRight([...selectedOptionsRight, ...newOptions.map(option => option.value)]);
  };

  const handleMoveSelectedToLeft = () => {
    const newOptions = selectedOptionsRight.filter(option => !options.find(item => item.value === option));
    setSelectedOptionsRight(newOptions);
  };

  const handleMoveAllToLeft = () => {
    setSelectedOptionsRight([]);
  };

  return (
    <Row>
      <Col xs={5}>
        <FormControl
          as="select"
          multiple
          value={selectedOptions}
          onChange={handleSelect}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </FormControl>
      </Col>
      <Col xs={2} className="d-flex flex-column justify-content-center align-items-center">
        <Button onClick={handleMoveAllToRight}><SlControlForward/></Button>
        <Button onClick={handleMoveSelectedToRight}><SlArrowRight/></Button>
        <Button onClick={handleMoveSelectedToLeft}><SlArrowLeft/></Button>
        <Button onClick={handleMoveAllToLeft}><SlControlRewind/></Button>
      </Col>
      <Col xs={5}>
        <FormControl
          as="select"
          multiple
          value={selectedOptionsRight}
          onChange={handleSelectRight}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </FormControl>
      </Col>
    </Row>
  );
}

export default MultiselectComponent;
