import { themes } from "@/context/context";
import Link from "next/link";
import { useContext } from "react";

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
                className="text-gray-900 dark:text-white hover:underline active:text-orange-400 "
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
      <div className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm  dark:text-white active:text-orange-400">
        <button onClick={darkMode}>DarkMode</button>
      </div>
    </nav>
  );
};
export default Header;
