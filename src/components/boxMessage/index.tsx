import React, { HTMLProps } from "react";
import styled from "styled-components";

import { colors } from "_assets";
import { Button } from "../button";

interface BoxMessageProps {
  buttonText: string;
  title: React.ReactNode;
  buttonAction: () => void;
  description: React.ReactNode;
  Icon: React.JSXElementConstructor<HTMLProps<never>>;
}

export function BoxMessage({ Icon, ...props }: BoxMessageProps) {
  return (
    <BoxMessage.Element>
      <Icon />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      {props.buttonText && (
        <Button onClick={props.buttonAction}>{props.buttonText}</Button>
      )}
    </BoxMessage.Element>
  );
}

BoxMessage.Element = styled.div`
  width: 100%;
  display: flex;
  padding: 16px;
  max-width: 320px;
  margin-top: 16px;
  border-radius: 6px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.WHITE};

  @media (max-width: 320px) {
    border-radius: 0;
  }
`;
