import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Main from "@/pages/components/main";
import Nav from "@/pages/components/nav";
import Footer from "@/pages/components/footer";
import { useAppSelector } from "redux/hooks";


const Home: NextPage = () => {
const {userAuth} = useAppSelector((state) => state.home)
console.log("userAuth", userAuth);


  return (
    <div className={styles.container}>
      <Head>
        <Nav />
      </Head>

      <main className={styles.main}>
        <Main description="Der Berliner Pflegedienst mit Durchblick und Expertise" />
      </main>


      <footer className={styles.footer}>
        <Footer title="binschonda Hauptstadt-Pflegedienst GmbH" />
      </footer>
    </div>
  );
};

export default Home;
