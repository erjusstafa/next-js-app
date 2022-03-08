import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Main from "@/components/main";
import { useAppSelector } from "redux/hooks";
import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const { userAuth } = useAppSelector((state) => state.home);

  const { data: session } = useSession();

  if (session) {
    return (
      <div className={styles.container}>
        Welcome user
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Erjus Stafa</title>
        <meta name="description" content="Genersted by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className={styles.main}>
        <Main description="Der Berliner Pflegedienst mit Durchblick und Expertise" />

        <div className={styles.container}>
          Click to sign into your user account <br />
          <button onClick={() => signIn()}>Sign in</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
