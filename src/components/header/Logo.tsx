import Image from "next/image";
import Link from "next/link";
import { Logo } from "../../assets/images";

export function LogoComponent() {
  return (
    <Link href="/">
      <a>
        <Image src={Logo} height="40px" width="60px" alt="Logo" />
      </a>
    </Link>
  );
}
