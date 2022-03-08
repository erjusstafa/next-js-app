import { IDescription } from "InterfaceTypes";
import Link from "next/link";

const Main = ({description} : IDescription) => {
  return (
    <div className="container px-4 flex flex-col justify-center my-auto mx-auto mt-20  sm:w-screen xl:w-6/12 2xl:w-6/12 	w-screen">
      <h3 className="text-[#7A7A7A] font-medium text-2xl text-center	">
        {description}
      </h3>
      <span className="w-100">
        <p className="text-center font-medium	 text-[#7A7A7A] rounded-lg p-4 mt-5 mx-autorounded-lg bg-white shadow shadow-white-500/40	">
          Postleitzahl eingeben
        </p>
      </span>
      <span className="min-w-full flex flex-row justify-center mt-5">
        <Link href={"/components/nested/componentNestedOne"}>
          <a className="text-center w-64  font-medium text-white rounded-lg p-4 mx-autorounded-lg bg-[#6a1680] shadow shadow-white-500/40">
            Agnebote ansehen
          </a>
        </Link>
      </span>
    </div>
  );
};

export default Main;
