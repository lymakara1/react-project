import React, { useContext } from "react";
import { ShareText } from "./ShareText";

function InputField() {
  const { text, setText } = useContext(ShareText);

  function handleChange(e) {
    setText(e.target.value);
    console.log(e.target.value);
  }
  return (
    <div className="flex flex-col gap-3">
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
            className="text-white bg-blue-700 hover:bg-blue-800 rounded-md  p-3 flex justify-center items-center"
            onClick={() => setText("")}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputField;
