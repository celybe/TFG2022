import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import AddTask from "./AddTask";
import Task from "./Task";
import {
  Grid,
  Flex,
  GridItem,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

const Column = (props) => {
  return (
    <Grid templateRows={"10% 90%"}>
      <Heading size="sm" py={5} pb={2} mb={5}>
        {props.column.title}
      </Heading>
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => (
          <Flex
            as={"div"}
            direction="column"
            gap={2}
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {props.tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </Flex>
        )}
      </Droppable>
    </Grid>
  );
};

export default Column;
