import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { FaTrashAlt } from 'react-icons/fa';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? 'lightgreen' : 'white')};
  display: flex;
  justify-content: space-between;
  font-size: 30px;

  @media only screen and (max-width: 1440px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 1366px) {
    font-size: 20px;
  }
`;

export default function Task({ task, index, DeleteTask }) {
  const handleClickIcon = () => {
    DeleteTask(task.id);
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {task.content}

          <FaTrashAlt onClick={handleClickIcon} />
        </Container>
      )}
    </Draggable>
  );
}
