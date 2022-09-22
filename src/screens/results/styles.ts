import styled from "styled-components";
import { colors } from "_assets";

export const WrapperResult = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SectionItems = styled.section`
  max-width: 1200px;
  flex-direction: column;

  > ol {
    padding: 0;
    margin: 16px 0;
    overflow: hidden;
    border-radius: 2px;
    list-style-type: none;
    background-color: ${colors.WHITE};

    > li {
      border-bottom: solid ${colors.GRAYS[100]} 1px;

      &:last-child {
        border-bottom: none;
      }
    }
  }
`;
