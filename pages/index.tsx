import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
const Home: NextPage = () => {
  const Map = dynamic(() => import("../views/Map"));
  return (
    <>
      <Head>
        <title>Maps</title>
        <meta name="description" content="A demo map app for demonstrating software techniques." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Map />
    </>
  );
};
export default Home;
