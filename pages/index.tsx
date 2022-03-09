import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Main from "@/components/main";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Erjus Stafa</title>
        <meta name="description" content="Genersted by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className={styles.main}>
        <Main description="Der Berliner Pflegedienst mit Durchblick und Expertise" />
      </main>
    </div>
  );
};

export default Home;
