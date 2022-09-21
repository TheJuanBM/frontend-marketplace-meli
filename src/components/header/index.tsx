import Image from "next/image";
import Link from "next/link";
import { LogoMELI } from "_assets";
import { Search } from "../search";

import * as HeaderStyles from "./styles";

export function Header() {
  return (
    <HeaderStyles.Container>
      <div>
        <Link href="/">
          <a>
            <Image src={LogoMELI} height="32px" width="44px" alt="Logo" />
          </a>
        </Link>
        <Search />
      </div>
    </HeaderStyles.Container>
  );
}
