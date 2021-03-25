import React from "react";
import { Form } from "react-bootstrap";

const TextInput = ({ label, state, setState }) => {
  return (
    <Form.Group controlId="formBasicText">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        style={{ minHeight: "42px" }}
        type="text"
        placeholder="Add title"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </Form.Group>
  );
};

export default TextInput;
