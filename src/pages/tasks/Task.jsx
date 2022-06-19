import styled from "@emotion/styled";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  Grid,
  GridItem,
  Heading,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

const Task = (props) => {
  const bg = useColorModeValue("blackAlpha.100", "whiteAlpha.100");
  const bg2 = useColorModeValue("blackAlpha.50", "whiteAlpha.50");

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <Grid
          as={"div"}
          border={"1px solid"}
          borderColor={bg}
          p={4}
          borderRadius="4px"
          bg={"whiteAlpha.50"}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Text fontSize="xs" fontWeight="semibold">
            {props.task.content}
          </Text>
        </Grid>
      )}
    </Draggable>
  );
};

export default Task;
