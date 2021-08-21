import React from "react";
import styled from "styled-components";
import { useHandleValue } from "../../utils/hook/useHandleValue";
import { SCREEN } from "../../utils/SCREEN";
import { Card } from "./Card";

export function Todolist() {
  const { todolist } = useHandleValue();

  React.useEffect(() => {
    console.log(todolist);
  }, [todolist]);

  return (
    <TodolistContainer>
      {todolist &&
        todolist.map((todo) => {
          return <Card todo={todo} />;
        })}
    </TodolistContainer>
  );
}

const TodolistContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  @media screen and (min-width: ${SCREEN.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${SCREEN.xl}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  @media (min-width: ${SCREEN["2xl"]}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;
