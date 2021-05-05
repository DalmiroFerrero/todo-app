import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import AddTask from "./AddTask";

const ContainerApp = styled.div`
  position: absolute;
  top: 25%;
  left: 25%;
`;

const Container = styled.div`
  display: flex;
  font-size: 20px;
`;

function App() {
  const [state, setState] = useState({
    tasks: {},
    columns: {
      "column-1": {
        id: "column-1",
        title: "To do",
        taskIds: [],
      },
      "column-2": {
        id: "column-2",
        title: "In progress",
        taskIds: [],
      },
      "column-3": {
        id: "column-3",
        title: "Done",
        taskIds: [],
      },
    },
    columnOrder: ["column-1", "column-2", "column-3"],
  });

  useEffect(() => {
    validList();
  }, []);

  const validList = () => {
    const list = JSON.parse(window.localStorage.getItem("list")) || {};

    if (Object.entries(list).length === 0) {
      window.localStorage.setItem("list", JSON.stringify(state));
    } else {
      setState((prevState) => ({
        ...prevState,
        tasks: list.tasks,
        columns: list.columns,
      }));
    }
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setState(newState);

    window.localStorage.setItem("list", JSON.stringify(newState));
  };

  const AddTaskMethod = (task) => {
    if (task === undefined) return;

    const allTaks = Object.values(state.tasks);
    var newState;
    if (allTaks.length === 0) {
      newState = {
        ...state,
        tasks: {
          ...state.tasks,
          "task-1": {
            id: "task-1",
            content: task,
          },
        },
        columns: {
          ...state.columns,
          "column-1": {
            ...state.columns["column-1"],
            taskIds: [...state.columns["column-1"].taskIds, "task-1"],
          },
        },
      };
    } else {
      const lastTask = allTaks[allTaks.length - 1].id;

      if (lastTask.length <= 6) {
        const nextTask =
          Number(lastTask.toString().charAt(lastTask.length - 1)) + 1;

        newState = {
          ...state,
          tasks: {
            ...state.tasks,
            [("task-" + nextTask).toString()]: {
              id: ("task-" + nextTask).toString(),
              content: task,
            },
          },
          columns: {
            ...state.columns,
            "column-1": {
              ...state.columns["column-1"],
              taskIds: [
                ...state.columns["column-1"].taskIds,
                "task-" + nextTask.toString(),
              ],
            },
          },
        };
      } else if (lastTask.length > 6) {
        const nextTask =
          Number(
            lastTask.charAt(lastTask.length - 2) +
              lastTask.charAt(lastTask.length - 1)
          ) + 1;

        newState = {
          ...state,
          tasks: {
            ...state.tasks,
            ["task-" + nextTask]: {
              id: "task-" + nextTask,
              content: task,
            },
          },
          columns: {
            ...state.columns,
            "column-1": {
              ...state.columns["column-1"],
              taskIds: [
                ...state.columns["column-1"].taskIds,
                "task-" + nextTask.toString(),
              ],
            },
          },
        };
      }
    }

    setState(newState);

    window.localStorage.setItem("list", JSON.stringify(newState));
  };

  return (
    <ContainerApp>
      <AddTask AddTaskMethod={AddTaskMethod} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Container>
          {state.columnOrder.map((columnId) => {
            const column = state.columns[columnId];
            const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </Container>
      </DragDropContext>
    </ContainerApp>
  );
}

export default App;
