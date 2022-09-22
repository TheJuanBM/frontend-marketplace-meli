import React from "react";
import { HomeLayout } from "../src/layouts/homeLayout";
import { HomeScreen } from "../src/screens";

export default function Home() {
  return <HomeScreen />;
}

Home.getLayout = (page: React.ReactNode) => <HomeLayout>{page}</HomeLayout>;
