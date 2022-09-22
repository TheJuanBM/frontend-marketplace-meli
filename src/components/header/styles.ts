import styled from "styled-components";
import { colors } from "_assets";

export const Container = styled.header`
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.YELLOW};

  > div {
    display: grid;
    width: 1200px;
    column-gap: 16px;
    align-items: center;
    grid-template-columns: 50px auto;
  }
`;
