import styled from "styled-components";
import { colors } from "_assets";

export const Container = styled.form`
  height: 32px;
  overflow: hidden;
  position: relative;

  input {
    width: 100%;
    height: 100%;
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

  button {
    right: 0;
    z-index: 1;
    padding: 0;
    border: none;
    height: 100%;
    cursor: pointer;
    position: absolute;
    padding: 2px 10px 0 0;
    background-color: ${colors.WHITE};

    &::before {
      top: 0;
      right: 33px;
      content: "";
      height: 70%;
      display: block;
      margin-top: 17%;
      position: absolute;
      border-left: 1px solid ${colors.GRAYS[100]};
    }
  }
`;
