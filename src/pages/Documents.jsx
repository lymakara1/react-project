import React, { useContext } from "react";
import FireworkCanvas from "../animations/FireworkCanvas";
import JessicaJonesLogo from "../animations/JessicaJonesLogo/JessicaJonesLogo";
import NeonText from "../animations/NeonText/NeonText";
import PerspectiveTextHover from "../animations/PerspectiveTextHover/PerspectiveTextHover";

function Documents() {
  return (
    <div className="m-3 p-3 rounded-md bg-gradient-to-r from-[#D21CFF] to-[#FF1E22]">
      <div>Documents</div>
      <div className="text-white">
        <div>hello</div>
        <div>question 1</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <JessicaJonesLogo />
        <NeonText />
        <PerspectiveTextHover />
      </div>
    </div>
  );
}

export default Documents;
