import React from "react";
import { Form } from "react-bootstrap";

const CheckboxInput = ({ label, state, setState }) => {
  return (
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check
        custom
        type="checkbox"
        label={label}
        defaultChecked={state}
        onClick={(e) => {
          setState((prev) => !prev);
        }}
      />
    </Form.Group>
  );
};

export default CheckboxInput;
