import Image from "next/image";
import logo from "../public/logo.svg";
import styles from "../../styles/nav.module.css";
import { UserCircleIcon, ChevronLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

function Nav() {

  const router = useRouter()

  const hnadleClickRouter = () => {
    router.push("/")

  }
  return (
    <div className="container sm:w-screen xl:w-6/12 2xl:w-6/12  xl:p-4 2xl:p-4	w-screen mx-auto">
      <div className="flex flex-row   items-center justify-between   relative ">
        <div className="w-10 mb-8" onClick={hnadleClickRouter}>
          <ChevronLeftIcon className="text-gray-500"  />
        </div>
        <div className="relative  mb-8">
          <img src="/logo.svg" height={144} width={144} alt="logo" />{" "}
        </div>
        <div className=" flex flex-col flex  items-center pt-4 pb-4 w-32 h-32  rounded-full relative -right-6 bottom-4 bg-white md:bg-transparent  lg:bg-transparent 2xl:bg-transparent xl:bg-transparent z-0">
          <UserCircleIcon className="md:w-10 2xl:w-20 2xl:h-20  md:h-full text-[#6a1680] z-10 " />
          <p className="text-gray-500 w-1/2	 text-sm font-sans font-medium text-center uppercase">Kunden Bereich</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
