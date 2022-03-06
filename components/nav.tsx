import Image from "next/image";
import logo from "../public/logo.svg";
import { UserCircleIcon, ChevronLeftIcon } from "@heroicons/react/outline";
function Nav() {
  return (
    <div className="flex flex-row justify-around  relative ">
      <div className="w-10 mt-2">
        <ChevronLeftIcon className="text-gray-500" />
      </div>
      <div className="relative mt-4">
        <img
          src="/logo.svg"
          height={144}
          width={144}
          alt="logo"
          className="bg-mint text-mint fill-current"
        />{" "}
      </div>
      <div className=" flex flex-col items-center pt-4 pb-4 w-28 h-28  rounded-full relative -right-10 bottom-6 bg-white  z-0">
        <UserCircleIcon className="w-10 h-full	relative right-2 h-full	 text-[#812181]  z-10 " />
        <p className="text-gray-500 text-sm font-sans font-medium text-center uppercase">
          Kunden Bereich
        </p>
      </div>
    </div>
  );
}

export default Nav;
