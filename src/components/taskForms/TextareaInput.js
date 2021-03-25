import React, { useEffect, useRef } from "react";
import { Form } from "react-bootstrap";

const TextareaInput = ({ label, state, setState, defaultHeight }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.style.height = `${defaultHeight}px`;
    inputRef.current.style.height = `${inputRef.current.scrollHeight + 4}px`;
  });

  return (
    <Form.Group controlId="formBasicTextarea">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        ref={inputRef}
        as="textarea"
        placeholder="Take a note..."
        value={state}
        onChange={(e) => setState(e.target.value)}
        style={{ resize: "none" }}
      />
    </Form.Group>
  );
};

TextareaInput.defaultProps = {
  defaultHeight: 100,
};

export default TextareaInput;
