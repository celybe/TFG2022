import { Grid, GridItem, Heading, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import styled from "styled-components";
import Column from "./Column";
import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";
import TaskModel from "../../model/Task";
import ColumnModel from "../../model/Column";

const itemsFromBackend = {
  tasks: [TaskModel],
  columns: [ColumnModel],
  columnOrder: [String],
};

const Board = () => {
  const bg = useColorModeValue("#ffffff", "#000A0F");
  const [state, setState] = useState(itemsFromBackend);

  function onDragEnd(result) {
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
      console.log(itemsFromBackend);
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
  }

  return (
    <Grid w="100vw" bg={bg} h="100vh">
      <Grid templateColumns="repeat(5,1fr)" px={10} py={5} gap={2}>
        <DragDropContext onDragEnd={onDragEnd}>
          {state.columnOrder.map((columnId) => {
            const column = state.columns[columnId];
            const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </DragDropContext>
      </Grid>
    </Grid>
  );
};

export default Board;
