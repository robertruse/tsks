import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import FormHeader from "./FormHeader";
import TextInput from "./TextInput";
import TextareaInput from "./TextareaInput";
import CheckboxInput from "./CheckboxInput";

const EditTask = ({ handleClose, editTask, task, deleteTask }) => {
  const id = task.id;
  const [title, setTitle] = useState(task.title);
  const [note, setNote] = useState(task.note);
  const [reminder, setReminder] = useState(task.reminder);

  /* Submit */
  const onSubmit = (e) => {
    e.preventDefault();

    if (!title && !note) {
      alert("Please add a task.");
      return;
    }

    editTask({ id, title, note, reminder });

    setTitle("");
    setNote("");
    setReminder(false);

    handleClose();
  };

  const handleDelete = () => {
    deleteTask(task.id);
    handleClose();
  };

  return (
    <>
      <Container className="add-task py-3">
        <FormHeader name="Edit task" handleClose={handleClose} />

        <Form onSubmit={onSubmit}>
          <TextInput label="Title" state={title} setState={setTitle} />

          <TextareaInput
            label="Note"
            state={note}
            setState={setNote}
            defaultHeight={100}
          />

          <CheckboxInput
            label="Set Reminder"
            state={reminder}
            setState={setReminder}
          />

          <Row className="mt-5 ">
            <Col>
              <Button variant="primary" type="submit" className="py-2 px-4">
                Done
              </Button>
            </Col>

            <Col className="col-auto ml-auto">
              <button
                className="btn-square"
                type="button"
                onClick={handleDelete}
              >
                <FaTrashAlt className="fa" />
              </button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default EditTask;
