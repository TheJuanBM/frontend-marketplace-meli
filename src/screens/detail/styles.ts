import { css } from "styled-components";

export const StylesSectionDetail = css`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 2fr 1fr;

  > div {
    &:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:nth-child(2) {
      div:nth-child(2n) {
        font-size: 60px;
        margin-bottom: 70px;
      }
    }
  }
`;
