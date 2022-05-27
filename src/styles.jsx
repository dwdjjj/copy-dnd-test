import styled from "styled-components";

export const Title = styled.h3`
  padding: 8px;
  font-size: 32px;
  text-align: center;
`;

export const List = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
  @media (max-width: 500px) {
    position: relative;
    background-color: gray;
  }
  @media (min-width: 500px) {
    position: absolute;
    width: 250px;
    max-height: 500px;
    background-color: lightslategray;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
  @media (max-width: 500px) {
    position: relative;
    background-color: lightblue;
  }
  @media (min-width: 500px) {
    position: absolute;
    width: 250px;
    max-height: 500px;
    background-color: lightskyblue;
  }
`;

export const ColContainer = styled.div`
  margin: 8px;
  border: 3px solid lightgrey;
  border-radius: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  /* display: flex; */
  /* :hover {
    background-color: ${(props) => (props.area === "area" ? "blue" : "green")};
  } */
`;

export const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.5s ease;
  background-color: ${(props) => (props.isDraggingOver ? "orange" : "white")};
  flex-grow: 1;
  min-height: 100px;
`;

export const TaskContainer = styled.div`
  /* position: relative; */
  border: 2px solid lightgrey;
  border-radius: 3px;
  padding: 8px;
  margin-bottom: 8px;
  flex-direction: column;
  background-color: ${(props) =>
    props.isDragDisabled
      ? "lightgrey"
      : props.isDragging
      ? "lightgreen"
      : "white"};
  display: flex;
`;

export const RemoveBox = styled.div`
  text-align: center;

  border: 2px solid lightgrey;
  border-radius: 3px;
  padding: 8px;
`;

export const RemoveArea = styled.div`
  transition: background-color 0.5s ease;
  background-color: ${(props) =>
    props.isDraggingOver ? "black" : "lightgray"};
  flex-grow: 1;
  min-height: 100px;
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 60px;
`;

export const IconBox = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const RemoveDiv = styled.div`
  position: relative;
  top: 500px;
  @media (max-width: 500px) {
    position: absolute;
    display: inline-flex;
  }
`;
