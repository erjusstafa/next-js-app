import { useRouter } from "next/router";
import React, { useEffect } from "react";

const RedirectPage = ({ to }: any) => {
  const router = useRouter();

  useEffect(() => {
    router.push(to);
  }, [to]);

  return null;
};

export default RedirectPage;
