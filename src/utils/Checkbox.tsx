import React from "react";
import styled from "styled-components";

export function Checkbox({
  checked,
  onChange,
  id,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  id: string;
  label: string;
}) {
  return (
    <Label htmlFor={id}>
      {label}
      <Input id={id} type="checkbox" checked={checked} onChange={onChange} />
      <Indicator />
    </Label>
  );
}
const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin: 0.6em 1em;
`;

const Indicator = styled.div`
  width: 1.2em;
  height: 1.2em;
  background: #e6e6e6;
  position: absolute;
  top: 0em;
  left: -1.6em;
  border: 1px solid #757575;
  border-radius: 0.2em;

  ${Input}:checked & {
    background: #d1d1d1;
  }

  ${Label}:hover & {
    background: #ccc;
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 0.1em;
    left: 0.35em;
    width: 35%;
    height: 70%;
    border: solid #263238;
    transform: rotate(45deg);
    border-width: 0 0.2em 0.2em 0;
  }

  &::disabled {
    cursor: not-allowed;
  }
`;
