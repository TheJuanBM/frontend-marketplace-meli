import React from "react";
import styled from "styled-components";
import { colors } from "_assets";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <Button.Element {...props}>
      <span>{children}</span>
    </Button.Element>
  );
}

Button.Element = styled.button`
  width: 100%;
  border: none;
  height: 48px;
  border-radius: 6px;
  background-color: ${colors.BLUE};

  &:hover {
    cursor: pointer;
    background-color: #2968c8;
  }

  &:active {
    background-color: #1f4e96;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px #fff, 0 0 0 3px #2968c8,
      0 0 0 5px rgb(65 137 230 / 30%);
    -moz-box-shadow: 0 0 0 2px #fff, 0 0 0 3px #2968c8,
      0 0 0 5px rgba(65, 137, 230, 0.3);
  }

  span {
    height: 48px;
    font-size: 16px;
    padding: 0 24px;
    font-weight: 600;
    line-height: 48px;
    text-align: center;
    color: ${colors.WHITE};
  }
`;
