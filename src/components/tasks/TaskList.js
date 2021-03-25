import React from "react";
import TaskItem from "./TaskItem";
import { Container } from "react-bootstrap";

import Masonry from "react-masonry-css";

const TaskList = ({ tasks, handleClick }) => {
  const breakpointColumnsObj = {
    default: 3,
    900: 2,
    600: 1,
  };

  return (
    <section className="tasks bg-light">
      <Container fluid="xl" className="task-list py-4 py-sm-5 px-lg-4 px-xl-0">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} handleClick={handleClick} />
          ))}
        </Masonry>
      </Container>
    </section>
  );
};

export default TaskList;
