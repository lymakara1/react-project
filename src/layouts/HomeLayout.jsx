import React, { useContext } from "react";
import DisplayCanvas from "../components/DisplayCanvas";
import { ShareText } from "../components/ShareText";

function HomeLayout() {
  return (
    <div className="b bg-slate-400 m-3 p-3 rounded-md">
      <DisplayCanvas />
    </div>
  );
}

export default HomeLayout;
