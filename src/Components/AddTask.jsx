import React from "react";
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
  height: 40px;
  border-radius: 10px;
  font-size: 20px;
  margin: auto 10px auto 0;
  outline: none;
`;

const Button = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 10px;
  font-size: 20px;
  margin: auto 0;
  outline: none;
`;

const AddTask = () => {
  return (
    <Container>
      <Title>Add Task</Title>
      <ContainerInputs>
        <Text></Text>
        <Button>{`Add`}</Button>
      </ContainerInputs>
    </Container>
  );
};

export default AddTask;
