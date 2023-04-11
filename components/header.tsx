import { themes } from "@/context/context";
import Link from "next/link";
import { useContext } from "react";
import Image from "next/image";
import moon from "../assets/moon-svgrepo-com.svg";
import sun from "../assets/sunSvg.svg";
import { spawn } from "child_process";

const Header = () => {
  const { dark, setDark, darkMode } = useContext(themes);

  return (
    <nav className="bg-gray-700 dark:bg-gray-700 flex justify-between ">
      <div className="max-w-screen-xl px-4 py-3  ">
        <div className="flex">
          <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm justify-start">
            <li>
              <Link
                href="/"
                className="text-gray-900 dark:text-white hover:underline "
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 dark:text-white hover:underline active:text-orange-400"
              >
                Company
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 dark:text-white hover:underline active:text-orange-400"
              >
                Team
              </a>
            </li>
            <li>
              <Link
                href="/About"
                className="text-gray-900 dark:text-white hover:underline active:text-orange-400"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="hover:rotate-12 hover:duration-75	flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm  dark:text-white active:text-orange-400">
        <Image
          src={dark ? sun : moon}
          height={24}
          width={24}
          alt="svg"
          onClick={darkMode}
        />
      </div>
    </nav>
  );
};
export default Header;
