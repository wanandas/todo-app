import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  isActive: boolean;
}

export function Modal() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {!open && (
        <button id="myBtn" onClick={() => setOpen(!open)}>
          Open Modal
        </button>
      )}
      <ModalContainer isActive={open}>
        <ModalContent>
          <CloseBtn onClick={() => setOpen(!open)}>&times;</CloseBtn>
          <p>Some text in the Modal..</p>
        </ModalContent>
      </ModalContainer>
    </>
  );
}

const ModalContainer = styled.div<Props>`
  display: ${(props) => (props.isActive ? "unset" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
`;

export const CloseBtn = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
