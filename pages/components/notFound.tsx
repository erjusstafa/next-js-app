import { NextRouter, useRouter } from "next/router";
import React, { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);

  return <div>NotFound </div>;
};

export default NotFound;
