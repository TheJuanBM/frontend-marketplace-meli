import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { colors, LogoMELI } from "_assets";

import { Search } from "../search";

export function Header() {
  return (
    <Header.Element>
      <div>
        <Link href="/">
          <a tabIndex={4}>
            <Image src={LogoMELI} height="32px" width="44px" alt="Logo" />
          </a>
        </Link>
        <Search />
      </div>
    </Header.Element>
  );
}

Header.Element = styled.header`
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.YELLOW};

  div {
    display: grid;
    width: 1200px;
    column-gap: 16px;
    align-items: center;
    grid-template-columns: 50px auto;
  }
`;
