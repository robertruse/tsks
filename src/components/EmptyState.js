import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import taskImage from "../img/tasks.png";

const EmptyState = ({ handleShow }) => {
  return (
    <section className="empty-state  d-flex">
      <Container
        fluid="xl"
        className="d-flex flex-column justify-content-center align-items-center py-4"
      >
        <Row>
          <Col sm="12" className="pb-4">
            <Image src={taskImage} />
          </Col>

          <Col sm="12" className="text-center pt-3 pt-sm-4">
            <h1 className="font-weight-bold">No tasks to do</h1>
            <p className="lead pb-4">
              Seems like it's all done for today. Good Job!
            </p>
            <Button
              variant="primary"
              className="py-2 px-4 btn-lg "
              onClick={handleShow}
            >
              Add a task
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EmptyState;
