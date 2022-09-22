import styled from "styled-components";

import { colors } from "_assets";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;

  > ol {
    margin: 0;
    display: flex;
    padding: 16px 0 0 0;
    list-style-type: none;
    color: ${colors.GRAYS[300]};

    > li {
      ::after {
        content: ">";
        padding: 0 10px;
      }

      :last-child::after {
        content: none;
      }
    }

    @media (max-width: 1200px) {
      padding: 16px 16px 0 16px;
    }
  }
`;
