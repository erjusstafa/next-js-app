import { NextPage } from "next";
import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { async } from "@firebase/util";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/LoginStyle.module.css";
import { firebaseApp } from "../firebase/initFirebase";

const Login: NextPage = () => {
  const firebseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  const signIn = async () => {
    const { user } = await signInWithPopup(firebseAuth, provider);
    const { refreshToken, providerData } = user;

    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));
    router.push("/");
  };

  return (
    <div className={`${styles.loginContent} login--content content w-full`}>
      <div
        onClick={() => signIn()}
        className="flex cursor-pointer justify-center mx-auto  items-center w-64 p-5 bg-white rounded-full text-black text-center relative top-60 shadow-lg"
      >
        <Image src="/google.png" height="20" width="20" alt="logo" />
        <p className="mx-2 font-semibold text-slate-900"> Sign In</p>{" "}
      </div>
    </div>
  );
};

export default Login;
