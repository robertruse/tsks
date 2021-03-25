import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const TaskItem = ({ task, handleClick }) => {
  return (
    <Card
      className={`task-item p-2 mb-4 ${task.reminder && "reminder"}`}
      onClick={() => handleClick(task)}
    >
      <Card.Body>
        <Card.Title>
          <Row>
            <Col>
              <h4 className="font-weight-bold">{task.title}</h4>
            </Col>
            <Col className="col-auto ml-auto">
              <div className="btn-squares">
                <span className="square"></span>
              </div>
            </Col>
          </Row>
        </Card.Title>
        <Card.Text>
          <span style={{ whiteSpace: "pre-line" }}>{task.note}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TaskItem;
