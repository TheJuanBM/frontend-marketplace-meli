import styled from "styled-components";
import { colors } from "../../assets";

export const Container = styled.header`
  display: flex;
  padding: 16px;
  justify-content: center;
  background-color: ${colors.YELLOW};

  > div {
    display: grid;
    width: 1200px;
    column-gap: 16px;
    align-items: center;
    grid-template-columns: 100px auto 100px;
  }
`;
