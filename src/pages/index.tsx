import { FC } from "react";
import Head from "next/head";

import {
  Hero,
  About,
  Video,
  Partners,
  CTA,
  Services,
  Contact,
} from "@/sections";
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
        <Contact />
      </MainLayout>
    </>
  );
};

export default Home;
