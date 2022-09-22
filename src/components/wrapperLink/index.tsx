import Link from "next/link";

interface WrapperLinkProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

export function WrapperLink({ href, title, children }: WrapperLinkProps) {
  return (
    <Link href={href}>
      <a title={title}>{children}</a>
    </Link>
  );
}
