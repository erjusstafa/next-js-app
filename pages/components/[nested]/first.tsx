import { dataContainerOner } from "config";
import { IDataContainer } from "InterfaceTypes";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { NextPage } from "next";
import { useAppSelector } from "redux/hooks";
import { useRouter } from "next/router";

const ComponentNestedOne: NextPage = () =>{
  return (
   
      <div className="container--component--one container sm:w-4/5 xl:6/12 2xl:w-6/12 w-screen px-5 flex flex-col justify-center mx-auto mb-5 ">
        <h3 className="text-justify text-gray-600 font-medium text-2xl">Wir sind Fans von Spandau!</h3>
        <h3 className="text-justify text-gray-500 text-md font-medium leading-loose my-2 ">
          Tolle Nachrichten warten auf Sie :{" "}
        </h3>
        <div className="relative w-50 mx-auto rounded-lg mx-autorounded-lg bg-white shadow-lg shadow-white-500/80 p-5 mx-1">
          <h2 className="title text-black-800 font-black text-md	">Willkommenspaket im Dezember</h2>
          <p className=" text-gray-600 my-3 font-medium">-Hasreinigung</p>
          <hr className="border-[#812181] my-3 opacity-30" />
          <p className=" text-gray-600 my-3 font-medium">Im Wert von $ 295,90</p>
          <h2 className="text-black-800 font-medium text-xl	">WBei Pflegegrad 2 ubernimmt die Kasse 100% der Kosten</h2>
          <span className="min-w-full flex flex-row justify-center mt-5">
            <Link href={"/components/nested/review/deep"}>
              <a className="text-center w-[300px] font-medium  leading-10  text-white rounded-lg mx-autorounded-lg bg-[#6a1680]">
                Unverbindlich Anfraghen
              </a>
            </Link>
          </span>
          <p className="text-center text-[#6a1680] font-medium leading-10 mt-2">
            Prúfen ob Pflegezuscuss auf mich zutrifft
          </p>
          <span className="absolute -top-5 -right-5 uppercase text-white bg-[#6a1680] w-12  h-12 rounded-full  flex flex-row justify-center items-center">
            neu
          </span>
        </div>

        <h3 className="text-justify text-gray-500 text-md font-medium leading-loose my-3 ">
          Was wir in Spandau anbieten :
        </h3>
        {dataContainerOner.map((item: IDataContainer) => (
          <div key={item.id}>
            <Link href={"/components/nested/review/two"}>
              <a className="flex transition ease-in-out delay-1750  flex-row justify-between p-3 my-1 rounded-lg mx-autorounded-lg bg-white shadow-lg shadow-white-500/80 text-gray-500 hover:bg-[#6a1680] hover:text-white ">
                <p>{item.boxParagraph}</p>
                <ChevronRightIcon className="w-6 h-full text-inherit z-10  " />
              </a>
            </Link>
          </div>
        ))}
      </div>
   
  );
}

export default ComponentNestedOne;
