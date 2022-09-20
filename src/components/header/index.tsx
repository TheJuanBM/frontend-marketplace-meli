import Image from "next/image";
import Link from "next/link";

import { LogoMELI } from "_assets";

import * as HeaderStyles from "./styles";

export function Header() {
  return (
    <HeaderStyles.Container>
      <div>
        <Link href="/">
          <a>
            <Image src={LogoMELI} height="40px" width="60px" alt="Logo" />
          </a>
        </Link>
      </div>
    </HeaderStyles.Container>
  );
}
