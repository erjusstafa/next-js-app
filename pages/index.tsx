import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Main from "@/components/main";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { userAccesToken } from "config/getUserDetail";
import { useAppSelector } from "redux/hooks";
import { EmptyObject } from "@reduxjs/toolkit";
import { UserState } from "redux/reducer/reducerSlice ";
import { PersistPartial } from "redux-persist/lib/persistReducer";

const Home: NextPage = () => {
  const router = useRouter();
  const accessToken = userAccesToken();
  const { userAuth } = useAppSelector(
    (
      state: EmptyObject & {
        home: UserState;
      } & PersistPartial
    ) => state.home
  );

  useEffect(() => {
    if (!userAuth || !accessToken) router.push("/login");
  });

  return (
    <>
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
    </>
  );
};

export default Home;
