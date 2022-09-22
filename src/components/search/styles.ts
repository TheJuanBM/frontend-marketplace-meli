import styled from "styled-components";
import { colors } from "_assets";

export const Container = styled.form`
  > input {
    width: 100%;
    height: 32px;
    border: none;
    font-size: 14px;
    padding: 0 10px;
    border-radius: 2px;
    font-family: inherit;
    width: -webkit-fill-available;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${colors.GRAYS[300]};
    }
  }
`;
