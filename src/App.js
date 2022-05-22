import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./column";
import "@atlaskit/css-reset";
import { Container, List } from "../src/styles";
import { v4 as uuid } from "uuid";
import Remove from "./remove";
const Items = [
  {
    id: uuid(),
    content: "Docker",
  },
  {
    id: uuid(),
    content: "Image",
  },
  {
    id: uuid(),
    content: "Trash",
  },
];
console.log(Items);
function App() {
  const [items, setItems] = useState([]);
  // splice(start, deleteCnt, insertVal) start부터 deleteCnt개 제거, insertVal몇개 넣어라

  const reorder = (list, startIndex, endIndex) => {
    const [removed] = list.splice(startIndex, 1); // startIndex 한개 removed로
    list.splice(endIndex, 0, removed); // 마지막에 removed추가

    return list;
  };

  const copy = (source, droppableSource, droppableDestination) => {
    // console.log(droppableDestination, "==> dest", destination);
    const item = source[droppableSource.index];
    const idx = droppableDestination.index;

    items.splice(idx, 0, { ...item, id: uuid() });
    setItems([...items]);
  };

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    // console.log("기존 idx: ", droppableDestination.droppableId);
    // console.log("바꾼 idx: ", droppableDestination.idx);
    // console.log("result출력: ", result);
    return result;
  };

  const onDragEnd = (result) => {
    const { destination, source } = result;
    // droppableId는 어느 column에 위치하는지, index는 해당 column에서 몇번째 task인지
    console.log(
      "도착지 index 도착지 droppableId",
      destination?.index,
      destination?.droppableId
    );
    console.log(
      "출발지 index 출발지 droppableId",
      source.index,
      source.droppableId
    );

    // 올바른 droppable 위에 두지 않았으므로 그냥 리턴
    if (!destination) return;

    // 같은자리에 두면 그냥 리턴
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const start = source.droppableId;
    const finish = destination.droppableId;
    console.log(source);
    if (start === "area" && start === finish) {
      console.log("==");
      const arr = reorder(items, source.index, destination.index);
      setItems([...arr]);
    }
    if (start === "Items" && finish === "area") {
      copy(Items, source, destination);
    }
  };

  console.log(items);
  const removeItem = (result) => {
    const { source, destination } = result;

    if (!destination) return;
  };
  return (
    <DragDropContext
      // onDragStart={onDragStart}
      // onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <List>
        <Column items={Items} droppableId="Items" />
      </List>
      <Container>
        <Column items={items} droppableId="area" />
      </Container>
      <Remove droppableId="remove" />
    </DragDropContext>
  );
}

export default App;
