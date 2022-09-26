import Head from "next/head";
import React from "react";

import { Header } from "_components";

export interface LayoutAppProps {
  title: string;
  metaContent: string;
  children: React.ReactNode;
}

export function LayoutApp({ metaContent, title, children }: LayoutAppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="noimageindex" />
        <meta name="description" content={metaContent} />
      </Head>
      <Header />
      <main>{children}</main>
    </React.Fragment>
  );
}
