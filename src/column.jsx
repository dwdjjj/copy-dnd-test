import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./task";
import { Title, ColContainer, TaskList, Item } from "../src/styles";

export default function Column({ key, items, isDropDisabled, droppableId }) {
  return (
    <ColContainer>
      <Title>{`k8s ` + droppableId}</Title>
      <Droppable
        droppableId={droppableId}
        // isDropDisabled={isDropDisabled}
      >
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
          >
            <Item area={droppableId}>
              {items.map((item, index) => (
                <Task key={item.id} item={item} index={index} />
              ))}
            </Item>
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </ColContainer>
  );
}
