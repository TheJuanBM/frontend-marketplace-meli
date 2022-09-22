import Head from "next/head";
import React from "react";

export interface HomeLayoutProps {
  children: React.ReactNode;
}

export function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <Head>
        <title>MELI | Encuentra tu producto</title>
        <meta
          name="description"
          content="Busca, encuentra y compra tu producto ideal con MELI"
        />
        <meta name="robots" content="noimageindex" />
      </Head>
      {children}
    </>
  );
}
