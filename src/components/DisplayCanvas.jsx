import React, { useContext, useEffect, useRef } from "react";
import { ShareText } from "./ShareText";
import Canvas from "./canvas/Canvas";

function DisplayCanvas() {
  const { text, setText } = useContext(ShareText);

  function handleChange(e) {
    setText(e.target.value);
    console.log(e.target.value);
  }
  return (
    <div className="flex flex-col gap-3">
      <Canvas className="bg-white h-20" />
      <h2 className="p-3 bg-white rounded-md">{text}</h2>
      <div className="flex flex-col">
        <div className="flex flex-row gap-2">
          <input
            className="grow p-3 rounded-md border-none"
            onChange={handleChange}
            value={text}
            type="text"
            placeholder={text}
          />
          <button
            className="bg-[#71A8FB] rounded-md hover:text-white p-3 flex justify-center items-center"
            onClick={() => setText("")}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default DisplayCanvas;
