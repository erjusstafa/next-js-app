import { IDescription } from "InterfaceTypes";
import { useRouter } from "next/router";
import { useAppDispatch } from "redux/hooks";
import { authentication } from "redux/reducer/reducerSlice ";

const Main = ({ description}: IDescription ) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleClickRouter = () => {
    router.push("components/nested/first");
    dispatch(authentication(true));
  };
  return (
    <div className="container px-4 flex flex-col justify-center m-40 mx-auto   sm:w-screen xl:w-6/12 2xl:w-6/12 	w-screen">
      <h3 className="text-[#7A7A7A] font-medium text-2xl text-start md:text-center md:text-center xl:text-center 2xl:text-center">
        {description}
      </h3>
      <span className="w-100">
        <p className="text-center font-medium	 text-[#7A7A7A] rounded-lg p-4 mt-5 mx-autorounded-lg bg-white shadow-xl shadow-white-500/40	">
          Postleitzahl eingeben
        </p>
      </span>
      <span
        className="min-w-full flex flex-row justify-center mt-5"
        onClick={handleClickRouter}
      >
        <a className="text-center w-64 cursor-pointer font-medium text-white rounded-lg p-4 mx-autorounded-lg bg-[#6a1680]">
          Agnebote ansehen
        </a>
      </span>
    </div>
  );
};

export default Main;
