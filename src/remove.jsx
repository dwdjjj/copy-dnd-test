import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import { Title } from "./styles";
const RemoveArea = styled.div`
  padding: 8px;
  transition: background-color 0.5s ease;
  background-color: ${(props) => (props.isDraggingOver ? "red" : "lightgray")};
  flex-grow: 1;
  min-height: 100px;
  display: inline-block;
  width: 100px;
  height: 100px;
`;
const RemoveBox = styled.div`
  text-align: center;
`;
export default function Remove({ key, item, droppableId }) {
  return (
    <>
      <Title>{droppableId}</Title>
      <RemoveBox>
        <Droppable
          droppableId={droppableId}
          // isDropDisabled={isDropDisabled}
        >
          {(provided, snapshot) => (
            <RemoveArea
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
              {...provided.droppableProps}
            >
              {provided.placeholder}
            </RemoveArea>
          )}
        </Droppable>
      </RemoveBox>
    </>
  );
}
