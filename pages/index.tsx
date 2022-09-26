import React from "react";

import { LayoutApp } from "_layouts";
import { HomeScreen } from "_screens";

export default function Home() {
  return <HomeScreen />;
}

Home.getLayout = (page: React.ReactNode) => (
  <LayoutApp
    title="MELI | Encuentra tu producto"
    metaContent="Busca, encuentra y compra tu producto ideal con MELI"
  >
    {page}
  </LayoutApp>
);
