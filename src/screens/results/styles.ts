import styled from "styled-components";
import { colors } from "_assets";

export const WrapperResult = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
`;

export const OrderedLlistResult = styled.ol`
  margin: 0;
  padding: 0;
  overflow: hidden;
  border-radius: 2px;
  list-style-type: none;

  > li {
    padding: 16px 0;
    border-bottom: solid ${colors.GRAYS[100]} 1px;

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
      border-bottom: none;
    }
  }
`;
