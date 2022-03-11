import { UserCircleIcon, ChevronLeftIcon } from "@heroicons/react/outline";
import { EmptyObject } from "@reduxjs/toolkit";
import { fetchUser } from "config/getUserDetail";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PersistPartial } from "redux-persist/lib/persistReducer";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { authentication, UserState } from "redux/reducer/reducerSlice ";
import styles from "../../styles/NavStyle.module.css";

function Nav() {
  const { userAuth } = useAppSelector(
    (
      state: EmptyObject & {
        home: UserState;
      } & PersistPartial
    ) => state.home
  );
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [user, setUser] = useState({});
  const userInfo = fetchUser();

  useEffect(() => {
    setUser(userInfo);
  }, []);

  const handleClickRouter = () => {
    if (router.pathname !== "/") {
      router.back();
    }
  };

  const Logout = () => {
    localStorage.clear();
    router.push("/login");
    dispatch(authentication(false));
  };

  //get yor images when you are loggedIn
  const myLoader = () => {
    return userInfo[0]?.photoURL;
  };

  return (
    <>
      <Head>
        <title>Erjus Stafa</title>
        <meta name="description" content="Genersted by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div
        className={`${styles.navBarWrapper} container flex flex-row content-center justify-between sm:w-4/5 xl:w-4/5 2xl:w-6/12 w-screen mx-auto px-6  relative`}
      >
        {userAuth && router.pathname !== "/" ? (
          <div
            className="flex flex-col content-center w-8 my-auto cursor-pointer "
            onClick={handleClickRouter}
          >
            <ChevronLeftIcon className="text-gray-500" />
            <p className="text-gray-500 w-1/2	 text-md font-sans font-medium">
              Zurück
            </p>
          </div>
        ) : null}

        <div
          className={
            userAuth && router.pathname === "/"
              ? "block mx-auto relative -left-4 "
              : "block mx-auto relative -left-8"
          }
        >
          <Image src="/logo.svg" height="144" width="204" alt="logo" />
        </div>
        {!userAuth || router.pathname === "/" ? (
          <div
            onClick={Logout}
            className={` flex flex-col items-center shadow-${
              userAuth || !userInfo ? "transparent" : "lg"
            } md:shadow-transparent lg:shadow-transparent 2xl:shadow-transparent xl:shadow-transparent  pt-4 pb-4 w-32 h-32 cursor-pointer rounded-full absolute -right-6 -top-3 bg-${
              userAuth || !userInfo ? "transparent" : "white"
            } md:bg-transparent lg:bg-transparent 2xl:bg-transparent xl:bg-transparent z-0`}
          >
            {userAuth ? (
              <Image
                loader={myLoader}
                src="me.png"
                height="80"
                width="80"
                alt="logo"
                className="rounded-full"
              />
            ) : (
              <UserCircleIcon className=" 2xl:w-20 2xl:h-20  md:h-full text-[#6a1680] z-10 " />
            )}
            <p className="text-gray-500 w-1/2	 text-sm font-sans font-medium text-center uppercase">
              {userAuth === true
                ? userInfo[0]?.displayName.length > 5
                  ? userInfo[0]?.displayName.split(" ")[0]
                  : userInfo[0]?.displayName
                : "Kunden Bereich"}
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Nav;
