import { NextPage } from "next";
import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "firebase.tsx/initFirebase";
import { async } from "@firebase/util";
import { useRouter } from "next/router";
import { UserCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";

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
    <div  className="login--content content w-full  ">
      <div onClick={() => signIn()} className="flex  justify-center mx-auto  items-center w-64 p-5 bg-white rounded-full text-black text-center relative top-60">
        <Image src="/google.png" height="20" width="20" alt="logo" />
        <p className="mx-2 font-semibold text-slate-900"> Sign In</p>{" "}
      </div>
    </div>
  );
};

export default Login;
