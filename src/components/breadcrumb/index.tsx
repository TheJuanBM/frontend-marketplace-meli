import styled from "styled-components";

import { colors, RightIcon } from "_assets";

interface BreadcrumbProps {
  items?: string[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  if (!items.length) return null;

  return (
    <Breadcrumb.Element>
      <ol itemType="http://schema.org/BreadcrumbList">
        {items.map((breadcrumb) => (
          <li key={breadcrumb}>
            {breadcrumb}
            <RightIcon />
          </li>
        ))}
      </ol>
    </Breadcrumb.Element>
  );
}

Breadcrumb.Element = styled.div`
  width: 100%;
  max-width: 1200px;

  > ol {
    margin: 0;
    display: flex;
    padding: 16px 0 0 0;
    list-style-type: none;
    color: ${colors.GRAYS[300]};

    > li {
      display: flex;
      align-items: center;

      &:last-child > svg {
        display: none;
      }

      > svg {
        padding: 0 10px;
      }
    }

    @media (max-width: 1200px) {
      padding: 16px 16px 0 16px;
    }
  }
`;
