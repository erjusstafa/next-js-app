import { NextPage } from "next";
import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { async } from "@firebase/util";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/LoginStyle.module.css";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { firebaseApp } from "config/firebase";
import { authentication, UserState } from "redux/reducer/reducerSlice ";
import { EmptyObject } from "@reduxjs/toolkit";
import { PersistPartial } from "redux-persist/lib/persistReducer";

const Login: NextPage = () => {
  const firebseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { userAuth } = useAppSelector(
    (
      state: EmptyObject & {
        home: UserState;
      } & PersistPartial
    ) => state.home
  );
  const [isLoggin, setIsLoggin] = useState<boolean>(userAuth);

  const signIn = async () => {
    const { user } = await signInWithPopup(firebseAuth, provider);
    const { refreshToken, providerData } = user;
    setIsLoggin(isLoggin);
    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));
    router.push("/");
    dispatch(authentication(true));
  };

  return (
    <div className={`${styles.loginContent} content w-full`}>
      <p className="text-center font-bold relative top-60">
        Please click Sign In button to access this site
      </p>
      <div
        onClick={() => signIn()}
        className="flex cursor-pointer justify-center mx-auto  items-center w-64 p-5 bg-white rounded-full text-black text-center relative top-80 shadow-lg"
      >
        <Image src="/google.png" height="20" width="20" alt="logo" />
        <p className="mx-2 font-semibold text-slate-900 "> Sign In</p>{" "}
      </div>
    </div>
  );
};

export default Login;
