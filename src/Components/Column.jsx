import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid #000000;
  border-radius: 10px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  padding: 10px;
  text-align: center;
  margin: 0;
  color: #f4f4f4;
  border-bottom: 1px solid #000;
  background-color: #666666;
  border-radius: 10px 10px 0 0;
  font-size: 30px;

  @media only screen and (max-width: 1440px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 1366px) {
    font-size: 20px;
  }
`;

const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.isDraggingOver ? 'skyblue' : '#f4f4f4'};
  flex-grow: 1;
  min-height: 100px;
  border-radius: 0 0 10px 10px;
`;

function Column({ tasks, column, DeleteTask }) {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Task
                key={task.id}
                task={task}
                index={index}
                DeleteTask={DeleteTask}
              />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}

export default Column;
