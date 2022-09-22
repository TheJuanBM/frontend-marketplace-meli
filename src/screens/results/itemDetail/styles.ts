import styled from "styled-components";
import { colors } from "_assets";

export const Container = styled.li`
  padding: 16px;
  display: flex;
  flex-direction: row;

  > div {
    width: 85%;
    display: flex;
    flex-direction: row;

    > div {
      &:first-child {
        min-width: 200px;

        @media (max-width: 400px) {
          min-width: 150px;

          > a {
            width: 150px;
            height: 150px;
          }
        }

        > a {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      &:last-child {
        display: flex;
        margin-left: 16px;
        flex-direction: column;

        > div {
          display: flex;

          > span {
            font-size: 24px;
            margin-bottom: 32px;

            &:nth-child(2) {
              width: 25px;
              height: 25px;
              display: flex;
              margin-left: 16px;
              border-radius: 50%;
              align-items: center;
              justify-content: center;
              background-color: ${colors.GREEN};
            }
          }
        }
      }
    }
  }

  > span {
    flex: 1;
    display: flex;
    align-items: center;
    color: ${colors.GRAYS[300]};
  }
`;

export const TitleItem = styled.div`
  a,
  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.3;
    text-decoration: none;
    color: ${colors.GRAYS[900]};
  }
`;
