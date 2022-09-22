import Head from "next/head";
import React from "react";

interface ResultLayout {
  search: string;
  children: React.ReactNode;
}

export function ResultLayout({ children, search }) {
  const title = `${search[0].toUpperCase() + search.slice(1)} | MELI 📦`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={`Resultado de busqueda para ${search}`}
        />
        <meta name="robots" content="noimageindex" />
      </Head>
      {children}
    </>
  );
}
