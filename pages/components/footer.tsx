import Image from "next/image";
import logoFooter from "/logoFooter.svg";
import { Ifooter } from "InterfaceTypes";
import  style from "../../styles/FooterStyle.module.css"
function Footer({ title }: Ifooter) {
  return (
    <div className={`${style.footerContainer} footer--wrapper p-0 m-0 min-w-full	 flex flex-col items-center  bg-[#6a1680] relative`}>
      <Image src="/logoFooter.svg" height="60" width="60" alt="logo" />{" "}


      <p className="text-white text-sm font-sans font-normal text-center capitalize mt-2">{title}</p>
    </div>
  );
}
export default Footer;
