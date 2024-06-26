import React, { useContext, useState } from "react";
import gicLogo from "../assets/gicLogo.png";
import { NavLink } from "react-router-dom";
import { ShareText } from "./ShareText";
import Premium from './Premium.svg'

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { fullscreen, setFullScreen } = useContext(ShareText);
  const handleFullScreen = () => {
    setFullScreen(true);
    console.log("handle Full Screen" + fullscreen);
  };

  return (
    <nav className="bg-slate-100 z-20 top-0 start-0  border-gray-200 dark:border-gray-600 mx-3 p-3 rounded-md">
      <div className="max-w flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://gic.itc.edu.kh/">
          <img
            className="h-12 rounded-sm hover:scale-125 transition duration-150 ease-out hover:ease-in"
            src={gicLogo}
            alt="GIC logo"
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
          <button
            onClick={handleFullScreen}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
              />
            </svg>
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          // className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-sticky"
        >
          <div className=" items-center flex max-md:flex-col  max-md:w-auto p-4 max-md:p-0 mt-4 font-medium border  rounded-lg   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  justify-evenly ">
            <NavLink
              className="block py-2 px-3 text-[#2b5e64] focus:text-[#63cbff] hover:scale-125 transition duration-150 ease-out hover:ease-in rounded max-md:focus:bg-blue-400 max-md:focus:text-white md:p-0 max-md:hover:scale-100 no-underline"
              to="/"
            >
              HOME
            </NavLink>

            <NavLink
              className="block py-2 px-3 text-[#2b5e64] focus:text-[#63cbff] hover:scale-125 transition duration-150 ease-out hover:ease-in rounded max-md:focus:bg-blue-400 max-md:focus:text-white md:p-0 max-md:hover:scale-100 no-underline"
              to="/documents"
            >
              DOCUMENTS
            </NavLink>

            <NavLink
              className="block py-2 px-3 text-[#2b5e64] focus:text-[#63cbff] hover:scale-125 transition duration-150 ease-out hover:ease-in rounded max-md:focus:bg-blue-400 max-md:focus:text-white md:p-0 max-md:hover:scale-100 no-underline"
              to="/AboutUs"
            >
              ABOUT US
            </NavLink>

            <NavLink
              className=" bg-yellow-200 block py-2 px-3 text-[#2b5e64] focus:text-[#63cbff] hover:scale-125 transition duration-150 ease-out hover:ease-in rounded max-md:focus:bg-blue-400 max-md:focus:text-white md:p-0 max-md:hover:scale-100 no-underline"
              to="/SpecialORNG"
            >
              <img src={Premium}  class='w-28 flex items-center' alt="" />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
