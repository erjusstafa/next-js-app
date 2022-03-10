import { EmptyObject } from "@reduxjs/toolkit";
import { userAccesToken } from "config/getUserDetail";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { PersistPartial } from "redux-persist/lib/persistReducer";
import { useAppSelector } from "redux/hooks";
import { UserState } from "redux/reducer/reducerSlice ";
import styles from "../styles/NotFound.module.css";

const PageNotFound = () => {
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
    setTimeout(() => {
      if (userAuth === true || accessToken) {
        return router.push("/");
      } else {
        return router.push("/login");
      }
    }, 2000);
  });

  return (
    <div className={`${styles.NotFoundContent} content w-full`}>
      <div className="flex cursor-pointer justify-center mx-auto  items-center w-64 p-5 bg-white rounded-full text-black text-center relative top-60 shadow-lg">
        <p className="mx-2 font-semibold text-slate-900 "> Page Not | Found</p>{" "}
      </div>
    </div>
  );
};

export default PageNotFound;
