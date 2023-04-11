import router from "next/router";
import { useContext } from "react";
import { themes } from "@/context/context";
const WinPage = () => {
  const { score, setScore } = useContext(themes);
  const changePage = () => {
    router.push({
      pathname: "/",
    });
  };
  return (
    <>
      <div className="dark:bg-[#192734] h-[calc(100vh-44PX)] flex ">
        <div className="maindiv  p-8 w-4/5 m-auto  bg-white-800 border-2 dark:bg-[#192734]	border-slate-400	border-solid	rounded-lg	">
          {" "}
          <div className="secounddiv  w-4/5 m-auto mt-4 bg-white-800 justify-around flex flex-col">
            <div>
              <h2 className="text-2xl dark:text-white	dark:hover:text-amber-600 hover:text-amber-600  font-bold text-center">{`Exam is completed your score is ${score} out of ${9}`}</h2>
            </div>
            <div className="m-auto p-10 ">
              <button
                type="button"
                className="bg-gray-800 text-white-900 dark:bg-white-800 text-white border border-gray-800 hover:bg-white-900  focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-white-600 dark:text-black-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                onClick={changePage}
              >
                re Attempt exam
              </button>
            </div>

            {/* <button className="border-2 border-slate-400	border-solid	rounded-lg"></button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default WinPage;
