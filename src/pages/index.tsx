import { FC } from "react";
import Head from "next/head";

import { Hero, About, Video, Partners, CTA, Services } from "@/sections";
import MainLayout from "@/layouts/MainLayout";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Black Powder</title>
      </Head>

      <MainLayout>
        <Hero />
        <About />
        <Video />
        <Partners />
        <CTA />
        <Services />
      </MainLayout>
    </>
  );
};

export default Home;
