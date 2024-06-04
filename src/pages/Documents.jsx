import React, { useContext } from "react";
import { ShareText } from "../components/ShareText";

function Documents() {
  const { text, setText } = useContext(ShareText);
  setText("hello");
  return (
    <div className="m-3 p-3 rounded-md bg-gradient-to-r from-[#D21CFF] to-[#FF1E22]">
      <div>{text}</div>
      <div>Documents</div>
      <div className="text-white">
        <div>hello</div>
        <div>question 1</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </div>
    </div>
  );
}

export default Documents;
