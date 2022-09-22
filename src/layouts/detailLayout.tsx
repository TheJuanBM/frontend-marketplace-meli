import Head from "next/head";

export interface DetailLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function DetailLayout({ children, title }: DetailLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Detalle del producto" />
        <meta name="robots" content="noimageindex" />
      </Head>
      {children}
    </>
  );
}
