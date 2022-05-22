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
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 50%;
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
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 50%;
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
  display: flex;
  user-select: none;
  padding: 0.5rem;
  margin: 0 0 0.5rem 0;
  align-items: flex-start;
  align-content: flex-start;
  line-height: 1.5;
  border-radius: 3px;
  background: #fff;
  border: 1px ${(props) => (props.isDragging ? "dashed #4099ff" : "solid #ddd")};
`;

export const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.5s ease;
  background-color: ${(props) => (props.isDraggingOver ? "orange" : "white")};
  flex-grow: 1;
  min-height: 100px;
`;
