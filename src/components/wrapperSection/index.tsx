import React from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";
import { colors } from "_assets";

interface WrapperSectionProps {
  children: React.ReactNode;
  styles?: FlattenSimpleInterpolation;
}

export function WrapperSection(props: WrapperSectionProps) {
  return <WrapperSection.Element {...props} />;
}

WrapperSection.Element = styled.section<WrapperSectionProps>`
  width: 100%;
  padding: 16px;
  margin: 16px 0;
  overflow: hidden;
  max-width: 1200px;
  border-radius: 2px;
  background-color: ${colors.WHITE};

  ${({ styles }) => styles}
`;
