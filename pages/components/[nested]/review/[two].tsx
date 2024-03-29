import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { dataContainerTwo } from "config/data";
import { IDataContainer } from "Interface";
import { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { useRouter } from "next/router";
import { authentication } from "redux/reducer/reducerSlice ";
import styles from "../../../../styles/Two.module.css";

const NestedTwo: NextPage = () => {
  const [fillBackground, setFillBackground] = useState<string>("transparent");
  const [removeColor, setRemoveColor] = useState<boolean>(false);
  const [idSelected, setIdSelected] = useState<number>(1);
  const [showDetails, setShowDetails] = useState<boolean>(true);

  const handleFillSelectOption = (id: number) => {
    setFillBackground("#812181");
    setRemoveColor(!removeColor);
    setIdSelected(id);
  };

  const handleToggleOption = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div
      className={`${styles.containerTwo} container sm:w-4/5 xl:6/12 2xl:w-6/12	w-screen px-7 mx-auto  overflow-hidden`}
    >
      <h3 className="text-justify text-gray-500 text-sm font-medium leading-loose my-2">
        Wie oft wúnchen Sie eine Reining?
      </h3>
      {dataContainerTwo.map((item: IDataContainer) => (
        <div
          key={item.id}
          onClick={() => handleFillSelectOption(item.id)}
          className={
            "selceted-option-tab flex flex-row justify-flex-start p-3 my-2 rounded-lg mx-autorounded-lg bg-white shadow-lg shadow-white-500/80 text-gray-500  relative cursor-pointer " +
            (idSelected === item.id ? " active" : "")
          }
        >
          <span
            className={
              "selceted-option border border-[gray] w-[20px] h-[20px] rounded-full " +
              (idSelected === item.id ? " active " : "")
            }
          >
            {null}
          </span>
          <p
            className={
              "paragraph-active text-center absolute left-14" +
              (idSelected === item.id ? " active " : "")
            }
          >
            {item.boxParagraph}
          </p>
        </div>
      ))}
      <h3 className="text-justify text-gray-500 text-sm font-medium leading-loose my-2 ">
        Wie lange schaten die die dauer der Reining ein?
      </h3>
      <div className="flex  transition ease-in-out delay-1750  flex-col justify-between p-2 my-1 rounded-lg mx-autorounded-lg bg-white shadow-md shadow-white-500/80 text-gray-500  hover:text-white ">
        <span
          onClick={handleToggleOption}
          className="flex flex-row justify-between text-gray-500 cursor-pointer "
        >
          <p>Dauer auswahlen</p>

          {showDetails ? (
            <ChevronDownIcon className="w-6 h-full text-inherit z-10" />
          ) : (
            <ChevronUpIcon className="w-6 h-full text-inherit z-10" />
          )}
        </span>

        {showDetails ? null : <p className=" text-black text-center">Hallo</p>}
      </div>

      <span className="min-w-full flex flex-row justify-center mt-5  ">
        <a className="text-center w-[300px] font-medium  leading-10 mt-5 text-white rounded-lg mx-autorounded-lg bg-[#6a1680] shadow shadow-white-500/40 cursor-pointer">
          Weiter zu Terminmóglicheiten
        </a>
      </span>
    </div>
  );
};

export default NestedTwo;
