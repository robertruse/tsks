import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import FormHeader from "./FormHeader";
import TextInput from "./TextInput";
import TextareaInput from "./TextareaInput";
import CheckboxInput from "./CheckboxInput";

const AddTask = ({ addTask, handleClose }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [reminder, setReminder] = useState(false);

  /* Submit */
  const onSubmit = (e) => {
    e.preventDefault();

    if (!title && !note) {
      alert("Please add a task.");
      return;
    }

    addTask({ title, note, reminder });

    setTitle("");
    setNote("");
    setReminder(false);

    handleClose();
  };

  return (
    <>
      <Container className="add-task py-3">
        <FormHeader name="Add task" handleClose={handleClose} />

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

          <Button variant="primary" type="submit" className="py-2 px-4 mt-4">
            Done
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AddTask;
