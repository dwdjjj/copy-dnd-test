import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Title } from "./styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { RemoveBox, RemoveArea, IconBox, RemoveDiv } from "./styles";

export default function Remove({ key, items, droppableId, target }) {
  return (
    <RemoveDiv>
      <Title>{droppableId + ` item`}</Title>
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
              <IconBox>
                <DeleteIcon fontSize="large" color="secondary" />
              </IconBox>
              {provided.placeholder}
            </RemoveArea>
          )}
        </Droppable>
      </RemoveBox>
    </RemoveDiv>
  );
}
