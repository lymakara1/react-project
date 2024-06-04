import React, { useContext } from "react";
import gicLogo from "../assets/gicLogo.png";
import { NavLink } from "react-router-dom";
import { ShareText } from "./ShareText";

function NavBar() {
  const { fullscreen, setFullScreen } = useContext(ShareText);

  const handleFullScreen = () => {
    setFullScreen(true);
    console.log("handle Full Screen" + fullscreen);
  };

  return (
    <nav className="m-3 bg-[#71A8FB] rounded-md flex flex-row gap-3 p-3 justify-center items-center">
      <img className="h-12 rounded-sm" src={gicLogo} alt="" />
      <div className="flex flex-row gap-3 flex-grow justify-center items-center">
        <NavLink className="hover:text-white" to="/">
          HOME
        </NavLink>
        <NavLink className="hover:text-white" to="/documents">
          DOCUMENTS
        </NavLink>
        <NavLink className="hover:text-white" to="/AboutUs">
          ABOUT US
        </NavLink>
      </div>
      <div>
        <button onClick={handleFullScreen} className="bg-white p-2 rounded-md">
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
      </div>
    </nav>
  );
}

export default NavBar;
