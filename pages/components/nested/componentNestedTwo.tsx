import Link from "next/link";
import React, { useEffect, useState } from "react";
import Footer from "../footer";
import Nav from "../nav";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { dataContainerTwo } from "config";
import { IDataContainer } from "InterfaceTypes";
import { NextPage } from "next";

const ComponentNestedTwo: NextPage = () => {
  const [fillBackground, setFillBackground] = useState<string>("transparent");
  const [removeColor, setRemoveColor] = useState<boolean>(false);
  const [idSelected, setIdSelected] = useState<number>(1);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleFillSelectOption = (id: number) => {
    setFillBackground("#812181");
    setRemoveColor(!removeColor);
    setIdSelected(id);
  };

  const handleToggleOption = () => {
    setShowDetails(!showDetails);
  };
  return (
    <>
      <Nav />
      <div className="container sm:w-screen   xl:w-6/12 2xl:w-6/12 	 w-screen   px-5 flex flex-col justify-center mx-auto mb-5 min-h-screen ">
        <h3 className="text-justify text-gray-500 text-sm font-medium leading-loose my-2 ">
          Wie oft wúnchen Sie eine Reining?
        </h3>
        {dataContainerTwo.map((item: IDataContainer) => (
          <div key={item.id} onClick={() => handleFillSelectOption(item.id)}>
          
              <div
                className={
                  "selceted-option-tab flex flex-row justify-between p-2 my-1 rounded-lg mx-autorounded-lg bg-white shadow shadow-white-500/80 text-gray-500   cursor-pointer" +
                  (idSelected === item.id ? "active" : "")
                }
              >
                <span
                  className={
                    "selceted-option border border-[#812181] w-[20px] h-[20px] rounded-full " +
                    (idSelected === item.id ? "active" : "")
                  }
                >
                  {null}
                </span>
                <p>{item.boxParagraph}</p>
              </div>
          </div>
        ))}
        <h3 className="text-justify text-gray-500 text-sm font-medium leading-loose my-2 ">
          Wie lange schaten die die dauer der Reining ein?
        </h3>
        <div className="flex  transition ease-in-out delay-1750  flex-col justify-between p-2 my-1 rounded-lg mx-autorounded-lg bg-white shadow shadow-white-500/80 text-gray-500  hover:text-white ">
         
            <span className="flex flex-row justify-between text-gray-500  ">
              <p>Dauer auswahlen</p>

              {showDetails ? (
                <ChevronDownIcon className="w-6 h-full text-inherit z-10  cursor-pointer" onClick={handleToggleOption} />
              ) : (
                <ChevronUpIcon className="w-6 h-full text-inherit z-10  cursor-pointer" onClick={handleToggleOption} />
              )}
            </span>
     

          {showDetails ? null : <p className=" text-black text-center">Hallo</p>}
        </div>

        <span className="min-w-full flex flex-row justify-center mt-5">
          <Link href={"/"}>
            <a className="text-center w-[300px] font-medium  leading-10  text-white rounded-lg mx-autorounded-lg bg-[#6a1680] shadow shadow-white-500/40">
              Weiter zu Terminmóglicheiten
            </a>
          </Link>
        </span>
      </div>
      <Footer title="binschonda Hauptstadt-Pflegedienst GmbH" />
    </>
  );
};

export default ComponentNestedTwo;
