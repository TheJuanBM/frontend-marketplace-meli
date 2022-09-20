import React from "react";
import { HomeLayout } from "../src/layouts/home";
import { HomeScreen } from "../src/screens";

export default function Home() {
  return <HomeScreen />;
}

Home.getLayout = (page: React.ReactNode) => <HomeLayout>{page}</HomeLayout>;
