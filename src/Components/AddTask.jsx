import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const ContainerInputs = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 45px;
  color: #f4f4f4;
  margin-bottom: 10px;

  @media only screen and (max-width: 1440px) {
    font-size: 40px;
  }
`;

const Text = styled.input`
  width: 250px;
  height: 50px;
  border-radius: 10px;
  font-size: 25px;
  margin-right: 10px;
  padding: 0 0 0 10px;
  outline: none;
  border: 2px solid #1a1a1a;
  background-color: #f4f4f4;
  font-family: 'Indie Flower', cursive;

  @media only screen and (max-width: 1440px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 1366px) {
    font-size: 20px;
  }
`;

const Button = styled.button`
  cursor: pointer;
  height: 50px;
  width: 100px;
  border-radius: 10px;
  font-size: 25px;
  margin: auto 0;
  outline: none;
  border: 2px solid #1a1a1a;
  background-color: #f4f4f4;
  padding: 8px;
  font-family: 'Indie Flower', cursive;
`;

const AddTask = ({ AddTaskMethod }) => {
  const [task, setTask] = useState();

  const handleClick = () => {
    AddTaskMethod(task);

    setTask('');
  };

  return (
    <Container>
      <Title>Add Task</Title>
      <ContainerInputs>
        <Text value={task} onChange={(e) => setTask(e.target.value)}></Text>
        <Button onClick={handleClick}>Add</Button>
      </ContainerInputs>
    </Container>
  );
};

export default AddTask;
