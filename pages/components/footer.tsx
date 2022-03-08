import Image from "next/image";
import logoFooter from "/logoFooter.svg";
import { Ifooter } from "InterfaceTypes";

function Footer({ title }: Ifooter) {
  return (
    <div className="p-0 m-0 min-w-full	 flex flex-col items-center  bg-[#6a1680] relative ">
      <div className="relative top-2 ">
        <img src="/logoFooter.svg" height={80} width={80} alt="logo" />{" "}
      </div>
      <p className="text-white text-sm font-sans font-normal text-center capitalize mt-5">{title}</p>
    </div>
  );
}
export default Footer;
