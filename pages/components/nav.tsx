import { UserCircleIcon, ChevronLeftIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAppSelector } from "redux/hooks";

function Nav() {
  const { userAuth } = useAppSelector((state) => state.home);

  const router = useRouter();

  const handleClickRouter = () => {
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Erjus Stafa</title>
        <meta name="description" content="Genersted by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="nav--bar--wrapper container flex flex-row content-center justify-between sm:w-4/5 xl:w-4/5 2xl:w-6/12 w-screen mx-auto px-4  relative">
        {userAuth ? (
          <div className="flex flex-col content-center w-8 my-auto" onClick={handleClickRouter}>
            <ChevronLeftIcon className="text-gray-500" />
            <p className="text-gray-500 w-1/2	 text-md font-sans font-medium">Zurück</p>
          </div>
        ) : null}
        <Image src="/logo.svg" height="144" width="204" alt="logo" />{" "}
        {!userAuth ? (
          <div className=" flex flex-col flex  items-center pt-4 pb-4 w-32 h-32  rounded-full absolute -right-6 -top-3 bg-white md:bg-transparent  lg:bg-transparent 2xl:bg-transparent xl:bg-transparent z-0">
            <UserCircleIcon className="md:w-10 md:h-10 2xl:w-20 2xl:h-20  md:h-full text-[#6a1680] z-10 " />
            <p className="text-gray-500 w-1/2	 text-sm font-sans font-medium text-center uppercase">Kunden Bereich</p>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Nav;
