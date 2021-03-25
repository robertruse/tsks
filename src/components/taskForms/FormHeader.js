import React from "react";
import { FaTimes } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";

const FormHeader = ({ name, handleClose }) => {
  return (
    <Row className="mb-4">
      <Col>
        <h3 className="font-weight-bold my-0 pt-1">{name}</h3>
      </Col>
      <Col className="col-auto ml-auto">
        <button className="btn-square" type="button" onClick={handleClose}>
          <FaTimes className="fa" />
        </button>
      </Col>
    </Row>
  );
};

export default FormHeader;
