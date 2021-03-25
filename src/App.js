import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/tasks/TaskList";
import AddTask from "./components/taskForms/AddTask";
import EditTask from "./components/taskForms/EditTask";
import EmptyState from "./components/EmptyState";
import { Modal } from "react-bootstrap";

//import { TaskData } from "./components/TaskData";
import "./App.scss";

function App() {
  /* Tasks */
  const [tasks, setTasks] = useState(() => {
    const localData = localStorage.getItem("tasks");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(TaskData));
  // }, []);

  /* Add Task */
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([newTask, ...tasks]);
  };

  /* Delete Task */
  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  /* Edit task */
  const [task, setTask] = useState(false);

  const editTask = (modifiedTask) => {
    setTasks(
      tasks.map((task) => {
        return task.id === modifiedTask.id ? { ...modifiedTask } : task;
      })
    );
  };

  /* Modal */
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);

  const handleClose = () => {
    setShowModal(false);
    setTask(false);
  };

  const handleClick = (task) => {
    setTask(task);
    handleShow();
  };

  return (
    <>
      <Header handleShow={handleShow} />

      {tasks.length === 0 ? (
        <EmptyState handleShow={handleShow} />
      ) : (
        <TaskList tasks={tasks} handleClick={handleClick} />
      )}

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Body>
          {task ? (
            <EditTask
              handleClose={handleClose}
              editTask={editTask}
              deleteTask={deleteTask}
              task={task}
            />
          ) : (
            <AddTask handleClose={handleClose} addTask={addTask} />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;
