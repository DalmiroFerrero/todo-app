import React, { useState } from "react";
import styled from "styled-components";

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
  margin: 0 0 10px 0;
`;

const Text = styled.input`
  width: 250px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  margin: auto 10px auto 0;
  padding: 0 0 0 10px;
  outline: none;
  font-family: "Indie Flower", cursive;
`;

const Button = styled.button`
  height: 50px;
  width: 100px;
  border-radius: 10px;
  font-size: 20px;
  margin: auto 0;
  outline: none;
  padding: 10px;
  font-family: "Indie Flower", cursive;
`;

const AddTask = ({ AddTaskMethod }) => {
  const [task, setTask] = useState();

  const handleClick = () => {
    AddTaskMethod(task);

    setTask("");
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
