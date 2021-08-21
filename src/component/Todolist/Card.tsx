import React from "react";
import styled from "styled-components";
import { ITodoState } from "../../App";
import { Checkbox } from "../../utils/Checkbox";
import { CloseBtn } from "../Modal";

export function Card({
  todo,
  handleSaveTodo,
  handleChecked,
  handleDelete,
}: {
  todo: ITodoState;
  handleSaveTodo: ({
    id,
    title,
    content,
  }: {
    id: number;
    title: string;
    content: string;
  }) => void;
  handleChecked: (id: number) => void;
  handleDelete: (id: number) => void;
}) {
  return (
    <CardContainer key={todo.id}>
      <CardDeletebtn
        onClick={() => {
          if (window.confirm("please ensure and then confirm!")) {
            handleDelete(todo.id);
            alert("delete success");
          } else {
            alert("cancel delete");
          }
        }}
      >
        &times;
      </CardDeletebtn>
      <CardTitle
        value={todo.title}
        onChange={(e) =>
          handleSaveTodo({
            id: todo.id,
            title: e.target.value,
            content: todo.content,
          })
        }
      />
      <CardContent
        onChange={(e) =>
          handleSaveTodo({
            id: todo.id,
            title: todo.title,
            content: e.target.value,
          })
        }
        value={todo.content}
      />
      <Checkbox
        id={todo.id.toString()}
        label="FINISH"
        checked={todo.checked}
        onChange={() => {
          handleChecked(todo.id);
        }}
      />
    </CardContainer>
  );
}

const CardContainer = styled.div`
  background-color: #dfdfdf;
  position: relative;
  padding: 1.5rem 2rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  box-shadow: 5px 5px 12px 1px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

const CardDeletebtn = styled(CloseBtn)`
  position: absolute;
  top: 0;
  right: 0.5rem;
`;

const CardTitle = styled.input`
  text-transform: uppercase;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #dfdfdf;
`;
const CardContent = styled.textarea`
  border: none;
  background-color: #dfdfdf;
  resize: vertical;
  height: 10rem;
  width: 100%;
`;
